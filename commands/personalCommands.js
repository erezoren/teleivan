
function bindCommands(bot) {
  const noamRegex = new RegExp(/נועם*|נעם*/)
  bot.hears(noamRegex, (ctx) => {
    ctx.reply('בדיוק גם אני חשבתי על נעם....איזה קטע! 😻😻😻')
  });

  const noamRegexEng = new RegExp(/\bnoam\b/)
  bot.hears(noamRegexEng, (ctx) => {
    ctx.reply('Strange....I was just thinking of noam 😻😻😻')
  });


  const yanRegexEng = new RegExp(/\byan\b/)
  bot.hears(yanRegexEng, (ctx) => {
    ctx.reply('Yan! I LIKE!!!')
    ctx.replyWithPhoto('https://assets1.cbsnewsstatic.com/hub/i/2012/03/24/43708385-a644-11e2-a3f0-029118418759/Borat_Kazakhstan.jpg')
  });

  const meitalRegex = new RegExp(/מיטל*|מטל*/)
  bot.hears(meitalRegex, (ctx) => {
    ctx.reply('גם כן מיטל הזאת עפה על עצמה. שונאת בוטים מוצהרת! 😡')
  });


  const idanHebRegexHeb = new RegExp(/עידן*/)
  bot.hears(idanHebRegexHeb, (ctx) => {
    ctx.reply('עוגת פרג מישהו????')
    ctx.replyWithPhoto('https://i.ytimg.com/vi/IW31LENdSKE/maxresdefault.jpg')
  });

  const idanRegexEng = new RegExp(/\bidan\b/)
  bot.hears(idanRegexEng, (ctx) => {
    ctx.reply('Pereg cake somebody???')
    ctx.replyWithPhoto('https://i.ytimg.com/vi/IW31LENdSKE/maxresdefault.jpg')
  });


  const alexHebRegexHeb = new RegExp(/אלכס*|אודסר*/)
  bot.hears(alexHebRegexHeb, (ctx) => {
    ctx.replyWithVideo('https://c.tenor.com/TOtj1QvueMoAAAAM/10-10points.gif')
  });

  const alexRegexEng = new RegExp(/alex*|odesser*/)
  bot.hears(alexRegexEng, (ctx) => {
    ctx.replyWithVideo('https://c.tenor.com/TOtj1QvueMoAAAAM/10-10points.gif')
  });

  const ramiHebRegexHeb = new RegExp(/רמי*/)
  bot.hears(ramiHebRegexHeb, (ctx) => {
    ctx.reply('רמי מואשם באחזקת סמים קלים')
  });

  const ramiRegexEng = new RegExp(/rami*/)
  bot.hears(ramiRegexEng, (ctx) => {
    ctx.reply('Rami is accused of possessing soft drugs')
  });
}

module.exports = {
  bindCommands: bindCommands
}