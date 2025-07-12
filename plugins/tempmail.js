const axios = require('axios');
let handler = async (m, { Bellah, text }) => {
 class TempMail {
 constructor() {
 this.cookie = null;
 this.baseUrl = 'https://tempmail.so';
 }

 async updateCookie(response) {
 if (response.headers['set-cookie']) {
 this.cookie = response.headers['set-cookie'].join('; ');
 }
 }

 async makeRequest(url) {
const axios = require('axios');
 const response = await axios({
 method: 'GET',
 url: url,
 headers: {
 'accept': 'application/json',
 'cookie': this.cookie || '',
 'referer': this.baseUrl + '/',
 'x-inbox-lifespan': '600',
 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"',
 'sec-ch-ua-mobile': '?1'
 }
 });

 await this.updateCookie(response);
 return response;
 }

 async initialize() {
const axios = require('axios');
 const response = await axios.get(this.baseUrl, {
 headers: {
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9',
 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"'
 }
 });
 await this.updateCookie(response);
 return this;
 }

 async getInbox() {
 const url = `${this.baseUrl}/us/api/inbox?requestTime=${Date.now()}&lang=us`;
 const response = await this.makeRequest(url);
 return response.data;
 }

 async getMessage(messageId) {
 const url = `${this.baseUrl}/us/api/inbox/messagehtmlbody/${messageId}?requestTime=${Date.now()}&lang=us`;
 const response = await this.makeRequest(url);
 return response.data;
 }
 }

 try {
 const mail = new TempMail();
 await mail.initialize();

 const inbox = await mail.getInbox();

 if (!inbox.data?.name) {
 throw new Error('Failed to get temporary email');
 }

 const emailInfo = `Temporary Email\n\n*Email :* ${inbox.data.name}\n *Expired :* 10 minutes\nInbox Status : ${inbox.data.inbox?.length || 0} Message\n\n> Email will expire in 10 minutes`;
 await m.reply(emailInfo);

 const state = {
 processedMessages: new Set(),
 lastCheck: Date.now(),
 isRunning: true
 };

 const processInbox = async () => {
 if (!state.isRunning) return;

 try {
 const updatedInbox = await mail.getInbox();

 if (updatedInbox.data?.inbox?.length > 0) {
 const sortedMessages = [...updatedInbox.data.inbox].sort((a, b) =>
 new Date(b.date) - new Date(a.date));

 for (const message of sortedMessages) {
 if (!state.processedMessages.has(message.id)) {
 const messageDetail = await mail.getMessage(message.id);

 let cleanContent = messageDetail.data?.html
 ? messageDetail.data.html.replace(/<[^>]*>?/gm, '').trim()
 : 'No text content';

 const messageInfo = `_Message title_\n\nFrom : ${message.from || 'Anomali'}\n*Subject :* ${message.subject || 'No Subject'}\n\n*Message :*\n${cleanContent}`;

 await Bellah.sendMessage(m.chat, { text: messageInfo }, { quoted: loli });
 state.processedMessages.add(message.id);
 }
 }
 }
 } catch (error) {
 console.error('Error:', error);
 }
 };

 await processInbox();

 const checkInterval = setInterval(processInbox, 10000);

 setTimeout(() => {
 state.isRunning = false;
 clearInterval(checkInterval);
 m.reply('Email will expire in 10 minutes');
 }, 600000);

 } catch (error) {
 m.reply(`Error: ${error.message}`);
 }
};
handler.help = ['mail']
handler.tags = ['tempmail']
handler.command = ['tempmail']
 
module.exports = handler;