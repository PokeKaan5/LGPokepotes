const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    var statut = "" + time.moment_display();

    if (args.length == 0 && statut == "Start"){
        if (!players.exist_id(membre)){
            message.delete();
            message.channel.send("*[erreur] Le joueur n'est pas dans la partie*");
        }
        else {
            message.delete();
            players.left_player(membre);
            message.channel.send("`Le joueur " + membre.user.username + " a été retiré de la partie`");
        }
    }
    else if (args.length == 1 && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut == "Start"){
        if (mem == null){
            message.delete();
            message.channel.send("*[erreur] Il faut mentionner un joueur*");
        }
        else if (!players.exist_id(membre)){
            message.delete();
            message.channel.send("*[erreur] Le joueur n'est pas dans la partie*");
        }
        else {
            message.delete();
            players.left_player(membre);
            message.channel.send("`Le joueur " + membre.user.username + " a été retiré de la partie`");
        }
    }
    else if (!players.is_mj(message.author) && !message.member.roles.cache.some(r => r.name === "Host")){
        message.delete();
        message.channel.send("*[erreur] Il faut être Maître du jeu ou Host*");
    }
    else if (statut != "Start"){
        message.delete();
        message.channel.send("*[erreur] La partie a déjà commencé*");
    }
};

module.exports.help = {
    name : "left"
}