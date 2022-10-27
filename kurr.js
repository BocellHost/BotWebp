// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮MANZ BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER UZ COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮manzmods@mail.uk
//▮WHATSAPP US : +6281215845044
//▮YOUTUBE CHANNELL: https://youtube.com/channel/UChWa3rmmyT3_bAiCQSSGQBA
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const xfarr = require('xfarr-api')
const maker = require('mumaker')
const FormData = require('form-data')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ttdown = require('./lib/tt')
const { tiktokDownloader, instaDownloader, zippyDownloader, mediafireDownloader } = require('./lib/downloader')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, fetchText, getRandom, generateHash } = require('./lib/myfunc')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')

const { ytPlay, ytMp3, ytMp4 } = require('./lib/yt')

const { TelegraPh } = require ('./lib/uploader')
const hit = JSON.parse(fs.readFileSync('./lib/db/dash.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
//time
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
//anu
const { color } = require("./lib/color")

//db json
const ban = JSON.parse(fs.readFileSync('./lib/db/ban.json'))
const afk = JSON.parse(fs.readFileSync('./lib/db/afk.json'))
const game = JSON.parse(fs.readFileSync('./lib/db/game.json'))
const cmdmedia = JSON.parse(fs.readFileSync('./lib/db/cmd.json'))
const users = JSON.parse(fs.readFileSync('./lib/db/user.json'))
const email = JSON.parse(fs.readFileSync('./lib/db/email.json'))
const commandsDB = JSON.parse(fs.readFileSync('./lib/db/respon.json'))//
fatihgan = fs.readFileSync('./lib/assets/logo.jpg')
//bgst
butong1 = [{   
    quickReplyButton: {
        displayText: 'BACK TO MENU',
        id: 'menu'
    }  
 }, {
    quickReplyButton: {
        displayText: 'SUPORT BOT',
        id: 'donasi'
 }
                                
 }]
//random
serial = generateHash(20)

// Database Game
const kuismath = game.math = []
const _family100 = game.family100 = []
const tebakkata = game.tebakkata = []
const tebakbendera = game.tebakbendera = []
const siapaaku = game.siapaaku = []
const tebakkalimat = game.tebakkalimat = []
const caklontong = game.caklontong = []
const susunkata = game.susunkata = []
const tekateki = game.tekateki = []
const tebakkabupaten = game.tebakkabupaten = []
const tebakkimia = game.tebakkimia = []
const tebaklirik = game.tebaklirik = []
const tebaktebakan = game.tebaktebakan = []


// Start
module.exports = kurr = async (kurr, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = kurr.user.id ? kurr.user.id.split(":")[0]+"@s.whatsapp.net" : kurr.user.id
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const arg = budy.slice(command.length + 2, budy.length)
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    const isNumber = x => typeof x === 'number' && !isNaN(x)
	    
        // Group
        const from = mek.key.remoteJid
        const isGroup = m.chat.endsWith('@g.us')
        const isAntiLink = m.isGroup ? antilink.includes(m.chat) : false
        const groupMetadata = m.isGroup ? await kurr.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const sender = isGroup ? mek.participant : mek.key.remoteJid
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
	  // Anti Link
        if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await kurr.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        kurr.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        //TIME
        const time = moment.tz("Asia/Jakarta").format("DD/MM HH:mm:ss");
    const jam = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let o = new Date
    let hari = o.toLocaleDateString(locale, { weekday: 'long' })
    let yoi = o.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
        // Public & Self
        if (!kurr.public) {
            if (!m.key.fromMe) return
        }
        /** Send Button 5 Vifio
     *
     * @param {*} jid
     * @param {*} text
     * @param {*} footer
     * @param {*} image
     * @param [*] button
     * @param {*} options
     * @returns
     */
    kurr.send5Vid = async (jid , text = '' , footer = '', vid, but = [], options = {}) =>{
        let message = await prepareWAMessageMedia({ video: vid }, { upload: kurr.waUploadToServer })
        var template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
        templateMessage: {
        hydratedTemplate: {
        videoMessage: message.videoMessage,
               "hydratedContentText": text,
               "hydratedFooterText": footer,
               "hydratedButtons": but
            }
            }
            }), options)
            kurr.relayMessage(jid, template.message, { messageId: template.key.id })
    }
        // TextTeplate 
        const textTemplateButtons = (from, text, footer, buttons) => {
            return kurr.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
       // Detect User Banned
        if (ban[m.sender] && isCmd) {
            await kurr.sendText(m.chat, `Maaf @${m.sender.split("@")[0]} Anda Telah Dibanned, Chat Owner Untuk Un Banned`, m, { contextInfo: { mentionedJid: [m.sender] }})
            return
        }
        
        const adduser = (sender, pushname) => {
            const obj = { id: sender, name: pushname, }
            users.push(obj)
            fs.writeFileSync('./lib/db/user.json', JSON.stringify(users))
        }
        const cekuser = (sender) => {
            let status = false
            Object.keys(users).forEach((i) => {
                if (users[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        const isUser = cekuser(sender)
        
        const addmail = (text) => {
            const obj = { email: text, }
            email.push(obj)
            fs.writeFileSync('./lib/db/email.json', JSON.stringify(email))
        }
        const cekmail = (text) => {
            let status = false
            Object.keys(email).forEach((i) => {
                if (email[i].email === text) {
                    status = true
                }
            })
            return status
        }
        const checkEmail = cekmail(text)
        
        // Database
        try {
let users = afk[m.sender]
if (typeof users !== 'object') afk[m.sender] = {}
if (users) {
if (!isNumber(users.afkTime)) users.afkTime = -1
if (!('banned' in users)) users.banned = false
if (!('afkReason' in users)) users.afkReason = ''
} else afk[m.sender] = {
afkTime: -1,
banned: false,
afkReason: '',
}
} catch (err) {
console.log(err)
}
//afk
	for (let jid of mentionUser) {
let user = afk[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
`.trim())
}

if (afk[m.sender].afkTime > -1) {
let user = afk[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
`.trim())
user.afkTime = -1
user.afkReason = ''

}

        // Push Message To Console
        kurr.sendReadReceipt(m.chat, m.sender, [m.key.id])
        kurr.sendPresenceUpdate('composing', m.chat)
        if (isCmd && !isGroup) {
			console.log(color('[ PRIVATE ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname))
        }
        if (isCmd && isGroup) {
			console.log(color('[ GROUP ]'), color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${prefix}${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        }
        // Func dashboard
        let words = ["menu","owner","ytmp3","ytmp4","tiktok","s","sticker","dash","help","toimg","anonymous","dashboard","anonymous","start","leave","tiktok","yt","ttaud","ttvid","tahta","nulis","pinterest"]

if (isCmd && !m.isBaileys) {
try {
hitp = words.filter(suu => suu === command)
if (hitp[0] === command) {
hit.push({ sender: m.sender, cmd: command })
fs.writeFileSync('./lib/db/dash.json', JSON.stringify(hit))
}
} catch(err) {
console.log(err)
}

      }
        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kurr.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kurr.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kurr.ev.emit('messages.upsert', msg)
        }
	    
	if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (('family100'+m.chat in _family100) && isCmd) {
	    kuis = true
	    let room = _family100['family100'+m.chat]
	    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './lib/assets/logo.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
	    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
	    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
	    if (!isSurender) {
	        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
	        if (room.terjawab[index]) return !0
		room.terjawab[index] = m.sender
	    }
	    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
	    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
	return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}

${isSurender ? '' : ``}`.trim()
	    kurr.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
	    if (isWin || isSurender) delete _family100['family100'+m.chat]
	}
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kata`)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak bendera`)
                delete tebakbendera[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}caklontong`)
                delete caklontong[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = susunkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Susun Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}susunkata`)
                delete susunkata[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kalimat`)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (siapaaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = siapaaku[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Siapa 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak siapa`)
                delete siapaaku[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tekateki[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Teka Teki 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tekateki`)
                delete tekateki[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kabupaten`)
                delete tebakkabupaten[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak kimia`)
                delete tebakkimia[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak lirik`)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}tebak tebakan`)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Salah!*')
        }

        switch(command) {
case 'menu':
                    anu = ` 🗣️ : *Hay Kak ${pushname} 👋 Janggan toxic yo*
╭─❏ *『 𝙱𝙾𝚃 𝙱𝚈 𝙼𝙰𝙽𝚉 𝙲𝚁𝙴𝚆𝚂 』*
║ Sc? Buy 
║ Name : ${pushname}
║
║➪ Creator : ${packname}
║➪ Owner : 𝐌𝐀𝐍𝐙 𝐂𝐑𝐄𝐖𝐒
║➪ Owner Number : 081215845044
║➪ Chanel : https://youtube.com/channel/UChWa3rmmyT3_bAiCQSSGQBA
║
┗━━━━━━━━━━━━━━━━━━━━⬣

╭─❏ *『 𝙸𝙽𝙵𝙾 𝚂𝙴𝚁𝚅𝙴𝚁 』*
║ ➪ Waktu : ${time}
║ ➪ WIB : ${moment().utcOffset('+0700').format('HH:mm')}
║ ➪ WIB : ${moment().utcOffset('+0900').format('HH:mm')}
║ ➪ WITA : ${moment().utcOffset('+0800').format('HH:mm')}
┗━━━━━━━━━━━━━━━━━━⬣

┏━━[ 𝗠𝗘𝗡𝗨 𝗪𝗘𝗕 ]━━
┃⿻ ${prefix}listhost
┃⿻ ${prefix}webp 1/2/3/4/5/6/7/8
┃⿻ ${prefix}listwebp
┃⿻ ${prefix}kick
┃⿻ ${prefix}linkgc
┃⿻ ${prefix}group
┃⿻ ${prefix}resetlink
┃⿻ ${prefix}tagall [text]
┗━━[ 𝗖𝗥𝗔𝗧𝗘 𝗕𝗬 𝗠𝗔𝗡𝗭 ]━━
`
let btn = [{
urlButton: {
}
}, {
quickReplyButton: {
displayText: 'Owner',
id: 'Owner'
}
}, {
quickReplyButton: {
displayText: 'Status',
id: 'statusbot'
}  
}, {
quickReplyButton: {
displayText: '𝐌𝐀𝐍𝐙 𝐂𝐑𝐄𝐖𝐒',
id: 'pemcet'
}
}]
fatihgans = fs.readFileSync('./lib/assets/logo.jpg'), 
kurr.send5ButImg(m.chat, anu, ` 𝙱𝙾𝚃 𝙷𝙾𝚂𝚃𝙸𝙽𝙶 𝙱𝚈 𝙼𝙰𝙽𝚉 𝙲𝚁𝙴𝚆𝚂🤖 `, fatihgans, btn)
break
                                           case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw  m.reply(`Khusus Group`)
                let response = await kurr.groupInviteCode(m.chat)
                kurr.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
break
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': { 			
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
kurr.groupRevokeInvite(m.chat)
m.reply(`*Sukses Mereset Link🤖*`)
}
break
case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `➣ @${mem.id.split('@')[0]}\n`
                }
                kurr.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                                           case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw  m.reply(`Khusus Group`)
                let response = await kurr.groupInviteCode(m.chat)
                kurr.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
               case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            break
case 'webp': {
//if(from != "120363024487464216@g.us") return m.//reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `Selamat menikmati yang sudah di kasih\n\nName : ${pushname}\nGmail : Gmail lu\nOwner : ${packname}\nLimit : 0X\n\nNOTE : JANGGAN SPAM BOT DENGAN WEB P SUU`
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗠𝗔𝗡𝗭❞',
                                    url: 'https://youtube.com/channel/UChWa3rmmyT3_bAiCQSSGQBA'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/JCRd4EMf9u6L50XLcPOKGy'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗠𝗲𝗱𝗶𝗮𝗙𝗶𝗿𝗲 𝗠𝗣𝟰❞',
                                    id: 'webp1'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗠𝗲𝗱𝗶𝗮𝗙𝗶𝗿𝗲 𝗙𝗜𝗟𝗘❞',
                                    id: 'webp2'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗦𝗜𝗠𝗢𝗡𝗧𝗢𝗞❞',
                                    id: 'webp3'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗚𝗥𝗢𝗨𝗣 𝗪𝗔 𝗩𝟭❞',
                                    id: 'webp4'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗚𝗥𝗢𝗨𝗣 𝗪𝗔 𝗩𝟮❞',
                                    id: 'webp5'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗦𝗽𝗶𝗻❞',
                                    id: 'webp6'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝗠𝗼𝗯𝗶𝗹𝗲 𝗟𝗲𝗴𝗲𝗻𝗱𝘀❞',
                                    id: 'webp7'
                                }
                            }, {  
                                 quickReplyButton: {
                                    displayText: '❝𝗬𝗼𝘂𝘁𝘂𝗯𝗲❞',
                                    id: 'webp8'
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
                                  case 'pemcet':
                                          m.reply(`GG KAN BOT NYA SUBS YT GW DONG BIAR NAMBAH GG\nYT : https://youtube.com/channel/UChWa3rmmyT3_bAiCQSSGQBA`)
                                          break
case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (args[0] === 'close'){
                    await kurr.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group🤖`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await kurr.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group🤖`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await kurr.sendButtonText(m.chat, buttons, `Mode Group`, '© 𝚌𝚑𝚘𝚙𝚢𝚛𝚒𝚐𝚑𝚝 𝚋𝚢 𝚖𝚊𝚗𝚣', m)

             }
            }
            break
case 'hidetag': {
            if (!isCreator) throw mess.owner
            if (!isBotAdmins) throw mess.botAdmin
            kurr.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
case 'kick': {
		if (!m.isGroup) throw mess.group
		if (!isCreator) throw mess.owner
        if (!isBotAdmins) throw mess.botAdmin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kurr.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
case 'webp1':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg :
https://mediafire-seting.terrbarru2022.my.id/
Sudah di bungkus : https://mediafiree.2x22-v3-terbaru.gq/s/?s=3c721712
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)
                                          break
case 'webp2':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://021202.mediafiire.us/c17df48ff375e42101f7db93bb71dbfb.php
Sudah di bungkus : https://34j077c233e1dd8.xmediafire.download/?id=004aa928
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)
                                          break
case 'webp3':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php
Sudah di bungkus : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)

case 'webp4':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php
Sudah di bungkus : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)

case 'webp5':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php
Sudah di bungkus : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)

case 'webp6':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php
Sudah di bungkus : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)

case 'webp7':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php
Sudah di bungkus : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)

