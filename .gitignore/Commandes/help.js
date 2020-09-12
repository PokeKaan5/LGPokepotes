const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    if(args.length == 0){
        message.delete();
        message.author.send({
            embed: {
                color: 0xe43333,
                title: `Liste des commandes : (N'importe quand)`,
                fields: [
                    {
                        name: "/lgp help",
                        value: "Envoie un MP avec la liste de toutes les commandes du bot"
                    },
                    {
                        name: "/lgp ping",
                        value: "Voir son ping"
                    },
                    {
                        name: "/lgp join",
                        value: "Rejoindre la partie"
                    },
                    {
                        name: "/lgp left",
                        value: "Quitter la partie"
                    },
                ],
                footer: {
                    text: `Page 1/4`
                }
            }
        })
    }
    else if (args.length == 1){
        if (args[0] == "1"){
            message.delete();
            message.author.send({
                embed: {
                    color: 0xe43333,
                    title: `Liste des commandes : (N'importe quand)`,
                    fields: [
                        {
                            name: "/lgp help",
                            value: "Envoie un MP avec la liste de toutes les commandes du bot"
                        },
                        {
                            name: "/lgp ping",
                            value: "Voir son ping"
                        },
                        {
                            name: "/lgp join",
                            value: "Rejoindre la partie"
                        },
                        {
                            name: "/lgp left",
                            value: "Quitter la partie"
                        },
                    ],
                    footer: {
                        text: `Page 1/4`
                    }
                }
            })
        }
        else if (args[0] == "2"){
            message.delete();
            message.author.send({
                embed: {
                    color: 0xe43333,
                    title: `Liste des commandes : (En Partie)`,
                    fields: [
                        {
                            name: "/lgp role",
                            value: "Donne en MP une description du rôle du joueur"
                        },
                        {
                            name: "/lgp vote [personne]",
                            value: "Attribue le vote sur la personne visé"
                        },
                        {
                            name: "/lgp voix [personne]",
                            value: "Montre le nombre de voix qui sont contre la personne"
                        },
                        {
                            name: "/lgp timer",
                            value: "Voir le temps qui reste dans la journée"
                        },
                        {
                            name: "/lgp pause",
                            value: "Met en pause le timer"
                        },
                        {
                            name: "/lgp continue",
                            value: "Remet en route le timer"
                        },
                    ],
                    footer: {
                        text: `Page 2/4`
                    }
                }
            })
        }
        else if (args[0] == "3"){
            message.delete();
            message.author.send({
                embed: {
                    color: 0xe43333,
                    title: `Liste des commandes : (Pour l'Host)`,
                    fields: [
                        {
                            name: "/lgp start",
                            value: "Commence la partie"
                        },
                        {
                            name: "/lgp reset",
                            value: "Reset la partie"
                        },
                        {
                            name: "/lgp compo add [rôle]",
                            value: "Ajoute le rôle dans la compo"
                        },
                        {
                            name: "/lgp compo remove [rôle]",
                            value: "Supprime le rôle dans la compo"
                        },
                        {
                            name: "/lgp compo list",
                            value: "Voir la compo"
                        },
                        {
                            name: "/lgp playerlist",
                            value: "Affiche la liste des joueurs"
                        },
                        {
                            name: "/lgp finish",
                            value: "Réduit le timer à 20 sec lors du vote"
                        },
                        {
                            name: "/lgp mj",
                            value: "Quasi même droit que le host + voir le rôle des gens"
                        },
                        {
                            name: "/lgp spec",
                            value: "Met spectateur"
                        },
                    ],
                    footer: {
                        text: `Page 3/4`
                    }
                }
            })
        }
        else if (args[0] == "4"){
            message.delete();
            message.author.send({
                embed: {
                    color: 0xe43333,
                    title: `Liste des commandes : (Pour les rôles)`,
                    fields: [
                        {
                            name: "/lgp eat",
                            value: "Permet aux loups de manger une personne"
                        },
                    ],
                    footer: {
                        text: `Page 4/4`
                    }
                }
            })
        }
        else {
            message.delete();
            message.channel.send("*[erreur] Le numéro de la page est incorrecte*");
        }
    }

};

module.exports.help = {
    name : "help"
}