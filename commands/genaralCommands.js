function bindCommands(bot) {
  bot.on('sticker', (ctx) => {
    //ctx.reply('👍')
    ctx.reply('😀')

  })
  bot.hears('thanks', (ctx) => ctx.reply('Your\'e more then welcome!'))
  bot.hears('תודה', (ctx) => ctx.reply('אין על מה!!!'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there UMS Fellow!!!!'))
}

module.exports = {
  bindCommands: bindCommands
}
