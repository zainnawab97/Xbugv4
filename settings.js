//base by xbug (Xeon Bot Inc.)
//YouTube: @zainibhaii
//Instagram: zainibhai
//Telegram: t.me/darkheart
//GitHub: @darkheart
//WhatsApp: +923074060856
//want more free bot scripts? subscribe to my youtube channel: https://youtu.be/TnUAvasM-1k

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "92307060856"
global.ownername = "Dark Heart"
global.ytname = "zainibhaii"
global.socialm = "GitHub: zainnawab97"
global.location = "Dg khan"

global.ownernumber = '923074060856'  //creator number
global.ownername = 'Dark Heart🖤' //owner name
global.botname = 'DARK HEART🖤 BUG' //name of the bot

//sticker details
global.packname = 'Sticker By Dark Heart🖤'
global.author = 'Dark Heart\n\nContact: +923074060856'

//console view/theme
global.themeemoji = '🖤'
global.wm = "Dark."

//theme link
global.link = 'https://chat.whatsapp.com/KhZQtcBal1yIQJGvAAWbAC'

//custom prefix
global.prefa = ['']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = false //auto block +92 
global.autoread_status = true //auto view status/story

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only, Dark Heart🖤',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
