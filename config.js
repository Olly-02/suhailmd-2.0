const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT =put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="Oluwaseunolamilekan522@gmail.com"
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
global.caption = process.env.CAPTION || global.caption || "Olly-richie" 


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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_46_12_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTksXG4gICAgICAgIDU5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI3LFxuICAgICAgICA3OSxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM1LFxuICAgICAgICA5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxODUsXG4gICAgICAgIDkxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDczLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPMFRhWjA4RmxlVGsxT1F5OWI2NTJ2cktvZlNFTzF5NkQyU0dSWHlteWI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI5djBzZVV3MFRsS2VNdDh5Y1RKOURnXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ5ODQ3MDg5LTFhODMtNDM0YS04NjllLWFiZWRhMjk2ZDcyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDI1MSxcbiAgICAgIDE0OCxcbiAgICAgIDE4NyxcbiAgICAgIDE1LFxuICAgICAgNTMsXG4gICAgICA4MSxcbiAgICAgIDIyMSxcbiAgICAgIDE0NSxcbiAgICAgIDE3NyxcbiAgICAgIDQsXG4gICAgICAyMzEsXG4gICAgICAyNCxcbiAgICAgIDU0LFxuICAgICAgMTMsXG4gICAgICAyMjQsXG4gICAgICA3MSxcbiAgICAgIDIyNyxcbiAgICAgIDM3LFxuICAgICAgNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICA4MCxcbiAgICAgIDEyMSxcbiAgICAgIDE1OCxcbiAgICAgIDIxLFxuICAgICAgMTc4LFxuICAgICAgODYsXG4gICAgICAyMDUsXG4gICAgICAxNTQsXG4gICAgICAxMDcsXG4gICAgICAxNTYsXG4gICAgICAxODcsXG4gICAgICA1MixcbiAgICAgIDQxLFxuICAgICAgMjU0LFxuICAgICAgMjM5LFxuICAgICAgMjA5LFxuICAgICAgMTk0LFxuICAgICAgMzQsXG4gICAgICAxMzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRDZDUVA2UjlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNDU1MDk3MTY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM2MjQ1MjYyNjE4ODExOjIwQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk9sbHktcmljaGllXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkdoMklBQkVJenN1N3NHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2SEpiaWhMbEN6NVFyQnZkcjlKdjJUWDdCdmJXMkp1M0g5SVpIelNhWlZ3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInd6MmRsNUZEa0hhZGkwcXg4NFlzcGNiL0U0cndTbUJHWXhYd0dhSWEyREJuMmk3aEMvSEpDOStORFpRQUUyNWRNbW1YbVMzS3ptRE9ZVURtVHlDSmlRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhybFdJNGszKzF0c29yUW90L0E1YjBCR3FFMU8zSHIyMStTTXFaMVFhTE9GSEUzSFB6TkxrK3k1ejMzMWY0WGZEQk5hWllNWndjZng3aTdLQ0xUL2l3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNDU1MDk3MTY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUzMjUyMDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMbUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxtSC5qc29uIjogIntcImtleURhdGFcIjpcIjJPOUhvcmRwb2x0TmY0ZjAyS3FNNG1XVHpZU09YaC9qY3BoSWRpYlRYbVU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjY5ODgxNTUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUzMjUyMDAyNjNcIn0iCn0="  /


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Olly-tech",
  packname: process.env.PACK_NAME || "Olly-richie",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Olly-tech",


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
