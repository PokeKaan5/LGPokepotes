const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 2 && statut == "Cupidon" && players.exist_id(message.author) && players.role_display_perso(message.author) == "Cupidon" && players.exist_player("" + args[0]) &&  players.cupi_power()){
        message.delete();
        players.cupi_power_use("" + args[0], "" + args[1]);
        var arg = "" + args[0];
        var arg1 = "" + args[1];
        message.author.send("`" + message.author.username + " choisit de rendre " + arg + " et " + arg1 + " follement amoureux`");
        var liste2 = players.joueurs_liste();
        var j = 0;
        var findb = false;
        var findb_2 = false;
        var role_1 = "Rien";
        var role_2 = "Rien";
        var m = liste2.length;
        while (j < m && (findb == false || findb_2 == false)){
            if ("" + liste2[j][0] == "" + args[0]){
                role_1 = "" + liste2[j][2];
                findb = true;
            }
            else if ("" + liste2[j][0] == "" + args[1]){
                role_2 = "" + liste2[j][2];
                findb_2 = true;
            }
            j += 1;
        }
        var liste = players.joueurs_liste();
        var i = 0;
        var find = false;
        var find_2 = false;
        var n = liste.length;
        var arg = "" + args[0];
        var arg1 = "" + args[1];
        while (i < n && (find == false || find_2 == false)){
            if ("" + liste[i][0] == "" + args[0]){
                liste[i][5].send("`Tu es tombé follement amoureux de " + arg1 + " et son rôle est " + role_2 + "`");
                find = true;
            }
            else if ("" + liste[i][0] == "" + args[1]){
                liste[i][5].send("`Tu es tombé follement amoureux de " + arg + " et son rôle est " + role_1 + "`");
                find_2 = true;
            }
            i += 1;
        }
    }
    else if (players.role_display_perso(message.author) != "Cupidon"){
        message.delete();
        message.author.send("*[erreur] Tu n'es pas cupidon*");
    }
    else if (statut != "Cupidon"){
        message.delete();
        message.author.send("*[erreur] Ce n'est pas encore le moment de jouer*");
    }
    else if (players.role_display_perso(message.author) == "Cupidon"){
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
        message.author.send("*[erreur] Il faut mettre le nom de joueurs*");
    }
};

module.exports.help = {
    name : "love"
}