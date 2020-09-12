const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');
var desc = require('../desc.js');

module.exports.run = async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();
    var role_pers = "" + players.role_display_perso(message.author);
    var role = "" + players.role_display("" + args[0]);
    var description_pers = "" + desc.search_desc("" + role_pers); 
    var description = "" + desc.search_desc("" + role); 

    var statut = "" + time.moment_display();

    if (args.length == 0 && statut != "Start"){
        if (players.exist_id(membre)){
            message.delete();
            message.author.send("`Ton rôle est " + role_pers + " !`" + "\n" + description_pers);
        }
        else {
            message.delete();
            message.author.send("*[erreur] Tu n'es pas dans la partie*");
        }
    }
    else if (args.length == 1 && players.is_mj(message.author) && statut != "Start"){
        if (players.exist_player("" + args[0])){
            message.delete();
            var arg = "" + args[0];
            message.author.send("`Le joueur " + arg + " est " + role + " !`" + "\n" + description);
        }
        else {
            message.delete();
            message.author.send("*[erreur] Le joueur n'est pas dans la partie*");
        }
    }
    else if (args.length == 2 && args[0] == "Simple" && args[1] == "Villageois"){
        message.delete();
        var role_desc = "Simple Villageois";
        var description_desc = "" + desc.search_desc("" + role_desc);
        message.author.send(`${description_desc}`);
    }
    else if (args.length == 1 && args[0] == "Loup-Garou"){
        message.delete();
        var role_desc = "Loup-Garou";
        var description_desc = "" + desc.search_desc("" + role_desc);
        message.author.send(`${description_desc}`);
    }
    else if (args.length == 1 && args[0] == "Voyante"){
        message.delete();
        var role_desc = "Voyante";
        var description_desc = "" + desc.search_desc("" + role_desc);
        message.author.send(`${description_desc}`);
    }
    else if (args.length == 1 && args[0] == "Voyante Bavarde"){
        message.delete();
        var role_desc = "Voyante Bavarde";
        var description_desc = "" + desc.search_desc("" + role_desc);
        message.author.send(`${description_desc}`);
    }
    else if (args.length == 1 && args[0] == "Sorcière"){
        message.delete();
        var role_desc = "Sorcière";
        var description_desc = "" + desc.search_desc("" + role_desc);
        message.author.send(`${description_desc}`);
    }
    else if (args.length == 1 && args[0] == "list"){
        message.delete();
        message.channel.send({
            embed: {
                color: 0xe43333,
                title: `Liste des rôles existants :`,
                fields: [
                    {
                        name: `*5 rôles*`,
                        value: "- Simple Villageois" + "\n" + "- Loup-Garou" + "\n" + "- Voyante" + "\n" + "- Voyante Bavarde" + "\n" + "- Sorcière"
                    },
                ],
            }
        })
    }
    else if (!players.is_mj(message.author)){
        message.delete();
        message.channel.send("*[erreur] Il faut être Maître du jeu*");
    }
    else if (statut == "Start"){
        message.delete();
        message.channel.send("*[erreur] La partie n'a pas encore commencé*");
    }
};

module.exports.help = {
    name : "role"
}