case 'webp8':
//if(from != "120363024487464216@g.us") return //m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                                          m.reply(`Done ✓

Link Mediafıre setingg : 
https://979867.mediafiire.us/aee0c2bf7f7294a2b1d3e3606fe44677.php
Sudah di bungkus : https://e062239flgbi7.xmediafire.download/?id=aa9a37c0
NOTE : DILARANG JUAL BELIKAN !! KARNA INI KHUSUS ✓`)
                             break
case 'listwebp': {
//if(from != "120363024487464216@g.us") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `SELAMAT MENIKMATI
┏━━⬣ 𝗟𝗶𝘀𝘁 𝗪𝗲𝗯 𝗣
┃
┃Web1:MediaFire MP4
┃Web2:MediaFire FILE
┃Web3:Simontok
┃Web4:Groupwa V1
┃Web5:Groupwa V2
┃Web6:Free Fire Spin
┃Web7:Mobile Legends
┃Web8:Youtube
┃
┃Ketik : Webp1
┃Untuk Membuat Webp Nya!! 
┃
┗━━━━━━━━━━━━━━

𝙱𝙾𝚃 𝙱𝚈 𝙼𝙰𝙽𝚉 𝙷𝙾𝚂𝚃𝙸𝙽𝙶 `
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '❝𝐁𝐔𝐘 𝐒𝐂 𝐁𝐎𝐓❞',
                                    url: 'https://wa.me/6281215845044'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/JCRd4EMf9u6L50XLcPOKGyi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐓𝐀𝐓𝐔𝐒❞',
                                    id: 'statusbot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐎𝐖𝐍𝐄𝐑❞',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐂𝐑𝐈𝐏𝐓❞',
                                    id: '-'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
case 'owner': case 'creator': {
       kurr.sendContact(m.chat, global.owner, m)
            }
            break
            case 'listhost': {
//if(from != "120363024487464216") return m.reply("maaf su fitur ini dapet di gunakan group tertentu")
                anu = `YU DI ORDER KEBUTUHAN HOSTINGNYA🤗

