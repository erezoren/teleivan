require('dotenv').config();
const {Telegraf} = require('telegraf');
const axios = require('axios');
let bot
if (process.env.NODE_ENV === 'production') {
  bot = new Telegraf(process.env.BOT_TOKEN);
  bot.startWebhook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Telegraf(process.env.BOT_TOKEN);
}

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err)
})
bot.start((ctx) => {
  throw new Error('Example error')
})

bot.on('sticker', (ctx) => {
  ctx.reply('👍')
})
bot.hears('thanks', (ctx) => ctx.reply('Your\'e more then welcome!'))
bot.hears('תודה', (ctx) => ctx.reply('אין על מה!!!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there UMS Fellow!!!!'))
bot.command('stock', (ctx) => {
  axios
  .get(
      `https://mboum.com/api/v1/qu/quote/?symbol=EBAY&${process.env.STOCKS_API_KEY}`)
  .then(response => {
    const stockData = response.data[0];
    let trend;
    if (stockData.regularMarketChange = 0) {
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


const regex = new RegExp(/נעם*/)
bot.hears(regex, (ctx) => {
  ctx.reply('בדיוק גם אני חשבתי על נעם....איזה קטע! 😻😻😻')
});

bot.on('ssss', (ctx) => {
  ctx.telegram.sendMessage(ctx.message.chat.id,
      `Hello ${ctx.update.message.from.first_name}`)
})
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => {
  bot.stop('SIGINT')
})
process.once('SIGTERM', () => {
  bot.stop('SIGTERM')
  bot.launch()
})

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.listen(process.env.PORT);

app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});