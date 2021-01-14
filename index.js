/*
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
*/


const { Telegraf } = require('telegraf')
const bot = new Telegraf("1566683413:AAFjg2seF025MmNyic64TLd_NBMTSytOdaM")
bot.hears('hi', (ctx) => ctx.reply('Hey there fellow UMS!!!'))
bot.launch()