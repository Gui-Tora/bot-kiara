const getMemes = require('./getMemes')
const { Markup } = require('telegraf')
const tts = require('./tts')

module.exports = (comand, bot, type) => {
    if (type == 'action') {
        bot.action(comand, ctx => {
            const idUser = ctx.chat.id
            bot.telegram.sendMessage(idUser, comand)
        })
    } else {
        bot.command(comand, ctx => {
            const idUser = ctx.chat.id
            switch (type) {
                case 'memes':
                    const typeMeme = ctx.update.message.text.split(' ')
                    getMemes(bot, idUser, typeMeme[1])
                    break;
                case 'tts':
                    const textComplete = ctx.update.message.text
                    const textSepa = textComplete.split('\n')
                    if (textSepa[2] == undefined && textSepa[1] == undefined) {
                        bot.telegram.sendMessage(idUser, 'No se en que idioma hablante y no se que decirte, por favor siga correctamente la sintaxis')
                    } else {
                        tts(textSepa[2], bot, idUser, textSepa[1])
                    }
                    break;
                case 'interactiveFunny':
                    let ArraybuttonsOne = [
                        Markup.button.callback('acertijos', 'acertijos'),
                        Markup.button.callback('chistes', 'chistes'),
                        Markup.button.callback('preguntas para pensar', 'preguntas para pensar')
                    ]
                    let extra = Markup.inlineKeyboard(ArraybuttonsOne)
                    extra['parse_mode'] = 'HTML'
                    bot.telegram.sendMessage(idUser, 'TE PUESDES DIVERTIR CON', extra)
                    break;
                case 'message':
                    bot.telegram.sendMessage(idUser,comand)
                    break;
                case 'github':
                    bot.telegram.sendMessage(idUser,'f')
                    break;
                default:
                    tts('Aaaa ERES RE PUTO', bot, idUser, 'español')
                    break;
            }
        })
    }
}