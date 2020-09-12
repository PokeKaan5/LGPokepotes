const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    let specta = message.guild.roles.cache.get("685144396638846997");

    var statut = "" + time.moment_display();

    if (args.length == 2 && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut == "Start"){
        if (args[0] == "add" && !players.exist_id(membre)){
            if (mem == null){
                message.delete();
                message.channel.send("*[erreur] Il faut mentionner quelqu'un*");
            }
            else if (players.exist_id(membre)){
                message.delete();
                message.channel.send("*[erreur] La personne est déjà Spectateur*");
            }
            else {
                message.delete();
                players.add_spec(membre);
                membre.roles.add(specta).catch(console.error);
                message.channel.send("`" + membre.user.username + " est désormais Spectateur`");
            }
        }
        if (args[0] == "remove" && !players.exist_id(membre)){
            if (mem == null){
                message.delete();
                message.channel.send("*[erreur] Il faut mentionner quelqu'un*");
            }
            else if (!players.exist_id(membre)){
                message.delete();
                message.channel.send("*[erreur] La personne n'est pas Spectateur*");
            }
            else {
                message.delete();
                players.add_spec(membre);
                membre.roles.remove(specta).catch(console.error);
                message.channel.send("`" + membre.user.username + " n'est plus Spectateur`");
            }
        }
        else if (players.exist_id(membre)){
            message.delete();
            message.channel.send("*[erreur] La personne est Joueur*");
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
    name : "spec"
}