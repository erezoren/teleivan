require('dotenv').config();
const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('thanks', (ctx) => ctx.reply('Your\'e more then welcome!'))
bot.hears('hi', (ctx) => ctx.reply('Hey there UMS Fellow!!!!'))
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

