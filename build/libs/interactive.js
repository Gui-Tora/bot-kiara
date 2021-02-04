const { Telegraf, Markup } = require('telegraf')
const command = require('./command');
const fs = require('fs');
const path = require('path');

module.exports = (idUser, data, bot) => {
    switch (data) {
        case 'acertijos':
            getFile('acertijos', 'acertijos')
            break;
        case 'chistes':
            getFile('chistes', 'chistes')

            break;
        case 'preguntas para pensar':
            getFile('preguntasSinRespuestas', 'preguntas')
            break;
        default:
            break;
    }

    function getFile(to, what) {
        fs.readFile(path.resolve(`libs/JSON/${to}.json`), (er, data) => {
            const Data = JSON.parse(data)
            let random
            switch (what) {
                case 'acertijos':
                    random = Math.floor(Math.random() * 19)
                    print(Data.acertijos[random], 'r')
                    random = 0
                    break;
                case 'chistes':
                    random = Math.floor(Math.random() * 58)
                    print(Data.chistes[random], 't')
                    random = 0
                    break;
                case 'preguntas':
                    random = Math.floor(Math.random() * 27)
                    print(Data.preguntas[random], 't')
                    random = 0
                    break;
            }
        })
    }
    function print(e, type) {
        switch (type) {
            case 'r':
                let extra = Markup.inlineKeyboard([Markup.button.callback('RESPUESTA', e.answer)])
                extra['parse_mode'] = 'HTML'
                bot.telegram.sendMessage(idUser, e.riddle,extra);
                command(e.answer,bot,'action')
                break;

            case 't':
                if (e.text == undefined) {
                    bot.telegram.sendMessage(idUser, 'Tu mama');
                }
                const text = e.text.split('—')
                text.forEach(element => {
                    if (element == '') return
                    bot.telegram.sendMessage(idUser, element);
                });
                break;

            default:
                break;
        }
    }
}
