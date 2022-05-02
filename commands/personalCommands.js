
function bindCommands(bot) {
  const noamRegex = new RegExp(/נועם*|נעם*/)
  bot.hears(noamRegex, (ctx) => {
    ctx.reply('בדיוק גם אני חשבתי על נעם....איזה קטע! 😻😻😻')
  });

  const noamRegexEng = new RegExp(/*noam*/)
  bot.hears(noamRegexEng, (ctx) => {
    ctx.reply('Strange....I was just thinking of noam 😻😻😻')
  });

  const yanRegexEng = new RegExp(/*yan*/)
  bot.hears(yanRegexEng, (ctx) => {
    ctx.reply('Yan blatt!!! 🐂 🐗 🐼')
  });

  const meitalRegex = new RegExp(/מיטל*|מטל*/)
  bot.hears(meitalRegex, (ctx) => {
    ctx.reply('גם כן מיטל הזאת עפה על עצמה. שונאת בוטים מוצהרת! 😡')
  });
}

module.exports = {
  bindCommands: bindCommands
}