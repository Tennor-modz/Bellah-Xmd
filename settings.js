
const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU1jcXg0TUZuSzBkNDhkL1dlZUhRQzBURnQrR01rY3FkTzFFYVlpUGkwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnNJR2xZd2pmTHJpOEZ0eHQwT2d2RDlLOHpWYUlqS04xT0V0RmxMS0FXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTT2s0N0JpL0MwenZDNGZwUDRYVlJMbEJubVRQb2lVbm5NNUZVa2lxOGtJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwWlBSb2Z2b3V3ZE10RmJ2aUJXbVN2aXNDWlRBWmplUXYvT3FlL1FETWdzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNOajNuYUV3Vno2MnpsMExaSE5PL0pjQ1paYUREVFFJZ1JlRTR6UlRRbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlByUGp5YlUraWwxSVd4SEFqT1k4VEg2TlpoVFBJdXA3bCtCT2dOT1Qzakk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEZlNmxNeUY4Z21JOFFxdXc4RkcvVExKbG1oRnJCR1grRU0ra05uaVgyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNWI4MkxMSXVzS1kyVlR5TU5GZkZLV3RRZnJEZkJQQUFRa1pJT2VOTlhDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlCZjJZaGlZVzlkMzFwOUtXdEc1cUp4T2ZzMTdDU1BheENnYmgzNDZ0a0FVRkFodnl1YzRadTg4UFZUVEdGRDUwSml4NG5GNnN1SXhnQ3VhejJ1eGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJad2dNQjVaSThnUHFwaG5qS01xOThudVZ3WWxDYzJPSmgyMGhUQVlWenJFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItSV9ORlU4NFFObTJqQUk2LVdsM0JnIiwicGhvbmVJZCI6IjkzZTdiMjVkLWE1OWMtNDM2OC1hZTIyLTEyMmE3ODljZDE5MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3dHRvL2t3VGtpWG15UEljcEZPYnhBcUZWV3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0hqckNtTGY4YUVDY3Z6MHlhWEtXOTJwVE13PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1CVVZJSU1EIiwibWUiOnsiaWQiOiIyMzI3NDQ0ODEzMDo4QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTQxMzUyMDA0MjI3MTAzOjhAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLR284Vk1Ra0p6S3d3WVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOVG9nN3A4cHNFWmlOaUxyM2xqTDFnaVovTkI2ZVppbmhLUzlPaU9xUmlvPSIsImFjY291bnRTaWduYXR1cmUiOiI1RkI0SE9Tb0pleVZLZkVNTG5DeVEycnROMDdKYTBBOE1STlhleE4vMUt3ZFNQdmhROWlnQXd1dHNkM0lDR3NzUUUrN3FxNCtad0tNK2FjZmREeGxEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidmlqbXlSUVBjbVcvYWRNcURlb3pTSmZZMm5ORHd2OEFJWHFaS004Szh5VkdvS0xGK2huVE5rZEQ5Mi9OcWtoNjFTUTBjeldrOWkyMG1Mc2psczJUZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI3NDQ0ODEzMDo4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRVNklPNmZLYkJHWWpZaTY5NVl5OVlJbWZ6UWVubVlwNFNrdlRvanFrWXEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjMzNzk1MCwibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtpaSJ9' 

global.ytname = "YT: GIDDYTENNOR" 
global.socialm = "IG: @GIDDYTENNOR" 
global.location = "Kenya" 

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'254104245659' //ur owner number
global.ownername = 'Giddy Tennor' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" 
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" 
global.themeemoji = '🪀'
global.wm = "Mr. Take Tee"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' 
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Mr. Take Tee"
global.creator = "23274448130@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
const antilinkgc = process.env.ANTILINK_GC || 'TRUE';
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = process.env.GROUP_EVENT || 'false' //show update messages in group chat
//msg
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;

global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	owner: 'Bellah Xmd owner only<\>',
    admin: 'Bot is not admin<\>',
    group: 'feature for group only<\>',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail


let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
