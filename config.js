const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  //SUHAIL_20_05_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODksXG4gICAgICAgIDI4LFxuICAgICAgICA2NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NCxcbiAgICAgICAgNjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICA5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODgsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM0LFxuICAgICAgICA5NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTksXG4gICAgICAgIDcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQwLFxuICAgICAgICAzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpmQUdxeE16UFc5dDk0bm9TUStVUU5UVkVaQnhzTDFwNGhDWjBCSzQwM3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlBSGtaQTJJUWg2eWNWRVZYTkpzcGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDZiMTExMTEtODhlZS00OWU3LWI1NWUtNTg4YmIzNDcyYjg5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NCxcbiAgICAgIDE3MyxcbiAgICAgIDYxLFxuICAgICAgMTEzLFxuICAgICAgMjA5LFxuICAgICAgMTYwLFxuICAgICAgODEsXG4gICAgICAyMDcsXG4gICAgICA0MyxcbiAgICAgIDIxNSxcbiAgICAgIDIzLFxuICAgICAgODksXG4gICAgICA1MyxcbiAgICAgIDExMixcbiAgICAgIDEwLFxuICAgICAgMTYzLFxuICAgICAgMjMsXG4gICAgICAxNjgsXG4gICAgICAxMTcsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMTk2LFxuICAgICAgMTI2LFxuICAgICAgMTEyLFxuICAgICAgMTU2LFxuICAgICAgMTk3LFxuICAgICAgNjcsXG4gICAgICAxOTgsXG4gICAgICAxOCxcbiAgICAgIDEzOSxcbiAgICAgIDIzMixcbiAgICAgIDYyLFxuICAgICAgNTIsXG4gICAgICAyNDIsXG4gICAgICAxNjgsXG4gICAgICAxNzAsXG4gICAgICAxNDQsXG4gICAgICAzMixcbiAgICAgIDI0OCxcbiAgICAgIDU2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU5R1JZWFdKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzU4NDg2ODg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY2ODE2ODA2OTg1OTY3OjNAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J+Rv01VWkFNSUwgWkFLSE1J8J+Rv1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUcTVMMENFSWltbGJVR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidTFHbGNYdGpHZFI5Tk5qUklFV0tkd3dpVkQxUjh6WWFuVVAzWUdpTEhRTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlT05sVi9RYnBMSHVlQVk5dmFLZlo0Y0N6T29lZU5rSGRsbDR5QmRlZzJOSE5MSGNtMDJFaGVWbWFJWGRJTXpUcW5ydlYxdEliTlV1SHl4NUxTNDZDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWNFkva1JzUFEvcUt5WksrSklzeEx6bW5VK29od0wxejNkR3ZWR2YreGlRSjJuemRncnZ2V3V4VVlVNDRkVlhCWVZDRHpRWHF3WXEyS3o5YmF2bTNEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMxNzU4NDg2ODg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjExMDczMSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUkrblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSStuLmpzb24iOiAie1wia2V5RGF0YVwiOlwicFkyNkhqS1VRTnd2c2hBaHdPQVFaY0E1dTRUemR1aDBnMlJYSHhRU1ZzYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjY0NDkxODgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ== 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
