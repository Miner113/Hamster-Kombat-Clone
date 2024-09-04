const { Telegraf, Markup } = require("telegraf");
const TOKEN = "7414936361:AAHTThLqlAFRgGJNUQvo-0mESJxaGduz0Pg";
const bot = new Telegraf(TOKEN);
const express = require("express");
const app = express()
app.use(express.json())
const web_link = "https://bot.grccoin.org";
const community_link = "https://t.me/miner113";


bot.start((ctx) => {
    const startPayload = ctx.startPayload;
    const urlSent = `${web_link}?ref=${startPayload}`;
    const user = ctx.message.from;
    const userName = user.username ? `@${user.username}` : user.first_name;
    ctx.replyWithMarkdown(`*Hey, ${userName}! I am @miner113 , Welcome to CDPTap!*
Mine CDPTap cryptocurrency easily and earn CDPTap tokens.

Start mining now and be among the biggest players earning CDPtap tokens daily.

Got friends, relatives, co-workers?
Bring them all into the game.
More squad power, more CDPtap tokens.`, {
        reply_markup: {
            inline_keyboard: [
              [{ text: "👋 Start now!", web_app: { url: urlSent } }],
              [{ text: "Join our Community", url: community_link }]
            
            ],
            in: true
        },
    });
  });

  
  bot.launch();
  
app.listen(3000, () => {
    console.log("server is me and now running")
})