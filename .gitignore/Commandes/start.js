const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');
var desc = require('../desc.js');
const { enfant_power_model, lgb_nextday } = require('../players.js');

module.exports.run = async(client, message, args) => {

    const number_players = players.nombre_player();
    const number_roles = roles.nombre_role();

    let lg = message.guild.roles.cache.get("715985590264529007");
    let normal = message.guild.roles.cache.get("674970506985996308");
    let power_moment = message.guild.roles.cache.get("716968539159789609");
    let specta = message.guild.roles.cache.get("685144396638846997");
    let maitre = message.guild.roles.cache.get("716604775403094027");

    var statut = "" + time.moment_display();
    

    if (number_players > number_roles && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut == "Start"){
        message.delete();
        message.channel.send("*[erreur] Il n'y a pas assez de rôles*");
    }

    if (number_players < number_roles && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut == "Start"){
        message.delete();
        message.channel.send("*[erreur] Il y a trop de rôles*");
    }
    if(args.length == 0 && number_players == number_roles && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host")) && statut == "Start"){
        message.delete();
        message.channel.send("**`La partie commence !`**");
        var liste = roles.roles_liste();
        players.create_list(liste);
        players.attribution();
        var liste = players.joueurs_liste();
        var i = 0;
        var n = liste.length;
        while (i < n){
            var role = "" + players.role_display("" + liste[i][0]);
            var description = "" + desc.search_desc("" + role);
            liste[i][5].send("`Ton rôle est " + role + " !`" + "\n" + description + "\n");
            i += 1;
        } 
        var liste = players.joueurs_liste();
        var i = 0;
        var n = liste.length;
        var lg_list = [];
        while (i < n){
            if (players.is_loup(i) || players.is_lgb(i)){
                lg_list = lg_list + "- " + liste[i][0] + " " + "\n";
            }
            i += 1;
        } 
        var liste = players.joueurs_liste();
        var i = 0;
        var n = liste.length;
        while (i < n){
            if (players.is_loup(i) || players.is_lgb(i)){
                liste[i][5].send("`Les Loups-Garous sont :`" + "\n" + "`" + lg_list + "`")
            }
            i += 1;
        }   
        time.start();
        setInterval(() => {
            time.plus_seconde();
        }, 1000);
        setInterval(() => {
            if ("" + time.moment_display() == "Nuit"){
                players.vovo_reset();
                if (time.timer() == 1){
                    var elu = "" + players.max_voix();
                    if (elu != ""){
                        players.mort("" + elu);
                    }
                    if (players.debut_disp() == "non"){
                        if (players.mort_display() == "Personne"){
                            message.channel.send("`Le village ne s'est pas mis d'accord sur la personne à éliminer`");
                            players.reset_mort();
                            players.reset_vote();
                        }
                        else{
                            var mort = players.mort_display();
                            var role = players.role_mort_display();
                            message.channel.send("`" + mort + " est mort par le vote et son rôle était " + role + "`");
                            if ("" + mort == "" + players.model_enfantdisplay()){
                                var liste = players.joueurs_liste();
                                var i = 0;
                                var n = liste.length;
                                var enfant = "";
                                while (i < n){
                                    if (players.is_enfant(i)){
                                        liste[i][2] = "Loup-Garou";
                                        roles.delete_role("Enfant Sauvage");
                                        roles.add_role("Loup-Garou")
                                        enfant = "" + liste[i][0];
                                        liste[i][5].send("`Tu es devenu Loup-Garou`");
                                    }
                                    i += 1;
                                }
                                var liste = players.joueurs_liste();
                                var i = 0;
                                var n = liste.length;
                                while (i < n){
                                    if (players.is_loup(i) || players.is_lgb(i)){
                                        liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                    }
                                    i += 1;
                                }
                            }
                            if ("" + role == "Chasseur"){
                                time.ex_moment("Nuit");
                                time.moment_change("Chasseur 2");
                                time.reset_timer();
                                message.channel.send("`" + mort + " a 30 secondes pour tirer sur quelqu'un`");
                            }
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
                            if ("" + mort_bis == "" + players.model_enfantdisplay()){
                                var liste = players.joueurs_liste();
                                var i = 0;
                                var n = liste.length;
                                var enfant = "";
                                while (i < n){
                                    if (players.is_enfant(i)){
                                        liste[i][2] = "Loup-Garou";
                                        roles.delete_role("Enfant Sauvage");
                                        roles.add_role("Loup-Garou")
                                        enfant = "" + liste[i][0];
                                        liste[i][5].send("`Tu es devenu Loup-Garou`");
                                    }
                                    i += 1;
                                }
                                var liste = players.joueurs_liste();
                                var i = 0;
                                var n = liste.length;
                                while (i < n){
                                    if (players.is_loup(i) || players.is_lgb(i)){
                                        liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                    }
                                    i += 1;
                                }
                            }
                            if ("" + role_bis == "Chasseur"){
                                time.ex_moment("Nuit");
                                time.moment_change("Chasseur 2");
                                time.reset_timer();
                                message.channel.send("`" + mort_bis + " a 30 secondes pour tirer sur quelqu'un`");
                            }
                            if (players.win_amoureux()){
                                message.channel.send("**`Les amoureux ont gagné la partie !`**");
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
                            if (players.win_loup() && "" + time.moment_display()){
                                message.channel.send("**`Les Loups-Garous ont gagné la partie !`**");
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
                                message.channel.send("**`L'Assassin a gagné la partie !`**");
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
                                message.channel.send("**`Le Loup-Garou Blanc a gagné la partie !`**");
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
                                message.channel.send("**`Le Village a gagné la partie !`**");
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
                    }
                    players.debut_on();
                    if (players.fin_display() == "non"){
                        message.channel.send("`La nuit tombe sur le village...`");
                    }
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        liste[i][5].roles.add(normal).catch(console.error);
                        i += 1;
                    }
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_loup(i) || players.is_lgb(i)){
                            liste[i][5].roles.remove(normal).catch(console.error);
                            liste[i][5].roles.add(lg).catch(console.error);
                        }
                        i += 1;
                    }
                }
            }
            else if ("" + time.moment_display() == "Chasseur 2"){               
                if (time.timer() == 1){
                    message.channel.send("`Le Chasseur peut choisir sa cible`");
                }
                if (time.timer() == 25){
                     message.channel.send("`Il reste 5 secondes au Chasseur`");
                }
                if (time.timer() == 29){
                    players.debut_on();
                    message.channel.send("`La nuit tombe sur le village...`");
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        liste[i][5].roles.add(normal).catch(console.error);
                        i += 1;
                    }
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_loup(i) || players.is_lgb(i)){
                            liste[i][5].roles.remove(normal).catch(console.error);
                            liste[i][5].roles.add(lg).catch(console.error);
                        }
                        i += 1;
                    }
                }  
            }
            else if ("" + time.moment_display() == "Cupidon"){              
                    if (time.timer() == 1){
                        var liste = players.joueurs_liste();
                        var i = 0;
                        var n = liste.length;
                        while (i < n){
                            if (players.is_cupidon(i)){
                                liste[i][5].roles.add(power_moment).catch(console.error);
                                liste[i][5].roles.remove(normal).catch(console.error);
                            }
                            i += 1;
                        } 
                        message.channel.send("`Le Cupidon peut choisir deux personnes pour les rendre amoureux`");
                    }
                    if (time.timer() == 40){
                        message.channel.send("`Il reste 5 secondes au Cupidon`");
                    }
                    if (time.timer() == 44){
                        var liste = players.joueurs_liste();
                        var i = 0;
                        var n = liste.length;
                        while (i < n){
                            if (players.is_cupidon(i)){
                                liste[i][5].roles.remove(power_moment).catch(console.error);
                                liste[i][5].roles.add(normal).catch(console.error);
                            }
                            i += 1;
                        }
                    }
            }
            else if ("" + time.moment_display() == "Enfant Sauvage"){           
                    if (time.timer() == 1){
                        var liste = players.joueurs_liste();
                        var i = 0;
                        var n = liste.length;
                        while (i < n){
                            if (players.is_enfant(i)){
                                liste[i][5].roles.add(power_moment).catch(console.error);
                                liste[i][5].roles.remove(normal).catch(console.error);
                            }
                            i += 1;
                        } 
                        message.channel.send("`L'Enfant Sauvage peut choisir un modèle`");
                    }
                    if (time.timer() == 40){
                        message.channel.send("`Il reste 5 secondes à l'Enfant Sauvage`");
                    }
                    if (time.timer() == 44){
                        var liste = players.joueurs_liste();
                        var i = 0;
                        var n = liste.length;
                        while (i < n){
                            if (players.is_enfant(i)){
                                liste[i][5].roles.remove(power_moment).catch(console.error);
                                liste[i][5].roles.add(normal).catch(console.error);
                            }
                            i += 1;
                        }
                    }
            }
            else if ("" + time.moment_display() == "Salvateur"){               
                if (time.timer() == 1){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_salva(i)){
                            liste[i][5].roles.add(power_moment).catch(console.error);
                            liste[i][5].roles.remove(normal).catch(console.error);
                        }
                        i += 1;
                    } 
                    message.channel.send("`Le Salvateur peut protéger quelqu'un de l'attaque des Loup-Garous`");
                }
                if (time.timer() == 40){
                    message.channel.send("`Il reste 5 secondes au Salvateur`");
                }
                if (time.timer() == 44){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_salva(i)){
                            liste[i][5].roles.remove(power_moment).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                }
            } 
            else if ("" + time.moment_display() == "Loup-Garou"){
                if (time.timer() == 1){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_loup(i) || players.is_lgb(i)){
                            liste[i][5].roles.remove(normal).catch(console.error);
                            liste[i][5].roles.add(power_moment).catch(console.error);
                        }
                        i += 1;
                    }
                    message.channel.send("`Les Loups-Garous vont pouvoir choisir leur victime`");
                }
                if (time.timer() == 40){
                    message.channel.send("`Il reste 5 secondes aux Loups-Garou`");
                }
                if (time.timer() == 44){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_loup(i) || players.is_lgb(i)){
                            liste[i][5].roles.remove(power_moment).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                }
            }
            else if ("" + time.moment_display() == "Loup-Garou Blanc"){
                if ("" + players.lgb_daydisplay() == "non"){
                    players.lgb_nextday();
                    time.pass_event();
                }
                else {
                    if (time.timer() == 1){
                        var liste = players.joueurs_liste();
                        var i = 0;
                        var n = liste.length;
                        while (i < n){
                            if (players.is_lgb(i)){
                                liste[i][5].roles.remove(normal).catch(console.error);
                                liste[i][5].roles.add(power_moment).catch(console.error);
                            }
                            i += 1;
                        }
                        message.channel.send("`Le Loup-Garou Blanc va pouvoir choisir sa victime s'il le souhaite`");
                    }
                    if (time.timer() == 40){
                        message.channel.send("`Il reste 5 secondes au Loup-Garou Blanc`");
                    }
                    if (time.timer() == 44){
                        var liste = players.joueurs_liste();
                        var i = 0;
                        var n = liste.length;
                        while (i < n){
                            if (players.is_lgb(i)){
                                liste[i][5].roles.remove(power_moment).catch(console.error);
                                liste[i][5].roles.add(normal).catch(console.error);
                            }
                            i += 1;
                        }
                    }
                }
            }
            else if ("" + time.moment_display() == "Voyante"){               
                if (time.timer() == 1){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_voyante(i)){
                            liste[i][5].roles.add(power_moment).catch(console.error);
                            liste[i][5].roles.remove(normal).catch(console.error);
                        }
                        i += 1;
                    } 
                    message.channel.send("`La Voyante peut voir le rôle de quelqu'un`");
                }
                if (time.timer() == 40){
                    message.channel.send("`Il reste 5 secondes à la Voyante`");
                }
                if (time.timer() == 44){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_voyante(i)){
                            liste[i][5].roles.remove(power_moment).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                }
            } 
            else if ("" + time.moment_display() == "Voyante Bavarde"){
                if (time.timer() == 1){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_voyantebv(i)){
                            liste[i][5].roles.add(power_moment).catch(console.error);
                            liste[i][5].roles.remove(normal).catch(console.error);
                        }
                        i += 1;
                    } 
                    message.channel.send("`La Voyante Bavarde peut voir le rôle de quelqu'un`");
                }
                if (time.timer() == 40){
                    message.channel.send("`Il reste 5 secondes à la Voyante Bavarde`");
                }
                if (time.timer() == 44){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_voyantebv(i)){
                            liste[i][5].roles.remove(power_moment).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                }
            } 
            else if ("" + time.moment_display() == "Sorcière"){
                var dead = "" + players.max_voix();
                if (time.timer() == 1){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_sorciere(i)){
                            liste[i][5].roles.add(power_moment).catch(console.error);
                            liste[i][5].roles.remove(normal).catch(console.error);
                            liste[i][5].send("`La personne ciblée par les Loups-Garou est : " + dead + "`");
                        }
                        i += 1;
                    }
                    message.channel.send("`La Sorcière va choisir si elle utilise des potions cette nuit`");
                }
                if (time.timer() == 40){
                    message.channel.send("`Il reste 5 secondes à la Sorcière`");
                }
                if (time.timer() == 44){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_sorciere(i)){
                            liste[i][5].roles.remove(power_moment).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                }
            } 
            else if ("" + time.moment_display() == "Assassin"){
                if (time.timer() == 1){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_assassin(i)){
                            liste[i][5].roles.add(power_moment).catch(console.error);
                            liste[i][5].roles.remove(normal).catch(console.error);
                        }
                        i += 1;
                    }
                    message.channel.send("`L'Assassin va choisir sa cible`");
                }
                if (time.timer() == 40){
                    message.channel.send("`Il reste 5 secondes à l'Assassin`");
                }
                if (time.timer() == 44){
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_assassin(i)){
                            liste[i][5].roles.remove(power_moment).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                }
            } 
            else if ("" + time.moment_display() == "Jour"){
                if (time.timer() == 1){
                    players.vovo_reset();
                    players.assassin_reset();
                    var liste = players.joueurs_liste();
                    var i = 0;
                    var n = liste.length;
                    while (i < n){
                        if (players.is_loup(i) || players.is_lgb(i)){
                            liste[i][5].roles.remove(lg).catch(console.error);
                            liste[i][5].roles.add(normal).catch(console.error);
                        }
                        i += 1;
                    }
                    message.channel.send("`Le jour se lève et le village se réveille !`");
                    var elu = "" + players.max_voix();
                    var i = 0;
                    var liste = players.joueurs_liste();
                    var n = liste.length;
                    var find = false;
                    var ancien = "";
                    while (i < n && find == false){
                        if ("" + elu == "" + liste[i][0]){
                            find = true;
                            var role = "" + liste[i][2];
                            var ancien = liste[i][5];
                        }
                        else {
                            i += 1;
                        }
                    }     
                    if (elu != "" && elu != "" + players.protect_salvadisplay() && !("" + role == "Ancien" && "" + players.ancien_power_display() == "on")){
                        players.mort("" + elu);
                    }
                    if (players.debut_disp() == "non"){
                        if (players.role_mort_display() == "Rien" && players.role_mortsoso_display() == "Rien" && players.role_mortassassin_display() == "Rien" && players.role_mortlgb_display() == "Rien"){
                            message.channel.send("`Personne n'est mort cette nuit`");
                            if ("" + role == "Ancien" && "" + players.ancien_power_display() == "on"){
                                players.ancien_power_off();
                                ancien.send("`Tu as perdu ton pouvoir d'Ancien car les Loup-Garous t'ont attaqué cette nuit`");
                            }
                            players.reset_mort();
                            players.reset_vote();
                            players.salvateur_reset();
                        }
                        else {
                            if (players.role_mort_display() != "Rien"){
                                var mort = "" + players.mort_display();
                                var role = "" + players.role_mort_display();
                                message.channel.send("`" + mort + " s'est fait manger et son rôle était " + role + "`");
                                if ("" + mort == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort + " a 30 secondes pour tirer sur quelqu'un`");
                                }
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
                                if ("" + mort_bis == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role_bis == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort_bis + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                            }
                            if (players.role_mortsoso_display() != "Rien"){
                                var mort2 = "" + players.mort_sosodisplay();
                                var role2 = "" + players.role_mortsoso_display();
                                message.channel.send("`" + mort2 + " s'est fait empoisonner et son rôle était " + role2 + "`");
                                if ("" + mort2 == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role2 == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort2 + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                                if ("" + mort2 == "" + players.amoureux_1()){
                                    var mort_bis = "" + players.amoureux_2();
                                    var role_bis = "" + players.amoureux_2_role();
                                    players.new_mort(mort_bis);
                                    message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort2 + " et son rôle était " + role_bis + "`");
                                }
                                if ("" + mort2 == "" + players.amoureux_2()){
                                    var mort_bis = "" + players.amoureux_1();
                                    var role_bis = "" + players.amoureux_1_role();
                                    players.new_mort(mort_bis);
                                    message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort2 + " et son rôle était " + role_bis + "`");
                                }
                                if ("" + mort_bis == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role_bis == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort_bis + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                            }
                            if (players.role_mortassassin_display() != "Rien"){
                                var mort3 = "" + players.mort_assassindisplay();
                                var role3 = "" + players.role_mortassassin_display();
                                message.channel.send("`" + mort3 + " s'est fait poignarder et son rôle était " + role3 + "`");
                                if ("" + mort3 == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role3 == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort3 + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                                if ("" + mort3 == "" + players.amoureux_1()){
                                    var mort_bis = "" + players.amoureux_2();
                                    var role_bis = "" + players.amoureux_2_role();
                                    players.new_mort(mort_bis);
                                    message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort3 + " et son rôle était " + role_bis + "`");
                                }
                                if ("" + mort3 == "" + players.amoureux_2()){
                                    var mort_bis = "" + players.amoureux_1();
                                    var role_bis = "" + players.amoureux_1_role();
                                    players.new_mort(mort_bis);
                                    message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort3 + " et son rôle était " + role_bis + "`");
                                }
                                if ("" + mort_bis == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role_bis == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort_bis + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                            }
                            if (players.role_mortlgb_display() != "Rien"){
                                var mort4 = "" + players.mort_display();
                                var role4 = "" + players.role_mort_display();
                                message.channel.send("`" + mort4 + " s'est fait manger et son rôle était " + role4 + "`");
                                if ("" + mort4 == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role4 == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort4 + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                                if ("" + mort4 == "" + players.amoureux_1()){
                                    var mort_bis = "" + players.amoureux_2();
                                    var role_bis = "" + players.amoureux_2_role();
                                    players.new_mort(mort_bis);
                                    message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort4 + " et son rôle était " + role_bis + "`");
                                }
                                if ("" + mort4 == "" + players.amoureux_2()){
                                    var mort_bis = "" + players.amoureux_1();
                                    var role_bis = "" + players.amoureux_1_role();
                                    players.new_mort(mort_bis);
                                    message.channel.send("`Malheureusement " + mort_bis + " se suicide par amour pour " + mort4 + " et son rôle était " + role_bis + "`");
                                }
                                if ("" + mort_bis == "" + players.model_enfantdisplay()){
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    var enfant = "";
                                    while (i < n){
                                        if (players.is_enfant(i)){
                                            liste[i][2] = "Loup-Garou";
                                            roles.delete_role("Enfant Sauvage");
                                            roles.add_role("Loup-Garou")
                                            enfant = "" + liste[i][0];
                                            liste[i][5].send("`Tu es devenu Loup-Garou`");
                                        }
                                        i += 1;
                                    }
                                    var liste = players.joueurs_liste();
                                    var i = 0;
                                    var n = liste.length;
                                    while (i < n){
                                        if (players.is_loup(i) || players.is_lgb(i)){
                                            liste[i][5].send("`" + enfant + " a rejoint le camp des Loups_Garous`");
                                        }
                                        i += 1;
                                    }
                                }
                                if ("" + role_bis == "Chasseur"){
                                    time.ex_moment("Jour");
                                    time.moment_change("Chasseur");
                                    time.reset_timer();
                                    message.channel.send("`" + mort_bis + " a 30 secondes pour tirer sur quelqu'un`");
                                }
                            }
                            if (players.win_amoureux()){
                                message.channel.send("**`Les amoureux ont gagné la partie !`**");
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
                                message.channel.send("**`Les Loups-Garous ont gagné la partie !`**");
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
                                message.channel.send("**`L'Assassin a gagné la partie !`**");
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
                                message.channel.send("**`Le Loup-Garou Blanc a gagné la partie !`**");
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
                                message.channel.send("**`Le Village a gagné la partie !`**");
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
                    }
                }
            }
            else if ("" + time.moment_display() == "Chasseur 2"){               
                if (time.timer() == 1){
                    message.channel.send("`Le Chasseur peut choisir sa cible`");
                }
                if (time.timer() == 25){
                     message.channel.send("`Il reste 5 secondes au Chasseur`");
                }
            }
            else if ("" + time.moment_display() == "Vote"){
                if (time.timer() == 1){
                    message.channel.send("`Le village va maintenant pouvoir choisir pour qui voter`");
                }
            }
        }, 1000);
    }
    else if (!players.is_mj(message.author) && !message.member.roles.cache.some(r => r.name === "Host")){
        message.delete();
        message.channel.send("*[erreur] Il faut être Maître du jeu ou Host*");
    }
    else if (statut != "Start"){
        message.delete();
        message.channel.send("*[erreur] Il y a déjà une partie en cours*");
    }
};

module.exports.help = {
    name : "start"
}