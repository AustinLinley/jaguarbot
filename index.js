const SlackBot = require('slackbots');
const axios= require('axios');

const bot = new SlackBot({
    token: 'xoxb-123456789',
    name: 'iguanabot'
});

// Start Handler
bot.on('start', () => {
  const params = {
      icon_emoji: ':lizard:'
  }

  bot.postMessageToChannel(
      'general', 
      'Hello World', 
      params
    );

});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
    if (data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});
    
// Responds to Data
function handleMessage(message) {
if(message.includes('hey')) {
(bot.postMessageToChannel('general', 'Hello World Again')) //not sure why "APP" with different profile pic/emoji responds instead of original bot, restarting "npm start" fixes temporarily
  }
}

