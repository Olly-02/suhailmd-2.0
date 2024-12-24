const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Olly-Tech" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347045509716";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_09_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQyLFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA1MixcbiAgICAgICAgNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgMjksXG4gICAgICAgIDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDYyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxODksXG4gICAgICAgIDkyLFxuICAgICAgICAzNCxcbiAgICAgICAgNjAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDUzLFxuICAgICAgICA4OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgwLFxuICAgICAgICA3OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBDVGhLWEhHRHhvWkxnMFF0T2VDU0lEc2ovVkdwT3c3QjhCSmNTbzhwNlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVTUVhhNV9WUjRDWkZtTjJlVnk1MGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGJiYWQ1YmQtMjU5OC00ZDVhLWI3Y2EtYjA4ZDE3MmQxMDNiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk0LFxuICAgICAgMjQxLFxuICAgICAgMTEzLFxuICAgICAgMzksXG4gICAgICAxMTgsXG4gICAgICAxNzIsXG4gICAgICA5NSxcbiAgICAgIDIyNixcbiAgICAgIDk3LFxuICAgICAgMjE2LFxuICAgICAgMzQsXG4gICAgICA2OCxcbiAgICAgIDEzNCxcbiAgICAgIDczLFxuICAgICAgMTg1LFxuICAgICAgODUsXG4gICAgICAyMzIsXG4gICAgICA5NCxcbiAgICAgIDE4LFxuICAgICAgMTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQyLFxuICAgICAgMTY3LFxuICAgICAgMzMsXG4gICAgICAxOTYsXG4gICAgICAxNTMsXG4gICAgICAyMDksXG4gICAgICAxMDcsXG4gICAgICAxMTUsXG4gICAgICAyNDAsXG4gICAgICAyMzIsXG4gICAgICAxNTQsXG4gICAgICAxMTEsXG4gICAgICAxNDQsXG4gICAgICAxNzksXG4gICAgICA4NSxcbiAgICAgIDY2LFxuICAgICAgMTA4LFxuICAgICAgOTEsXG4gICAgICAyMzMsXG4gICAgICA0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzQk5MRU1NN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NTUwOTcxNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzYyNDUyNjI2MTg4MTE6MThAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT2xseS1yaWNoaWVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPenppSWtNRU5MT3Byc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZISmJpaExsQ3o1UXJCdmRyOUp2MlRYN0J2YlcySnUzSDlJWkh6U2FaVnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNVl5VDFqSmZDZlpnTm5tNDlhYmgyK0s1cDFjWDRrWnBZOHdKY0t4MWZjeFN1SVhrbStlTFh4eXhjMGRCbTh3U2NaYkRrTVl3QkgySmZweVBybjNEaUE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWHlXY0JTQ0l1Um12WXNIM1dwOUFSNzcrMEpVdlVmb29hQVVzdlE4ZE5DQXJ4ZExvc0Jvc2JyK0dacmtRcFpxZ1JCYytTZnp1UkhPS1FsbFpTNms2RFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTUwOTcxNjoxOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk3NzM2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU13MFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXcwLmpzb24iOiAie1wia2V5RGF0YVwiOlwicDd2Q1kweUxObXY3VTlWQWhrUXdmeTNNWjRITU43ZTMzZlhrQmk2azlCYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMjQwMjQ1NzQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5NzczNjY0NDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Olly-Tech",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SUHAIL-MD",
  ownername:process.env.OWNER_NAME|| "Olly",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
