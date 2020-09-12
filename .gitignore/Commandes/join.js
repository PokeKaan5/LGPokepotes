const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();
    const joueur = message.member;

    let lg = message.guild.roles.cache.get("715985590264529007");
    let normal = message.guild.roles.cache.get("674970506985996308");
    let maitre = message.guild.roles.cache.get("716604775403094027");
    let specta = message.guild.roles.cache.get("685144396638846997");
    let power_moment = message.guild.roles.cache.get("716968539159789609");

    var statut = "" + time.moment_display();

    if (args.length == 0){
        message.delete();
        message.channel.send("*[erreur] Il faut choisir un nom de jeu*");
    }
    else if (args.length == 1 && statut == "Start"  && !players.is_spec(message.author) && !players.is_mj(message.author)){
        if (mem == null){
            if (players.exist_id(message.author)){
                message.delete();
                message.channel.send("*[erreur] Le joueur est déjà dans la partie*");
            }
            else {
                message.delete();
                players.add_player(message.member, "" + args[0]);
                joueur.roles.remove(normal).catch(console.error);
                joueur.roles.remove(lg).catch(console.error);
                joueur.roles.remove(maitre).catch(console.error);
                joueur.roles.remove(specta).catch(console.error);
                joueur.roles.remove(power_moment).catch(console.error);
                var arg = "" + args[0];
                message.channel.send("`Le joueur " + message.author.username + " a été ajouté à la partie sous le nom de " + arg + "`");
            }
        }
        else {
            message.delete();
            message.channel.send("*[erreur] Il faut choisir un nom de jeu*");
        }
    }
    else if (players.is_spec(membre) || players.is_mj(membre)){
        message.delete();
        message.channel.send("*[erreur] La personne est Joueur*");
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
    name : "join"
}