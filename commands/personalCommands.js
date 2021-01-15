
function bindCommands(bot) {
  const regex = new RegExp(/נועם*|נעם*/)
  bot.hears(regex, (ctx) => {
    ctx.reply('בדיוק גם אני חשבתי על נעם....איזה קטע! 😻😻😻')
  });
}

module.exports={
  bindCommands:bindCommands
}