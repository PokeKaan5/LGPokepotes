const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    const number = players.nombre_player();
    const liste = players.list_player();

    if (args.length == 0){
        if (number <= 0){
            message.delete();
            message.channel.send("*[erreur] Il n'y a pas de joueurs dans la partie*")
        }
        else {
            message.delete();
            message.channel.send({
                embed: {
                    color: 0xe43333,
                    title: `Liste des joueurs de la partie :`,
                    fields: [
                        {
                            name: `*${number} joueurs dans la liste*`,
                            value: `${liste}`
                        },
                    ],
                }
            })
        }
    }
};

module.exports.help = {
    name : "playerlist"
}