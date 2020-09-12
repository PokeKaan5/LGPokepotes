const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var timer = time.timer();

    var statut = "" + time.moment_display();

    if(args.length == 0 && statut != "Start"){
        message.delete();
        message.channel.send("`" + timer + " secondes`");
    }
    else if (statut == "Start"){
        message.delete();
        message.channel.send("*[erreur] La partie n'a pas encore commencé*");
    }
};

module.exports.help = {
    name : "timer"
}