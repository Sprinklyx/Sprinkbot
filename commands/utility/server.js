const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Provides server information'),

    async execute(interaction) {
        await interaction.reply(`This server is ${interaction.guild.name}, was created ${interaction.guild.createdAt}, and has ${interaction.guild.memberCount} members.`)
    },

};