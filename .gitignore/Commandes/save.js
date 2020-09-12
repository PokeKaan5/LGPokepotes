const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 0 && "" + players.max_voix() != "" && statut == "Sorcière" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Sorcière" && players.soso_power_rez()){
        message.delete();
        var dead = "" + players.max_voix();
        players.save_soso();
        players.reset_vote();
        message.author.send("`Tu choisis de ramener " + dead + " à la vie avec une potion`");
    }
    else if (players.role_display_perso(message.author) != "Sorcière"){
        message.delete();
        message.author.send("*[erreur] Tu n'es pas sorcière*");
    }
    else if (statut != "Sorcière"){
        message.delete();
        message.channel.send("*[erreur] Ce n'est pas encore le moment de faire des potions*");
    }
    else if (players.mort_display() == "Personne"){
        message.delete();
        message.channel.send("*[erreur] Personne n'a été ciblé par les Loups-Garou*");
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
};

module.exports.help = {
    name : "save"
}