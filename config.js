const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_06_52_10_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDY2LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU3LFxuICAgICAgICA3NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDksXG4gICAgICAgIDI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDU5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY5LFxuICAgICAgICA1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDMxLFxuICAgICAgICA2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA2LFxuICAgICAgICA3NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NixcbiAgICAgICAgMjAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZONnB3ZS9rTFgrRnptYnFXNXVGbmxHU2NWdlpLRUFHWDJqdGljalIwMFk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlHT3ZTSTZMU05lODdLQVJvZWdHamdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTk2ZDIxNWYtNGJkZi00NDU1LTk1ZTctYmIyMWNmNzUwZTFiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNixcbiAgICAgIDkzLFxuICAgICAgMTkyLFxuICAgICAgMTQ1LFxuICAgICAgMzEsXG4gICAgICA2MSxcbiAgICAgIDEwMCxcbiAgICAgIDExMyxcbiAgICAgIDE2NCxcbiAgICAgIDc5LFxuICAgICAgMTY2LFxuICAgICAgMTk1LFxuICAgICAgMTc5LFxuICAgICAgMjMyLFxuICAgICAgMTUzLFxuICAgICAgNTUsXG4gICAgICA4OCxcbiAgICAgIDE1OCxcbiAgICAgIDYsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAyNTQsXG4gICAgICAxOCxcbiAgICAgIDUwLFxuICAgICAgMTg1LFxuICAgICAgMjMzLFxuICAgICAgMzAsXG4gICAgICAxMjIsXG4gICAgICAxNzksXG4gICAgICAyNTQsXG4gICAgICAxNzAsXG4gICAgICAyNDksXG4gICAgICAyNTAsXG4gICAgICA1NSxcbiAgICAgIDk4LFxuICAgICAgMjA5LFxuICAgICAgMjMyLFxuICAgICAgOTgsXG4gICAgICAxNzEsXG4gICAgICA5NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHNk1KWFQ2RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjI2OTk3MTI6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTQ0NDkwOTAxNzI5OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05qa3FlSUNFS0M0N3JjR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiSEFlRWFEdkhCOTNaT3d6QXE3aWkzZi82N3B5YnhwMHNOZWNCdkl0RFNFMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrYk9XZFVKQTM0aFBBUTh0ZEJoRUMrSW93MXJqNEMyZ05PSHBaaTRFMjhNMEFZdzJDKzNHNmlONERNcTJPNjZXK2o2OXVXV0RKT1IyRDdwUWNCTi9EZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyVGJNZ3BLSC9SbXhJM1BZMFkyZitqeExMZTNWL2ZRdlM5ZEF5ZEZ5c1FzTzAvTFBxMXQ2NXg5YjA0RzRuc2QzU2tQK0VNMityNk03SXpFOCsyQ0hqUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2MjY5OTcxMjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzc2NTU0MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
