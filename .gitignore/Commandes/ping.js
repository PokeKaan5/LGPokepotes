const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    if(args.length == 0){
        let début = Date.now();
        message.delete();
        await message.channel.send("Ping").then(async(m) => await m.edit(`${message.member.user.username} : ${Date.now() - début} ms`));
    }
};

module.exports.help = {
    name : "ping"
}