const axios = require('axios');

function bindCommands(bot) {
  bot.command('stock', (ctx) => {
    axios
    .get(
        `https://mboum.com/api/v1/qu/quote/?symbol=EBAY&${process.env.STOCKS_API_KEY}`)
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
}

module.exports={
  bindCommands:bindCommands
}