//base by DGXeon
//recode by GIDDY TENNOR 
//YouTube: @GIDDYTENNOR


const fs = require('fs')
const chalk = require('chalk')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


global.SESSION_ID = process.env.SESSION_ID || 'Bellah~6ioDUBQD#C-6_LlfAEdLUQs6KWepGZzeX1RLFL_aeP-OwAc4kwg8' 
//owmner v card
global.ytname = "YT: GIDDYTENNOR" //ur yt chanel name
global.socialm = "IG: @GIDDYTENNOR" //ur github or insta name
global.location = "Kenya" //ur location

//new
global.botname = process.env.BOT_NAME ||'𝐁𝐞𝐥𝐥𝐚𝐡 𝐗𝐦𝐝' //enter your  bot name here
global.ownernumber = process.env.OWNER_NUMBER ||'254740873466' //ur owner number
global.ownername = '© TENNOMODZ' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.wagc = "https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H" //"https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES"
global.themeemoji = '🪀'
global.wm = "GIDDY TENNOR"
global.botscript = 'https://whatsapp.com/channel/0029VaPZWbY1iUxVVRIIOm0D' //'https://chat.whatsapp.com/JmsgzJllAAB8zHfQcJXxES' //script link
global.packname = process.env.PACK_NAME ||"VolTah Xmd" //enter your stickers author name here
global.author = "Giddy-Tennor"
global.creator = "254703726139@s.whatsapp.net"
global.xprefix = process.env.BOT_PREFIX ||'.'
global.hituet = 0

//bot settings 
global.autoblocknumber = process.env.AUTOBLOCK_NUMBER || '263,234' //set autoblock country code
global.antiforeignnumber = process.env.ANTIFOREIGN_NUMBER || '' //set anti foreign number country code
global.mode = process.env.MODE || 'public' //set bot public/private
global.anticall = process.env.ANTI_CALL || 'false' //bot blocks user when called
global.autostatusview = process.env.AUTOSW_VIEW || 'true' //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.autorecording = process.env.AUTO_RECORDING || 'false'
global.autotyping = process.env.AUTO_TYPING || 'false'

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
