const axios = require('axios');
const ud = require('urban-dictionary')

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
      } else {
        trend = '😭'
      }
      ctx.telegram.sendMessage(ctx.message.chat.id,
          `${trend} ${stockData.regularMarketPrice}`)
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
  bot.command('urban', (ctx) => {
    let search_term = extractParams(ctx, 'urban')
    if (search_term.trim() == "/urban") {
      axios
      .get(`${process.env.URBAN_RANDOM_URL}`)
      .then(response => {
        ctx.telegram.sendMessage(ctx.message.chat.id,
            response.data.list[0].definition)
      })
      .catch(error => {
        ctx.telegram.sendMessage(ctx.message.chat.id, `error ${error}`)
      })
    } else {
      ud.define(search_term).then((results) => {
        ctx.telegram.sendMessage(ctx.message.chat.id, results[0].definition)
      }).catch((error) => {
        ctx.telegram.sendMessage(ctx.message.chat.id, `error ${error.message}`)
      })
    }

  })

  bot.command('gif', (ctx) => {
    const query = extractParams(ctx, 'gif');
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

const extractParams = (ctx, commandName) => {
  return encodeURI(ctx.message.text.replace(`/${commandName} `, ''))
}

module.exports = {
  bindCommands: bindCommands
}



