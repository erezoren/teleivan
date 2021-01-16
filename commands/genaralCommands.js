function bindCommands(bot) {
  bot.on('sticker', (ctx) => {
    //ctx.reply('👍')
    //console.log('Response is '+JSON.stringify(ctx))
    ctx.reply('😀')

  })
  bot.hears('thanks', (ctx) => ctx.reply('Your\'e more then welcome!'))
  bot.hears('תודה', (ctx) => ctx.reply('אין על מה!!!'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there UMS Fellow!!!!'))
  bot.hears('test', (ctx) => ctx.reply('It\'s a test'))

}

module.exports = {
  bindCommands: bindCommands
}
