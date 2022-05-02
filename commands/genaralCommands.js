function bindCommands(bot) {
  bot.on('sticker', (ctx) => {
    console.log('CAHT_TITLE=' + ctx.chat.title + ', CHAT ID = ' + ctx.chat.id)
    ctx.reply('😀')

  })
  bot.hears('thanks', (ctx) => ctx.reply('Your\'e more then welcome!'))
  bot.hears('תודה', (ctx) => ctx.reply('אין על מה!!!'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there Fellow!!!!'))
  bot.hears('test', (ctx) => ctx.reply('It\'s a test'))

}

module.exports = {
  bindCommands: bindCommands
}
