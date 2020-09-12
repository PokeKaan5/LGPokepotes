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
        var voix = players.voix_display_perso(message.author);
        message.channel.send("`" + message.author.username + " a " + voix + " voix contre lui`");
    }
    else if(args.length == 1 && statut == "Vote" && players.exist_player("" + args[0])){
        message.delete();
        var voix = players.voix_display("" + args[0]);
        var arg = "" + args[0];
        message.channel.send("`" + arg + " a " + voix + " voix contre lui`");
    }
    else if (statut != "Vote"){
        message.delete();
        message.channel.send("*[erreur] Ce n'est pas encore le moment de voter*");
    }
    else if (!players.exist_player("" + args[0])){
        message.delete();
        message.author.send("*[erreur] La personne n'est pas dans la partie*");
    }
};

module.exports.help = {
    name : "voix"
}