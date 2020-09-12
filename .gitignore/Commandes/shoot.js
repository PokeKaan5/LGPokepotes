const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    var statut = "" + time.moment_display();
    const membre = message.mentions.members.first() || message.member;
    const mem = message.mentions.members.first();

    if(args.length == 1 && (statut == "Chasseur" || statut == "Chasseur 2") && players.exist_id(message.author) && players.role_display_perso(message.author) == "Chasseur" && players.exist_player("" + args[0])){
        message.delete();
        var mort = "" + args[0];
        var role = players.role_display("" + args[0]);
        players.new_mort(mort);
        message.channel.send("`" + mort + " s'est fait tirer dessus et son rôle était " + role + "`");
        if ("" + mort == "" + players.amoureux_1()){
            var mort_bis = "" + players.amoureux_2();
            var role_bis = "" + players.amoureux_2_role();
            players.new_mort(mort_bis);
            message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort + " et son rôle était " + role_bis + "`");
        }
        if ("" + mort == "" + players.amoureux_2()){
            var mort_bis = "" + players.amoureux_1();
            var role_bis = "" + players.amoureux_1_role();
            players.new_mort(mort_bis);
            message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort + " et son rôle était " + role_bis + "`");
        }
        time.finish_chasseur(); 

        if (players.win_amoureux()){
            message.channel.send("`**Les amoureux ont gagné la partie !**`");
            time.end();
            var liste = players.joueurs_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][5].roles.remove(normal).catch(console.error);
                liste[i][5].roles.remove(lg).catch(console.error);
                liste[i][5].roles.remove(maitre).catch(console.error);
                liste[i][5].roles.remove(specta).catch(console.error);
                liste[i][5].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
            var liste = players.spec_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][1].roles.remove(normal).catch(console.error);
                liste[i][1].roles.remove(lg).catch(console.error);
                liste[i][1].roles.remove(maitre).catch(console.error);
                liste[i][1].roles.remove(specta).catch(console.error);
                liste[i][1].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
                        
        }
        if (players.win_loup()){
            message.channel.send("`**Les Loups-Garous ont gagné la partie !**`");
            time.end();
            var liste = players.joueurs_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][5].roles.remove(normal).catch(console.error);
                liste[i][5].roles.remove(lg).catch(console.error);
                liste[i][5].roles.remove(maitre).catch(console.error);
                liste[i][5].roles.remove(specta).catch(console.error);
                liste[i][5].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
            var liste = players.spec_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][1].roles.remove(normal).catch(console.error);
                liste[i][1].roles.remove(lg).catch(console.error);
                liste[i][1].roles.remove(maitre).catch(console.error);
                liste[i][1].roles.remove(specta).catch(console.error);
                liste[i][1].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
                        
        }
        if (players.win_assassin() && "" + time.moment_display()){
            message.channel.send("`**L'Assassin a gagné la partie !**`");
            time.end();
            var liste = players.joueurs_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][5].roles.remove(normal).catch(console.error);
                liste[i][5].roles.remove(lg).catch(console.error);
                liste[i][5].roles.remove(maitre).catch(console.error);
                liste[i][5].roles.remove(specta).catch(console.error);
                liste[i][5].roles.remove(power_moment).catch(console.error);
                i += 1;
            }         
            var liste = players.spec_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][1].roles.remove(normal).catch(console.error);
                liste[i][1].roles.remove(lg).catch(console.error);
                liste[i][1].roles.remove(maitre).catch(console.error);
                liste[i][1].roles.remove(specta).catch(console.error);
                liste[i][1].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
                                              
        }
        if (players.win_lgb() && "" + time.moment_display()){
            message.channel.send("`**Le Loup-Garou Blanc a gagné la partie !**`");
            time.end();
            var liste = players.joueurs_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][5].roles.remove(normal).catch(console.error);
                liste[i][5].roles.remove(lg).catch(console.error);
                liste[i][5].roles.remove(maitre).catch(console.error);
                liste[i][5].roles.remove(specta).catch(console.error);
                liste[i][5].roles.remove(power_moment).catch(console.error);
                i += 1;
            }         
            var liste = players.spec_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][1].roles.remove(normal).catch(console.error);
                liste[i][1].roles.remove(lg).catch(console.error);
                liste[i][1].roles.remove(maitre).catch(console.error);
                liste[i][1].roles.remove(specta).catch(console.error);
                liste[i][1].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
                                              
        }
        if (players.win_village()){
            message.channel.send("`**Le Village a gagné la partie !**`");
            time.end();
            var liste = players.joueurs_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][5].roles.remove(normal).catch(console.error);
                liste[i][5].roles.remove(lg).catch(console.error);
                liste[i][5].roles.remove(maitre).catch(console.error);
                liste[i][5].roles.remove(specta).catch(console.error);
                liste[i][5].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
            var liste = players.spec_liste();
            var i = 0;
            var n = liste.length;
            while (i < n){
                liste[i][1].roles.remove(normal).catch(console.error);
                liste[i][1].roles.remove(lg).catch(console.error);
                liste[i][1].roles.remove(maitre).catch(console.error);
                liste[i][1].roles.remove(specta).catch(console.error);
                liste[i][1].roles.remove(power_moment).catch(console.error);
                i += 1;
            }
                         
        }  
        if (players.win_amoureux() || players.win_assassin() || players.win_lgb() || players.win_loup() || players.win_village()){
            players.reset();
            roles.reset_roles();
            time.reset();
            players.fin();
        }    
    }
    else if (players.role_display_perso(message.author) != "Chasseur"){
        message.delete();
        message.author.send("*[erreur] Tu n'es pas chasseur*");
    }
    else if (statut != "Chasseur" && statut != "Chasseur 2"){
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
    name : "shoot"
}