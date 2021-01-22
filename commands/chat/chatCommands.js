const {NlpManager} = require('node-nlp');
const manager = new NlpManager({languages: ['en'], forceNER: true});
const trainnlp = require('./train-nlp');

// Train and save the model.
(async () => {

  await trainnlp(manager);
  await manager.train();
  manager.save();
})();

function bindCommands(bot) {
  const ivanRegex = new RegExp(/ivan*/i)
  bot.hears(ivanRegex, async (ctx) => {
    const query = ctx.message.text;
    const response = await manager.process('en', query);
    ctx.telegram.sendMessage(ctx.message.chat.id,
        response.answer || "I didn't understand what you want")
  })
}

module.exports = {
  bindCommands: bindCommands
}
