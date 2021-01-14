const { Telegraf } = require('telegraf')
const bot = new Telegraf("1566683413:AAFjg2seF025MmNyic64TLd_NBMTSytOdaM")
bot.hears('hi', (ctx) => ctx.reply('Hey there fellow UMS!!!'))
bot.launch()