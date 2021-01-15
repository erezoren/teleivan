require('dotenv').config();
const { Telegraf } = require('telegraf')
let bot
if (process.env.NODE_ENV === 'production') {
  bot = new Telegraf(process.env.BOT_TOKEN);
  bot.startWebhook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Telegraf(process.env.BOT_TOKEN);
}


bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('thanks', (ctx) => ctx.reply('Your\'e more then welcome!'))
bot.hears('תודה', (ctx) => ctx.reply('אין על מה!!!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there UMS Fellow!!!!'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()



// Enable graceful stop
process.once('SIGINT', () =>{
  bot.stop('SIGINT')
} )
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