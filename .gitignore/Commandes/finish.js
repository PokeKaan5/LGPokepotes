const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();

    if(args.length == 0 && statut == "Vote" && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host"))){
        message.delete();
        time.finish();
        message.channel.send("`Le vote se fini dans 20 secondes...`");
    }
    else if (!players.is_mj(message.author) && !message.member.roles.cache.some(r => r.name === "Host")){
        message.delete();
        message.author.send("*[erreur] Il faut être Maître du jeu ou Host*");
    }
    else if (statut != "Vote"){
        message.delete();
        message.channel.send("*[erreur] Ce n'est pas encore le moment de voter*");
    }
    
};

module.exports.help = {
    name : "finish"
}