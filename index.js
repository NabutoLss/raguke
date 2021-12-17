const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const request = require('request')
const cheerio = require('cheerio')
const ggs = require('google-it')
//const tiktod = require('tiktok-scraper')
const ffmpeg = require('fluent-ffmpeg')
const { menulista } = require('./src/menus/menulista')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./src/bemvind.json'))
const antifake = JSON.parse(fs.readFileSync('./src/ZAZA/antifake.json'))
const setting = JSON.parse(fs.readFileSync('./configurações.json'))
const Exif = require('./src/stickers/exif')

fotoloc = fs.readFileSync('./src/fotos/loc.jpeg')
fotonab = fs.readFileSync('./src/fotos/foto.jpeg')
blocked = []
multi = true
semprefixo = false
const exif = new Exif()

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas ${pad(minutes)} minutos ${pad(seconds)} segundos`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " Dia, " : " Dias, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " Hora, " : " Horas, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " Minute, " : " Minutos, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('Scaneie o qr code no seu','blue'), color(' WhatsApp'))
	})

	fs.existsSync('./Conexão.json') && client.loadAuthInfo('./Conexão.json')
client.on('connecting', () => {
start('2', ' ')
})
client.on('open', () => {
success('2', "BOT CONECTADO")
})

await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Conexão.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
const mdata = await client.groupMetadata(anu.jid)  
if(antifake.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
client.sendMessage(mdata.id, ' *_NÚMERO FAKE/GRINGO DETECTADO\n*BANINDO...*️', MessageType.text)
setTimeout(async function () {
client.groupRemove(mdata.id, [num])
}, 1000)
}
}
}
if (!welkom.includes(anu.jid)) return
try {
const mdata = await client.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./src/bemvind.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '556993980162-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;NABUTO;;;\nFN:NABUTO\nitem1.TEL;waid=556993980162:556993980162\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Olá @${num.split('@')[0]} ♥️\nSeja bem vindo(a) ao grupo, leia a descrição para saber as regras 😁👍`
			gbutsan = [{buttonId:'ahahsjdjwkxndmw',buttonText:{displayText:'BEM VINDOOOO(A)✨'},type:1}]
			mhan = await client.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `novo(a) membro`, 
buttons: gbutsan,
headerType: 4 }
			client.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./src/fotos/foto.jpeg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./src/bemvind.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '556993980162-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Ls;;;\nFN:Ls\nitem1.TEL;waid=556993980162:556993980162\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`O @${num.split('@')[0]}\nAcabou de sair do grupo 💤`
			gbutsan = [{buttonId:'cutsfssrejwjsjdjw',buttonText:{displayText:'+1 vaga para o grupo'},type:1}]
			mhan = await client.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `-1`,
