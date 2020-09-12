const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 1 && statut == "Assassin" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Assassin" && players.exist_player("" + args[0]) && players.assassin_power_dispo()){
        message.delete();
        players.assassin_power_murder("" + args[0]);
        var arg = "" + args[0];
        message.author.send("`Tu choisis de poignarder " + arg + "`");
    }
    else if (players.role_display_perso(message.author) != "Assassin"){
        message.delete();
        message.author.send("*[erreur] Tu n'es pas assassin*");
    }
    else if (statut != "Assassin"){
        message.delete();
        message.channel.send("*[erreur] Ce n'est pas encore le moment de jouer*");
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
    name : "murder"
}