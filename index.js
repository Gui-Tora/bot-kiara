const { Telegraf, Markup } = require('telegraf')
const tts = require('./build/libs/tts')
const command = require('./build/libs/command');
const interactive = require('./build/libs/interactive');
const package = require('./package.json');

const bot = new Telegraf(process.env.TOKENBOTTELEGRAM)
bot.start(ctx => {
    const idUser = ctx.chat.id
    tts(`Hola muuy buenas, me llamo Kiara y soy el nuevo bot, mi version actual es${package.version}`, bot, idUser, 'español')
})
bot.help(ctx => {
    const idUser = ctx.chat.id
    tts('Estas son las cosas que puedo hacer', bot, idUser, 'español')
    bot.telegram.sendMessage(idUser,
        `   
        *Bot Command*
        /meme gore - Optines memes hot
        /meme anime - Optines memes de anime algo picantes
        /meme - Optienes memes en español
        /int - Interaciones con el bot(Preguntas, chistes y acertijos) 
        /github - para ver mis entrañas
        /tts 
        (idioma, actualmente solo se soporta español, ingles y japones)
        (lo que quires decir)
        ACLARACION: solo tiene que haber un salto de linea
        EJEMPLO DE /tts
        /tts
        español (SALTO DE LINEA)
        hola putos (SALTO DE LINEA)

        `
    )
})

command('meme', bot, 'memes')
command(['tts', 'TTS'], bot, 'tts')
command('int', bot, 'interactiveFunny')
bot.action(['acertijos', 'chistes', 'preguntas para pensar'], ctx => {
    const idUser = ctx.chat.id
    interactive(idUser, ctx.update.callback_query.data, bot);
})
command('insulto', bot,)
command('github', bot,'github')


bot.launch()