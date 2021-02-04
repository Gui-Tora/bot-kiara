const superAgent = require('superAgent');
const maxPostsRequest = 100;

module.exports = async (bot, idUser, type) => {
    (type);
    let url
    switch (type) {
        case 'gore':
            url = `https://www.reddit.com/r/WTF/.json?after=t3_laxfl9&limit=${maxPostsRequest}`
            superAgent
                .get(url)
                .end((err, res) => {
                    const allPost = res.body.data.children
                    let i = Math.floor(Math.random() * maxPostsRequest)
                    bot.telegram.sendMessage(idUser, allPost[i].data.url);
                })
            url = ''
            break;
        case 'anime':
            url = `https://www.reddit.com/r/MemesAnimeTRAP/.json?after=t3_i4w5l9&limit=${maxPostsRequest}`
            superAgent
                .get(url)
                .end((err, res) => {
                    const allPost = res.body.data.children
                    let i = Math.floor(Math.random() * maxPostsRequest)
                    bot.telegram.sendMessage(idUser, allPost[i].data.url);
                })
            break;
        case undefined:
            url = `https://www.reddit.com/r/spanishmemes.json?after=t3_j5q9d7&limit=${maxPostsRequest}`
            superAgent
                .get(url)
                .end((err, res) => {
                    const allPost = res.body.data.children
                    let i = Math.floor(Math.random() * maxPostsRequest)
                    bot.telegram.sendMessage(idUser, allPost[i].data.url);
                })
            url = ''
            break;
        default:
            break;
    }

}