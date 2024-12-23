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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_08_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMixcbiAgICAgICAgMjE5LFxuICAgICAgICA4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTcwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDM1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAzNixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDM5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDczLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgNjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNixcbiAgICAgICAgNjAsXG4gICAgICAgIDgzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWNqZ1RoMVNybk5MK3BYZUt1SVRyaEtsbEpIaEhJL0t6YkE1Q3M4bmFBWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaHhQWDc4NWJUSDJab3VCYU9RXzIzQVwiLFxuICBcInBob25lSWRcIjogXCI0YWI3MDJmNi1hNzAyLTQ1MjQtYTlhOC0yMjNmMjQ2YzBkZWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgNDAsXG4gICAgICAxMDQsXG4gICAgICA1OSxcbiAgICAgIDg1LFxuICAgICAgMjA2LFxuICAgICAgMTYsXG4gICAgICAzMixcbiAgICAgIDIwNSxcbiAgICAgIDUzLFxuICAgICAgMjcsXG4gICAgICAxOTIsXG4gICAgICAyMDgsXG4gICAgICA3OSxcbiAgICAgIDI0LFxuICAgICAgMTAwLFxuICAgICAgODgsXG4gICAgICA3MixcbiAgICAgIDIzNCxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgMTgzLFxuICAgICAgMzcsXG4gICAgICAxMyxcbiAgICAgIDIyLFxuICAgICAgMjI5LFxuICAgICAgMTkxLFxuICAgICAgMjQzLFxuICAgICAgMjQwLFxuICAgICAgOTIsXG4gICAgICAxMTMsXG4gICAgICAyMjksXG4gICAgICAxNjgsXG4gICAgICAxNzYsXG4gICAgICAxNTEsXG4gICAgICAxNTQsXG4gICAgICAxNSxcbiAgICAgIDIwOCxcbiAgICAgIDE3OCxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNDVDNFBKQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA0NTUwOTcxNjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzYyNDUyNjI2MTg4MTE6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiT2xseS1yaWNoaWVcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJamp3WkVJRU82MHBMc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZISmJpaExsQ3o1UXJCdmRyOUp2MlRYN0J2YlcySnUzSDlJWkh6U2FaVnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNTJUT3ljaStUOUlpRTdHcTF6Q2RHRU9ZSGduajJnTG9rZUtsb2p6ZnlOMno3MytRb3pmVmRjdG5DV3dTYUllMHViZDlRcitpaGxMbW1XeXF2cXk1aHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiM2xVb0xFZThzcElrZVBLREhCK20wZGRjcjJFY2pHcFN6bUZockF3MkprWVhiN01zYXpPcjN4VXI0am9LSCtnQmZWdGhVd1hpenhQVlB5dVlJdE4vQ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA0NTUwOTcxNjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDk0MTI5OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFTbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQVNtLmpzb24iOiAie1wia2V5RGF0YVwiOlwibUV4elI5azQvNXZXM0d6eXV6QzYveGlaSXZ6b28xQXVKakF4NXc0WXBkOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTg0MjEyODcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5NDEyOTg4NTlcIn0iCn0="  /


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
