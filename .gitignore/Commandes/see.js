const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 0 && statut == "Voyante"&& players.exist_id(message.author) && players.role_display_perso(message.author) == "Voyante" && players.vovo_power_see()){
        message.delete();
        var see_role = players.role_display("" + args[0]);
        players.vovo_power_use(message.author);
        var arg = "" + args[0];
        message.author.send("`" + message.author.username + " choisit de voir le rôle de " + arg + " et il est " + see_role + "`");
    }
    else if(args.length == 1 && statut == "Voyante" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Voyante" && players.exist_player("" + args[0]) &&  players.vovo_power_see()){
        message.delete();
        var see_role = players.role_display("" + args[0]);
        players.vovo_power_use("" + args[0]);
        var arg = "" + args[0];
        message.author.send("`" + message.author.username + " choisit de voir le rôle de " + arg + " et il est " + see_role + "`");
    }
    else if(args.length == 0 && statut == "Voyante Bavarde"&& players.exist_id(message.author) && players.role_display_perso(message.author) == "Voyante Bavarde" && players.vovo_power_see()){
        message.delete();
        var see_role = players.role_display("" + args[0]);
        players.vovobv_power_use(message.author);
        var arg = "" + args[0];
        message.author.send("`" + message.author.username + " choisit de voir le rôle de " + arg + " et il est " + see_role + "`");
        client.channels.cache.get(`675323931607171072`).send("`La voyante bavarde a espionné quelqu'un et cette personne est " + see_role + "`"); 
    }
    else if(args.length == 1 && statut == "Voyante Bavarde" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Voyante Bavarde" && players.exist_player("" + args[0]) && players.vovo_power_see()){
        message.delete();
        var see_role = players.role_display("" + args[0]);
        players.vovobv_power_use("" + args[0]);
        var arg = "" + args[0];
        message.author.send("`" + message.author.username + " choisit de voir le rôle de " + arg + " et il est " + see_role + "`");
        client.channels.cache.get(`675323931607171072`).send("`La voyante bavarde a espionné quelqu'un et cette personne est " + see_role + "`"); 
    }
    else if (players.role_display_perso(message.author) != "Voyante" && players.role_display_perso(message.author) != "Voyante Bavarde"){
        message.delete();
        message.author.send("*[erreur] Tu n'es pas voyante*");
    }
    else if ((statut != "Voyante" && statut != "Voyante Bavarde")){
        message.delete();
        message.author.send("*[erreur] Ce n'est pas encore le moment de d'espionner*");
    }
    else if (players.role_display_perso(message.author) == "Voyante"){
        message.delete();
        message.author.send("*[erreur] Tu as déjà utilisé ton pouvoir*");
    }
    else if (players.role_display_perso(message.author) == "Voyante Bavarde"){
        message.delete();
        message.author.send("*[erreur] Tu as déjà utilisé ton pouvoir*");
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
    name : "see"
}