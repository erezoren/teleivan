const axios = require('axios');
require('dotenv').config();

function bindCommands(bot) {
  bot.command('stock', (ctx) => {
    axios
    .get(
        `${process.env.STOCK_BASE_URL}${process.env.STOCKS_API_KEY}`)
    .then(response => {
      const stockData = response.data[0];
      let trend;
      if (stockData.regularMarketChangePercent >= 0) {
        trend = '😜'
      }
      else {
        trend = '😭'
      }
      ctx.telegram.sendMessage(ctx.message.chat.id, `${trend} ${stockData.ask}`)
    })
    .catch(error => {
      ctx.telegram.sendMessage(ctx.message.chat.id, 'error ' + error)
    });
  })

  bot.command('chuck', (ctx) => {
    axios
    .get(process.env.CHUCK_BASE_URL)
    .then(response => {
      const data = response.data;
      ctx.telegram.sendMessage(ctx.message.chat.id, data.value)
    })
    .catch(error => {
      ctx.telegram.sendMessage(ctx.message.chat.id, 'error ' + error)
    });
  })

  bot.command('gif', (ctx) => {
    const query = encodeURI(ctx.message.text.replace('/gif ', ''))
    axios
    .get(`${process.env.GIPHY_BASE_URL}${query}`)
    .then(response => {
      const data = response.data.data;
      const image = data[0].images.original.mp4;
      //ctx.replyWithVideo({source: image})
      ctx.telegram.sendMessage(ctx.message.chat.id, image)
    })
    .catch(error => {
      ctx.telegram.sendMessage(ctx.message.chat.id, 'error ' + error)
    });
  })
}

module.exports = {
  bindCommands: bindCommands
}



