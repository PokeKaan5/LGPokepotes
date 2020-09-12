const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();

    if(args.length == 0 && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut != "Start"){
        if (time.pause_display() == 0){
            time.pause();
            message.delete();
            message.channel.send("`La partie est en pause`");
        }
        else {
            message.delete();
            message.channel.send("*[erreur] La partie est déjà en pause*");
        }
    }
    else if (!players.is_mj(message.author) && !message.member.roles.cache.some(r => r.name === "Host")){
        message.delete();
        message.channel.send("*[erreur] Il faut être Maître du jeu ou Host*");
    }
    else if (statut == "Start"){
        message.delete();
        message.channel.send("*[erreur] La partie n'a pas encore commencé*");
    }
};

module.exports.help = {
    name : "pause"
}