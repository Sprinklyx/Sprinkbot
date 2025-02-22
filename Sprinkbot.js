//require discord.js classes
const {Client, Events, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');

//create new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds]});

//When client is ready, run once
client.once(Events.ClientReady, readyClient => {
    console.log('Ready! Logged in as ${readyClient.user.tag}');
});

//Log in to Discord
client.login(token);