buttons: gbutsan,
headerType: 4 }
			client.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./src/fotos/foto.jpeg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			const typei = Object.keys(mek.message)[0]
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const apiKey = setting.apiKey // contact me on whatsapp wa.me/6285892766102
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		 if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
        mess = {
				wait: 'pera',
				success: '✔️ gg ✔️',
				error: {
					stick: 'deu erro',
					Iv: 'linl inválido'
				},
				only: {
					group: 'só em grupo',
					ownerG: 'só dono de grupo',
					ownerB: 'só dono do grupo',
					admin: 'apenas adms',
					Badmin: 'o bot precisa ser adm'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`${setting.Seunúmero}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isAntifake = isGroup ? antifake.includes(from) : false
            const isWelkom = isGroup ? welkom.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			//INTELIGÊNCIA ARTIFICIAL (SIMISIMI)
if (!isGroup && !isCmd && !command) {
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=pt`)
		if (content.includes("imageMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("https://")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes(".com")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("Oi","oi")) {
		return reply('Olá, tudo bem?')}
		if (content.includes("oi")) {
		return reply('Olá, tudo bem?')}
		if (content.includes("stickerMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("documentMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("locationMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("audioMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("contactMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
		if (content.includes("videoMessage")) {
		return reply('Desculpe Humano, não fui programado para responder esse tipo de mensagem')}
                     sami = simi.success
                        client.sendMessage(from, `_${sami}_`, text, {thumbnail: fotonab, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
}
						const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "556993980162-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙐𝙏𝙄𝙇𝙄𝙕𝘼𝘿𝙊:\n*${command}*`,
                 "title": `𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝙐𝙏𝙄𝙇𝙄𝙕𝘼𝘿𝙊:\n*${command}*`,
                 'jpegThumbnail': fotonab
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "556993980162-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
			const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `BOT VERSÃO 5`,
                    jpegThumbnail: fotonab
                          }
                        }
                      }
                      const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "556993980162-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": fotoloc,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
			//BOTÃO DE TEXTO
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
client.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///BUTÃO IMAGEM
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BOTÃO VÍDEO
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await client.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///BOTÃO LOCALIZAÇÃO
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}


			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			   const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('Feito');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        client.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
			  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}

			   const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        colors = ['red','white','black','blue','yellow','green']
			
            const isQuoted = type == 'extendedTextMessage'
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			
			let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
          
	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m☔\x1b[1;37m]', color(command), color(sender.split('@')[0]),'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m☔\x1b[1;37m]', color(command), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			
			//MENSAGENS
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31m🌂\x1b[1;37m]', color('Mensagem'), color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31m🌂\x1b[1;37m]', color('Mensagem'), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			//_VISUALIZA AS MENSAGENS 
client.chatRead(from)

			switch(command) {
			case 'menu':
			{
textoo =`𝙉𝘼𝘽𝙐𝙏𝙊 𝘽𝙊𝙏

𝗙𝗔𝗦𝗧 ✅
𝗦𝗨𝗣𝗢𝗥𝗧 𝗛𝗘𝗥𝗢𝗞𝗨✅
𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗖𝗢𝗥𝗥𝗜𝗚𝗜𝗗𝗢𝗦✅


𝗗𝗢𝗡𝗢: wa.me/556993980162
𝗖𝗔𝗡𝗔𝗟: https://youtube.com/c/NabutoLs`
trans = `${menulista}`
but = [
{ buttonId: `botãomenu`, buttonText: { displayText: 'MENU BOTÃO⚡' }, type: 1 }
]
sendButMessage(from, textoo, but)}
break
case 'plaquinha':
if (args.length < 1) return reply(`digite algo com até 6 letras\n\n obs: não use emojis ou símbolos`)
teks = body.slice(10)
if (teks.length > 10) return reply('Escreva até 6 letras') //maximo de caracteres
reply('Espere estou fazendo') //mensagem
buffer = await getBuffer(`https://dalarite.sirv.com/beyondft-53a5da51-13a0-46fa-bd6b-2f0c8a407ec1.jpeg?text.0.text=${teks}&text.0.position.x=-3%25&text.0.position.y=-57%25&text.0.align=right&text.0.size=46&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.style=italic&text.0.outline.blur=100`)
await client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: floc, thumbnail: null, caption: ' 🧐 '})
break
case 'placaloli':
if (args.length < 1) return reply(`Escreva algo com até 21 letras`)
teks = body.slice(10)
if (teks.length > 21) return reply('Use até 21 letras pfvr') //maximo de caracteres
reply('1 minuto') //mensagem
buffer = await getBuffer(`https://dalarite.sirv.com/images.jpeg?text.0.text=${teks}&text.0.position.x=-29%25&text.0.position.y=-17%25&text.0.align=left&text.0.size=60&text.0.color=000000&text.0.font.family=Voltaire`)
await client.sendMessage(from, buffer, image, {sendEphemeral: true, quoted: fstick, thumbnail: null, caption: ' 🧐 '})
break
				case 'play':
if (args.length < 1) return reply('Qual o nome da msc cara? n sou vidente n kkkkkk')
testeki = body.slice(6)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${testeki}`)
lagu = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
testekkzu = `*_TITULO DA MÚSICA_* ${anu.Titulo_Encontrado}\n*_TAMANHO DA MSC_*: ${anu.Tamanho_Do_Video}\n*_DURAÇÃO_*: ${anu.Duracao_Do_Video}\n*_LINK_* ${anu.Link_Do_Video}`
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${testekkzu}`})		
client.sendMessage(from, lagu, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
.catch(() => reply(`*Desculpe, deu erro.*`))
break
case 'play2': 
if (args.length < 1) return reply(`qual o nome da msc?`)	
espec = body.slice(6)
reply(mess.api)
anu = await fetchJson(`https://www.luc4rio-rest-api.tk/api/social/play/audio?video=${espec}`)
play2 = await getBuffer(anu.Link_De_Download)
buffer = await getBuffer(anu.Imagem_Do_Video)
texto2p = `Nome: ${anu.Titulo_Encontrado}\nTamanho: ${anu.Tamanho_Do_Video}\nDuração: ${anu.Duracao_Do_Video}\nLink: ${anu.Link_Do_Video}`
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail:null, caption: `${texto2p}`})		
client.sendMessage(from, play2, audio, {mimetype: 'audio/mp4', quoted: mek})
.catch(() => reply(`*Erro*`))
break
	case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia, `./src/stickers/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Feito')
										exec(`webpmux -set exif ./src/stickers/data.exif ./src/stickers/${sender}.webp -o ./src/stickers/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											client.sendMessage(from, fs.readFileSync(`./src/stickers/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./src/stickers/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/stickers/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await client.downloadAndSaveMediaMessage(encmedia, `./src/stickers/${sender}`)
							reply('Espere por favor')
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./src/stickers/data.exif ./src/stickers/${sender}.webp -o ./src/stickers/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											client.sendMessage(from, fs.readFileSync(`./src/stickers/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./src/stickers/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./src/stickers/${sender}.webp`)
						} else {
							reply(`manda alguma foto ou vídeo`)
						}
						break
case 'tiktok':
                   case 'tiktok':
                   case 'tiktoknowm':
if (!c) return reply('qual o link do vídeo?')
var { TiktokDownloader } = require('./src/ZAZA/baixartiktok')
res = await TiktokDownloader(`${c}`).catch(e => {
reply('Desculpe deu erro')
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
case 'criarloc':
if (!c) return reply('Cadê o nome? faça assim:\n\n/criarloc Casa|Do Nabuto')
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
client.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: fotoloc}, MessageType.liveLocation, {quoted:fstick})
break
case 'trollei': 
					wibuC = ['trollei','trollei2','trollei1']
					wibuF = wibuC[Math.floor(Math.random() * (wibuC.length))]
					wibuz = fs.readFileSync(`src/ZAZA/${wibuF}.mp4`)					
                    client.sendMessage(from, wibuz, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: floc})
                    break
case 'eununca':
									const dare =['Eu nunca fui expulso da sala de aula.','Eu nunca quis namorar um(a) professor(a)','Eu nunca fui ignorado no WhatsApp por alguém que eu gostava.','Eu nunca fiquei com uma pessoa e depois nunca mais falei com ela.','Eu nunca usei drogas.','Nunca fiquei com alguém do mesmo gênero que eu.','Eu nunca mandei fotos íntimas para alguém.','Eu nunca dancei enquanto tirava a roupa para alguém.','Eu nunca fiquei com alguém que eu nem sabia o nome.','Eu nunca caí porque estava olhando o celular.','Eu nunca briguei na escola.','eu nunca desmaiei alguma pessoa.','Eu nunca fiquei acordado por mais de um dia','Eu nunca furtei canetas na escola','Eu nunca briguei na escola','Eu nunca fiquei com um(a) Trans','Eu nunca roubei doce 🍬 no mercado']
									const der = dare[Math.floor(Math.random() * dare.length)]
 anu =`_*${der}_*`
const buttons = [{buttonId: 'gfzd', buttonText: {displayText: 'EU SIM✅️'}, type: 1},{buttonId: 'gzd', buttonText: {displayText: 'EU NUNCA❌️'}, type: 1},{buttonId: 'eununca', buttonText: {displayText: 'NOVA PERGUNTA ✨️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*NABUTO BOT*',
    buttons: buttons,
    headerType: 1
}
await client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftex})
                break
			case 'linkgp':
				case 'linkdogrupo':
              
				if (!isGroup) return reply('Só em grupos')
                   if (!isBotGroupAdmins) return reply('O BOT precisa ser um ADM')
					linkgc = await client.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nNOME ${groupName}`
					client.sendMessage(from, yeh, text, { quoted: mek })
					break
					case 'resetarlink':
              
         if (!isGroup) return reply('Só em grupos')
         if (!isGroupAdmins) return reply('Apenas adms')
                   if (!isBotGroupAdmins) return reply('O BOT precisa ser um ADM')
          json = ['action', 'inviteReset', from]
         client.query({json, expect200: true})
          reply('Sucesso')
         break
case 'grupo':
buttonss = [{buttonId: `abrirgp`, buttonText: {displayText: 'ABRIR'}, type: 1},{buttonId: `fechargp`, buttonText: {displayText: 'FECHAR'}, type: 1}]
const bMess = {
    contentText: 'abrir ou fechar',
    footerText: 'selecione um',
    buttons: buttonss,
    headerType: 1
}
await client.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: ftex})
break
					case 'abrirgp':
					if (!isGroup) return reply('Só em grupos')
					if (!isGroupAdmins) return reply('Apenas adms')
                   if (!isBotGroupAdmins) return reply('O BOT precisa ser um ADM')
                   reply(`Sucesso em abrir o grupo ${groupName}`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'fechargp':
						if (!isGroup) return reply('Só em grupos')
						if (!isGroupAdmins) return reply('Apenas adms')
                   if (!isBotGroupAdmins) return reply('O BOT precisa ser um ADM')
						reply(`sucesso em fechar o grupo ${groupName}`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
  case 'crosslogo':                
                case 'flowertext':
                case 'silktext':                
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
                    if (args.length == 0) return reply(`Use assim: ${prefix + command} texto\nExemplo: ${prefix + command} sayo`)
                    txt = args.join(" ")
                    reply('[❕] Loading')
                    anu = await fetchJson(`https://akame-api.herokuapp.com/api/textpro/ninjalogo?texto=${txt}&texto2=api&apikey=xX59553E`, {method: 'get'})
                    tod = await getBuffer(anu.result)
                    client.sendMessage(from, tod, image, {quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
         break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('oq vc quer pesquisar?')
teks = args.join(' ')
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Título* : ${i.title}
*Link* : ${i.link}
*Informações* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'robô':
              
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await client.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'grossa':
              
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await client.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Vish deu erro')
						hah = fs.readFileSync(ran)
					client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'grave':                 
              
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await client.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Vish deu erro')
						hah = fs.readFileSync(ran)
						client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 35999640mek0, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
case 'botãomenu':
 listMsg = {
 buttonText: 'CLIQUE AQUI',
 footerText: 'COMANDOS:',
 description: `Veja as opções abaixo`,
 sections: [
                     {
                      "title": `ESCOLHA UM`,
 rows: [
                          {
                              "title": "eununca",
                              "rowId": ""
                           },
                           {
                              "title": "antifake 1",
                              "rowId": ""
                           },
                           {
                              "title": "bemvindo 1",
                              "rowId": ""
                           }
                        ]
                     }],
 listType: 1
}
client.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:ftex})
break
case 'stickernome':
              
						if (!isQuotedSticker) return reply(`marque um sticker e escreva: *${prefix}stickernome nome|nome*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await client.downloadAndSaveMediaMessage(encmedia, `./src/stickers/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `figurinha_${sender}`)
						exec(`webpmux -set exif ./src/stickers/figurinha_${sender}.exif ./src/stickers/${sender}.webp -o ./src/stickers/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							client.sendMessage(from, fs.readFileSync(`./src/stickers/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./src/stickers/figurinha_${sender}.exif`)
						})
						break       
						case 'hidetag':
            if (!isGroup) return reply('Só em gps')
              if (!isGroupAdmins) return reply('Apenas adm')
            ht = body.slice(9)
                members_id = []
				for (let mem of groupMembers) {
					members_id.push(mem.jid)
				}
                mentions(ht, members_id, false)
                break 
break;
				case 'apagarchat':
					if (!isOwner) return reply('Desculpe, você n é meu dono')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('Sucesso em apagar todas as conversas')
					break
case 'figuanime':
              reply('1 minuto por favor')
              fetch('https://raw.githubusercontent.com/nabutols/figurinhas/main/Animes.html')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
case '157':
					if (!isOwner && !mek.key.fromMe) return reply('Só o nabuto')
              if (!isGroup) return reply('Só em grupos')
              if (!isGroupAdmins) return reply ('Só adms')
              if (!isBotGroupAdmins) return reply('O bot precisa ser adm')
              client.groupUpdateSubject(from, `😈𝐍𝐀𝐁𝐔𝐓𝐎 𝐋𝐒😈`)
                client.groupUpdateDescription(from, `............................................................................................................................................................................................................................`)
             client.updateProfilePicture(from, fs.readFileSync('./src/ZAZA/gruposnab.jpg'))
                client.sendMessage(from, 'Sucesso fih kkkkkk!', text, {quoted: mek})
					break
case 'gerarbot':
if (!isOwner && !mek.key.fromMe) return reply('Só o dono')
client.version = [3, 3234, 9]
client.browserDescription = ['Nabuto Ls','Opera','3.0']
if (args[0] && args[0].length > 200) {
	let json = Buffer.from(args[0], 'base64').toString('utf-8')
    let obj = JSON.parse(json)
    await client.loadAuthInfo(obj)
}
try {
client.on('qr' ,async qr => {
qrbot = await qrkode.toDataURL(qr, { scale: 8 })
buffqr = await Buffer.from(qrbot.split('data:image/png;base64,')[1], 'base64')
await fs.writeFileSync(`./bot@${sender}.jpg`, buffqr)
let scen = await client.sendMessage(from, fs.readFileSync(`./bot@${sender}.jpg`), MessageType.image, {quoted : mek,caption: 'Scaneie este código qr, outro será gerado em 20s e esse será expirado'})    
setTimeout(() => {
       client.deleteMessage(from, scen.key)
  }, 30000);
})  
client.on ('open', async () => {
  console.log ('credentials update')
  const authInfo = client.base64EncodedAuthInfo()
  fs.writeFileSync(`./src/${sender}.json`, JSON.stringify(authInfo  ,null, '\t'))
  await client.sendMessage('0@s.whatsapp.net', `Logado`, MessageType.extendedText)
  client.sendMessage('0@s.whatsapp.net', `${prefix + command} ${Buffer.from(JSON.stringify(authInfo)).toString('base64')}`, MessageType.extendedText)
})
client.on('chat-update', async (chat) => {
	require('./index.js')(client, chat)
})    
await client.connect().then(async ({user}) => {
reply('bot conectado' + JSON.stringify(user, null, 2))
})
} catch {
reply('erro')
}
break
case 'stopjadibot':
if (!isOwner && !mek.key.fromMe) return reply('Só o dono')
try {
reply('blz')
fs.unlinkSync(`./src/${sender}.json`)
client.close()
} catch {
reply('blz')
client.close()
}
break
				case 'tm':
					if (!isOwner) return reply('Desculpe, você não é meu dono')
					if (args.length < 1) return reply('Cadê o texto?')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `𝗧𝗥𝗔𝗡𝗦𝗠𝗜𝗦𝗦𝗔̃𝗢 𝗡𝗔𝗕𝗨𝗧𝗢 𝗕𝗢𝗧\n\n${body.slice(4)}`})
						}
						reply('Sucesso em fazer a transmissão')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `𝗧𝗥𝗔𝗡𝗦𝗠𝗜𝗦𝗦𝗔̃𝗢 𝗡𝗔𝗕𝗨𝗧𝗢 𝗕𝗢𝗧\n\n${body.slice(4)}`)
						}
						reply('Sucesso em fazer a transmissão')
					}
					break
                                case 'promover':
					if (!isGroup) return reply('Este comando só funciona em grupos')
					if (!isGroupAdmins) return reply('Este comando só pode ser utilizado por administradores')
					if (!isBotGroupAdmins) return reply('o BOT precisa ser um administrador')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Membro promovido para administrador\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Membro @${mentioned[0].split('@')[0]} promovido para administrador`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
				case 'rebaixar':
					if (!isGroup) return reply('Este comando só funciona em grupos')
					if (!isGroupAdmins) return reply('Este comando só pode ser utilizado por administradores')
					if (!isBotGroupAdmins) return reply('o BOT precisa ser um administrador')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Adm rebaixado\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Sucesso em rebaixar @${mentioned[0].split('@')[0]} para membro do grupo`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
				case 'add':
					if (!isGroup) return reply('Só funciona em grupos')
					if (!isGroupAdmins) return reply('Aoenas os adms')
					if (!isBotGroupAdmins) return reply('O bot precisa ser administrador')
					if (args.length < 1) return reply('Qual o número da pessoa? faça assim, *exemplo*:\n\n .add 5569939####')
					if (args[0].startsWith('08')) return reply('qual o código de país? o do Brasil é 55')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Não foi possível adicionar')
					}
					break
				case 'banir':
					if (!isGroup) return reply('Este comando só funciona em grupos')
					if (!isGroupAdmins) return reply('Este comando só pode ser utilizado por administradores')
					if (!isBotGroupAdmins) return reply('o BOT precisa ser um administrador')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Quem vai ser o participante banido do grupo? faça assim: /banir @participante')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Até'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`Banindo o participante @${mentioned[0].split('@')[0]} em 2 segundos`, mentioned, true)
						await sleep(2000)
						client.groupRemove(from, mentioned)
					}
					break
case 'banir2':
if (!isGroup) return reply('Só funciona em grupos')
if (!isGroupAdmins) return reply('Apenas adms')
if (!isBotGroupAdmins) return ('O bot precisa ser adm')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque a mensagem da pessoa')
kick = mek.message.extendedTextMessage.contextInfo.participant
reply('O participante será banido em 2 segundos')
await sleep(2000)
client.groupRemove(from, [kick])
break
				case 'listadmins':
					if (!isGroup) return reply('Este comando só funciona em grupos')
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
                case 'linkgroup':
                    if (!isGroup) return reply('Este comando só funciona em grupos')
                    if (!isGroupAdmins) return reply('Este comando só pode ser utilizado por administradores')
                    if (!isBotGroupAdmins) return reply('o BOT precisa ser um administrador')
                    linkgc = await client.groupInviteCode(from)
                    reply('https://chat.whatsapp.com/'+linkgc)
                    break
                case 'leave':
                    if (!isGroup) return reply('Este comando só funciona em grupos')
                    if (isGroupAdmins || isOwner) {
                    	client.groupLeave(from)
                    } else {
                        reply('Este comando só pode ser utilizado por administradores')
                    }
                    break
				case 'toimg':
					if (!isQuotedSticker) return reply('marque uma figurinha')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('❌ Gagal, pada saat mengkonversi sticker ke gambar ❌')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '>//<'})
						fs.unlinkSync(ran)
					})
					break
				case 'antifake':
try {
if (!isGroup) return reply('Só em grupos amigão')
if (!isGroupAdmins) return reply('Apenas adms')
if (args.length < 1) return reply(' /antifake 1 para ativar e /antifake 0 para desativar')
if (Number(args[0]) === 1) {
if(isAntifake) return reply('Já está ativo. ')  
antifake.push(from)
fs.writeFileSync('./src/ZAZA/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./src/ZAZA/antifake.json', JSON.stringify(antifake))
if(isAntifake == 0) return reply('Já está Desativado.')
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply(' /antifake 1 para ativar e /antifake 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break
case 'bemvindo':
					if (!isGroup) return reply('Este comando só funciona em grupos')
					if (!isGroupAdmins) return reply('Este comando só pode ser utilizado por administradores')
					if (args.length < 1) return reply('Hmmmm')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('Faça assim para ativar:\n /bemvindo 1')
						welkom.push(from)
						fs.writeFileSync('./src/bemvind.json', JSON.stringify(welkom))
						reply('Sucesso em ativar️')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/bemvind.json', JSON.stringify(welkom))
						reply('Sucesso em ativar o comando')
					} else {
						reply('Faça assim para desativarr:\n /bemvindo 0')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply('Este comando só funciona em grupos')
					if (!isGroupAdmins) return reply('Este comando só pode ser utilizado por administradores')
					if (args.length < 1) return reply('Tag target yang ingin di clone')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Gagal om')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Foto aja mas')
					}
					break
				default:
					
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
