const { Telegraf, Markup } = require('telegraf')
module.exports = (data) => {
    text = data.text
    value= data.value
    cant = 3
    for (let i = 0; i < cant; i++) {
        let element = [Markup.button.callback(text[i],value[i])]
        console
        (element)
        return element
    }
}
    // for (const i in data.text) {
    //     return [Markup.button.callback(data.text[i],data.value[i])]
    // }
    const menu = {
        text: ['boton 1', 'boton 2', 'boton 3'],
        value: ['valor boton 1', 'valor boton 2', 'valor boton 3'],
    }

    // let ArraybuttonsOne=[
    //     Markup.button.callback('Boton 1','boton1'),
    //     Markup.button.callback('Boton 2','boton2'),
    //     Markup.button.callback('Boton 3','boton3')
    // ]
    // let extra = Markup.inlineKeyboard(ArraybuttonsOne)
    // extra['parse_mode']= 'HTML'
    // tts('Kiara a su disposición, esto es lo que puedo hacer',bot,idUser,'español')