┏━━⬣ 𝐃𝐀𝐅𝐓𝐀𝐑 𝐇𝐀𝐑𝐆𝐀 𝐇𝐎𝐒𝐓
┃➪OPEN PT² RAMEIN SERVER
┃➪SERVER : TNYA KPM
┃
┃-WHM : 5K
┃-MWHM : 10K
┃-ADHOST : 15K
┃-CEO : 20K
┃-W.FOUNDER : 25K
┃-ROOT : 30K
┃
┃➪SPEK SERVER TANYA KPM
┃➪NO WATHSAPP👇
┃https://wa.me/6281215845044
┃➪LINK GC HOSTING
┃https://chat.whatsapp.com/JCRd4EMf9u6L50XLcPOKGy
┗━━━━━━━━━━━━━━━

𝙱𝙾𝚃 𝙱𝚈 𝙼𝙰𝙽𝚉 𝙷𝙾𝚂𝚃𝙸𝙽𝙶 `
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/assets/logo.jpg') }, { upload: kurr.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: '𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗠𝗔𝗡𝗭❞',
                                    url: 'https://youtube.com/channel/UChWa3rmmyT3_bAiCQSSGQBA'
                                }
                            }, {
                                urlButton: {
                                    displayText: '❝𝐆𝐑𝐔𝐏 𝐖𝐀 𝐁𝐎𝐓❞',
                                    url: 'https://chat.whatsapp.com/EO5KqpHXqA3AgpWiZWwwXi'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐒𝐓𝐀𝐓𝐔𝐒❞',
                                    id: 'statusbot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐎𝐖𝐍𝐄𝐑❞',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '❝𝐌𝐄𝐍𝐔❞',
                                    id: 'menu'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kurr.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
default:
         if (budy.startsWith('=>')) {
        if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(util.format(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(util.format(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			 if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return m.reply( m.reply(`Lu Siapa Ajg`))
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = JSON.parse(fs.readFileSync('./lib/db/msg.json'))
		    if (!(budy.toLowerCase() in msgs)) return
		    kurr.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
