const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

function bindCommands(bot) {
/*  cron.schedule('0 45 8 * * SUN,TUE,THU', async () => {
    bot.telegram.sendMessage(getChatId(),
        'יששששש!!!! עוד מעט דיילי!!! 😛')

  }, {
    scheduled: true,
    timezone: "Asia/Jerusalem"
  });

  cron.schedule('0 45 9 * * MON,WED', async () => {
    bot.telegram.sendMessage(getChatId(),
        'יששששש!!!! עוד מעט דיילי!!! 😛')

  }, {
    scheduled: true,
    timezone: "Asia/Jerusalem"
  });*/

  cron.schedule('0 0 8 * * *', async () => {
    const month = new Date().getMonth() + 1
    const apiUrl = process.env.HEB_CAL_URL + month.toString();
    console.log(apiUrl)
    axios.get(apiUrl)
    .then(response => {
      const calData = response.data;
      calData.items.map(item => {
        const itemDate = Date.parse(item.date);
        if (isSameDay(new Date(itemDate), new Date())) {
          const message = `היום ${item.hebrew}`
          bot.telegram.sendMessage(getChatId(), message)
          bot.telegram.sendMessage(getChatId(), item.memo);
        }
      })
    })
    .catch(ex => {
      console.error("Error fetching hebrew calender", ex)
    })

  }, {
    scheduled: true,
    timezone: "Asia/Jerusalem"
  });

}

function getChatId() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.UMSING_CHAT_ID;
  } else {
    return process.env.TEST_CHAT_ID;
  }

}

function isSameDay(d1, d2) {
  return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
}

module.exports = {
  bindCommands: bindCommands
}
