
function bindCommands(bot) {
  const noamRegex = new RegExp(/נועם*|נעם*/)
  bot.hears(noamRegex, (ctx) => {
    ctx.reply('בדיוק גם אני חשבתי על נעם....איזה קטע! 😻😻😻')
  });

  const meitalRegex = new RegExp(/מיטל*|מטל*/)
  bot.hears(meitalRegex, (ctx) => {
    ctx.reply('גם כן מיטל הזאת עפה על עצמה. שונאת בוטים מוצהרת! 😡')
  });
}

module.exports = {
  bindCommands: bindCommands
}