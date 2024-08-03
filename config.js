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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_52_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA3MixcbiAgICAgICAgMTUsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxODEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA2MixcbiAgICAgICAgMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjksXG4gICAgICAgIDM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY4LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDksXG4gICAgICAgIDk2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICA3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICA1NixcbiAgICAgICAgODIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDAsXG4gICAgICAgIDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiL0R2aU9xMzR5WDI5cW9qZktwV2xiSHgyQ1JUYVVQRFRpTFpQUWhmZ2I2RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUW9PRmFkMG9TRmVpcWdPWDhDMUR5d1wiLFxuICBcInBob25lSWRcIjogXCJiZjZiOGVmMC1mY2FlLTRiNDQtYTZiOS1hZGMwY2MxYWNkNmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA5LFxuICAgICAgNDUsXG4gICAgICA3MSxcbiAgICAgIDE5MSxcbiAgICAgIDE5MSxcbiAgICAgIDgyLFxuICAgICAgMjQ1LFxuICAgICAgOTksXG4gICAgICAyMDIsXG4gICAgICAyNTAsXG4gICAgICAxNzUsXG4gICAgICAzLFxuICAgICAgNzAsXG4gICAgICAxOTYsXG4gICAgICAxMDgsXG4gICAgICAxNjUsXG4gICAgICA0NSxcbiAgICAgIDU0LFxuICAgICAgMTYzLFxuICAgICAgNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTUsXG4gICAgICAyMzcsXG4gICAgICA3MSxcbiAgICAgIDE1OSxcbiAgICAgIDExOSxcbiAgICAgIDEzNCxcbiAgICAgIDEzOCxcbiAgICAgIDE0NSxcbiAgICAgIDEyNyxcbiAgICAgIDMwLFxuICAgICAgMTcyLFxuICAgICAgNDEsXG4gICAgICA1MSxcbiAgICAgIDI2LFxuICAgICAgMTc4LFxuICAgICAgNzgsXG4gICAgICAxMzMsXG4gICAgICAxODIsXG4gICAgICAxODEsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0RUS1NXVEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwMTY2Mzg1MDo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTVVaQU1JTCBaQUtITUlcIixcbiAgICBcImxpZFwiOiBcIjIyNzQwMTc3NDY3ODA3ODo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ptRDcvTUdFUG1YdUxVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiS0Y1QzQ1RFlTZGFOWHNTVmtLZHNmNkF5SG5OcXhqUEZ2QkZiMXByeUNraz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuak9iZCthMHA5V0tRTG9RRjlQRnZzV0dlc29kQzRaSktyazdZV2ZBcU43VFRYK29Ya2NHYjY1ajZmQlpQZ2lycHk3RW1VeWlhdng2RWpPcnh2aExDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ5NkNqZlZYRDNZRTVmVkFQSy9IazRVSkEvQkU4UXpYSEFibWtwakl5QzdtQnl1L0Rpa0tENUJvNkpWMmlZQ05WaWR1cEZqY0tzalB3OEpSOEJsZWNCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDE2NjM4NTA6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjY4MjM2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ1ZVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDVlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUUEzcVByM1I1RWFJYUdyRFk1YVpRMmUrdTRjNk1OU2ZENjlpNWg0cTdibz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUzNjA0MjQ5LFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMCwxLDNdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjY1ODAxMjcxNFwifSIKfQ=="  // 


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
