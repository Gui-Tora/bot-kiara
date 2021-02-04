const googleTTS = require('google-tts-api')
const TTS = (message,bot,idUser,languageOu)=>{
  const url = googleTTS.getAudioUrl(message, {
    lang:languageOu,
    slow: false,
    host: 'https://translate.google.com',
  });
  bot.telegram.sendAudio(idUser, url,{title: 'Bienvenida'}); 
}
module.exports=(message,bot,idUser,language)=>{
  

  switch (language) {
    case 'español':
      TTS(message,bot,idUser,'es-AR')
    break;

    case 'japones':
      TTS(message,bot,idUser,'ja-JP')
    break;
    
    case 'ingles':
      TTS(message,bot,idUser,'en-US')
    break;

    default:
      TTS(message,bot,idUser,'es-AR')
     break;
  }
}