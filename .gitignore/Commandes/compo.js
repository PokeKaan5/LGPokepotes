const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    const number = roles.nombre_role();
    const liste = roles.list_role();

    var statut = "" + time.moment_display();

    if (args.length == 1){
        if (args[0] == "list"){
            if (number <= 0){
                message.delete();
                message.channel.send("*[erreur] Il n'y a pas de rôle dans la partie*");
            }
            else {
                message.delete();
                message.channel.send({
                    embed: {
                        color: 0xe43333,
                        title: `Liste des rôles de la partie :`,
                        fields: [
                            {
                                name: `*${number} rôles dans la liste*`,
                                value: `${liste}`
                            },
                        ],
                    }
                })
            }
        }
    }
    else if (args.length >= 2 && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut == "Start"){
        var role = "" + args[1];
        var n = args.length;
        var i = 2;
        while (i < n){
            argu = " " + args[i];
            role += "" + argu;
            i = i+1;
        }
        if (args[0] == "add"){
            if (roles.exist_role("" + role)){
                if (!roles.presence_role("" + role) || "" + role == "Simple Villageois" || "" + role == "Loup-Garou"){
                    if (("" + role == "Voyante" && roles.presence_role("Voyante Bavarde")) || ("" + role == "Voyante Bavarde" && roles.presence_role("Voyante"))){
                        message.channel.send("*[erreur] Ce rôle est déjà présent !*");
                    }
                    else {
                        message.delete();
                        roles.add_role("" + role);
                        message.channel.send("`Un rôle a été ajouté`");
                    }
                }
                else {
                    message.channel.send("*[erreur] Ce rôle est déjà présent !*");
                }
            }
            else {
                message.delete();
                message.channel.send("*[erreur] Le rôle n'existe pas*");
            }
        }
        else if (args[0] == "remove"){
            if (roles.presence_role("" + role)){
                message.delete();
                roles.delete_role("" + role);
                message.channel.send("`Un rôle a été retiré`");
            }
            else {
                message.delete();
                message.channel.send("*[erreur] Le rôle n'est pas présent dans la partie*");
            }
        }
        else {
            message.delete();
            message.channel.send("*[erreur] Vous ne faites pas la bonne commande*");
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
    name : "compo"
}