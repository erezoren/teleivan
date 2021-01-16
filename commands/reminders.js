const cron = require('node-cron');
const axios = require('axios');
require('dotenv').config();

function bindCommands(bot) {
  cron.schedule('0 30 9 * * SUN,TUE,THU', async () => {
    bot.telegram.sendMessage(-466677636, 'יששששש!!!! עוד מעט דיילי!!! 😛')

  }, {
    scheduled: true,
    timezone: "Asia/Jerusalem"
  });

  cron.schedule('0 30 10 * * MON,WED', async () => {
    bot.telegram.sendMessage(-466677636, 'יששששש!!!! עוד מעט דיילי!!! 😛')

  }, {
    scheduled: true,
    timezone: "Asia/Jerusalem"
  });

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
          const message=`היום ${item.hebrew}`
          bot.telegram.sendMessage(-466677636, message)
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

function isSameDay(d1, d2) {
  console.log(d1.toString())
  console.log(d2.toString())
  return d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate();
}

module.exports = {
  bindCommands: bindCommands
}
