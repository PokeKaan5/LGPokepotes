const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 0 && statut == "Sorcière" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Sorcière" && players.soso_power_kill()){
        message.delete();
        players.kill_soso("" + args[0]);
        var arg = "" + args[0];
        message.author.send("`Tu choisis de tuer " + arg + " avec une potion`");
    }
    else if(args.length == 1 && statut == "Sorcière" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Sorcière" && players.exist_player("" + args[0]) && players.soso_power_kill()){
        message.delete();
        players.kill_soso("" + args[0]);
        var arg = "" + args[0];
        message.author.send("`Tu choisis de tuer " + arg + " avec une potion`");
    }
    else if (players.role_display_perso(message.author) != "Sorcière"){
        message.delete();
        message.author.send("*[erreur] Tu n'es pas sorcière*");
    }
    else if (statut != "Sorcière"){
        message.delete();
        message.channel.send("*[erreur] Ce n'est pas encore le moment de faire des potions*");
    }
    else if (!players.exist_id(message.author)){
        if (players.is_spec(message.author)){
            message.delete();
            message.author.send("*[erreur] Tu es spectateur*");
        }
        else {
            message.delete();
            message.author.send("*[erreur] Tu n'es pas dans la partie*");
        }
    }
    else {
        message.delete();
        message.author.send("*[erreur] Il faut mettre le nom d'un Joueur*");
    }
};

module.exports.help = {
    name : "kill"
}