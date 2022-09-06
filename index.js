require('dotenv').config();
const {Telegraf} = require('telegraf');
const axios = require('axios');
const cron = require('node-cron');
const generalCommands = require('./commands/genaralCommands')
const personalCommands = require('./commands/personalCommands')
const externalApiCommands = require('./commands/externalApiCommands')
const reminders = require('./commands/reminders')
const chat = require('./commands/chat/chatCommands')

let bot
if (process.env.NODE_ENV === 'production') {
  bot = new Telegraf(process.env.BOT_TOKEN);
 // bot.startWebhook(process.env.HEROKU_URL + bot.token);
} else {
  bot = new Telegraf(process.env.TEST_BOT_TOKEN);
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

generalCommands.bindCommands(bot);
externalApiCommands.bindCommands(bot);
personalCommands.bindCommands(bot);
reminders.bindCommands(bot);
chat.bindCommands(bot);
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => {
  bot.stop('SIGINT')
})
process.once('SIGTERM', () => {
  bot.stop('SIGTERM')
  bot.launch()
})
/**
 * This is to expose a url too wake up heroku after long inactivity
 * Using generalCommands
 * @type {createApplication}
 */
const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.listen(process.env.PORT);
app.post('/' + bot.token, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

cron.schedule('* * * * *', async () => {
  console.log('Refreshing application');
  axios
  .get(
      `https://teleivan.herokuapp.com/`)
  .then(response => {
    console.info("Done refreshing application")
  })
  .catch(error => {
    console.error("Failed in refreshing application " + error)
  });
});

/*bot.on('ssss', (ctx) => {
  ctx.telegram.sendMessage(ctx.message.chat.id,
      `Hello ${ctx.update.message.from.first_name}`)
})*/
