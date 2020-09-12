const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    let maitre = message.guild.roles.cache.get("716604775403094027");

    var statut = "" + time.moment_display();

    if (args.length == 2 && message.member.roles.cache.some(r => r.name === "Host") && statut == "Start"){
        if (args[0] == "add" && !players.exist_id(membre)){
            if (mem == null){
                message.delete();
                message.channel.send("*[erreur] Il faut mentionner quelqu'un*");
            }
            else if (players.is_mj(membre)){
                message.delete();
                message.channel.send("*[erreur] La personne est déjà Maître du jeu*");
            }
            else {
                message.delete();
                players.add_mj(membre);
                membre.roles.add(maitre).catch(console.error);
                message.channel.send("`" + membre.user.username + " est désormais Maître du jeu`");
            }
        }
        if (args[0] == "remove" && !players.exist_id(membre)){
            if (mem == null){
                message.delete();
                message.channel.send("*[erreur] Il faut mentionner quelqu'un*");
            }
            else if (!players.exist_id(membre)){
                message.delete();
                message.channel.send("*[erreur] La personne n'est pas Maître du jeu*");
            }
            else {
                message.delete();
                players.left_player(membre);
                membre.roles.remove(maitre).catch(console.error);
                message.channel.send("`" + membre.user.username + " n'est plus Maître du jeu`");
            }
        }
        else if (players.exist_id(membre)){
            message.delete();
            message.channel.send("*[erreur] La personne est Joueur*");
        }
    }
    else if (!message.member.roles.cache.some(r => r.name === "Host")){
        message.delete();
        message.channel.send("*[erreur] Il faut être Host*");
    }
    else if (statut != "Start"){
        message.delete();
        message.channel.send("*[erreur] La partie a déjà commencé*");
    }
};

module.exports.help = {
    name : "mj"
}