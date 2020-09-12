const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 0 && statut == "Vote" && players.exist_id(message.author)){
        message.delete();
        message.delete();
        message.channel.send("*[erreur] Il faut mentionner un joueur*");
    }
    else if(args.length == 1 && statut == "Vote" && players.exist_id(message.author) && players.exist_player("" + args[0])){
        message.delete();
        players.vote(message.author, "" + args[0]);
        var arg = "" + args[0];
        message.channel.send("`" + message.author.username + " vote pour " + arg + "`");
    }
    else if (statut != "Vote"){
        message.delete();
        message.channel.send("*[erreur] Ce n'est pas encore le moment de voter*");
    }
};

module.exports.help = {
    name : "vote"
}