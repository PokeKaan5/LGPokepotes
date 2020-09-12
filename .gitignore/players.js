const Discord = require('discord.js');
var roles = require('./roles.js');

var Joueurs = [];
//[[nom, id, Role, Vote, Voix, Member]]

var Mega = []; 

var power_vovo = ["Personne", "Rien"];

var cupi_power = "love";

var power_vovobv = ["Personne", "Rien"];

var mort = ["Personne", "Rien"];

var mort_soso = ["Personne", "Rien"];

var soso_power = ["kill", "rez"];

var amoureux = [["Personne", "Rien"], ["Personne", "Rien"]];

var mort_assassin = ["Personne", "Rien"];

var assassin_power = "murder";

var protec_salva = "Personne";

var salva_power = "protect";

var enfant_model = "Personne";

var enfant_power = "model";

var ancien_power = "on";

var mort_lgb = ["Personne", "Rien"];

var lgb_power = "eat";

var lgb_day = "non";

var debut = "oui";

var fin = "non";

var mj = [];
//[ID]

var spec = [];
//[ID]

var fait = [];
//[Role]

module.exports = {

    fin_display: function(){
        return "" + fin;
    },

    fin: function(){
        fin = "oui";
    },

    reset: function(){
        Joueurs = [];
        Mega = []; 
        power_vovo = ["Personne", "Rien"];
        cupi_power = "love";
        power_vovobv = ["Personne", "Rien"];
        mort = ["Personne", "Rien"];
        mort_soso = ["Personne", "Rien"];
        soso_power = ["kill", "rez"];
        amoureux = [["Personne", "Rien"], ["Personne", "Rien"]];
        mort_assassin = ["Personne", "Rien"];
        assassin_power = "murder";
        protec_salva = "Personne";
        salva_power = "protect";
        enfant_model = "Personne";
        enfant_power = "model";
        ancien_power = "on";
        mort_lgb = ["Personne", "Rien"];
        lgb_power = "eat";
        lgb_day = "non";
        debut = "oui";
        mj = [];
        spec = [];
        fait = [];
    },

    is_lgb: function(place){
        var res = false; 
        if (Joueurs[place][2] == "Loup-Garou Blanc"){
            res = true;
        }
        return res;
    },

    lgb_nextday: function(){
        if ("" + lgb_day == "oui"){
            lgb_day = "non";
        }
        else {
            lgb_day = "oui";
        }
    },

    lgb_daydisplay: function(){
        return "" + lgb_day;
    },

    lgb_power_eat: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                var role = "" + Joueurs[i][2];
                roles.delete_role(role);
                mort_lgb[0] = "" + Joueurs[i][0]; 
                mort_lgb[1] = "" + Joueurs[i][2];
                spec.push([Joueurs[i][1], Joueurs[i][5]]);
                Joueurs.splice(i, 1);
                lgb_power = "off"
            }
            else {
                i += 1;
            }
        }
    },

    lgb_power_dispo: function(){
        var res = false;
        if (lgb_power == "eat"){
            res = true;
        }
        return res;
    },

    lgb_reset: function(){
        lgb_power = "eat";
    },

    mort_lgbdisplay: function(){
        return "" + mort_lgb[0];
    },

    role_mortlgb_display: function(){
        return "" + mort_lgb[1];
    },

    ancien_power_off: function(){
        ancien_power = "off";
    },

    ancien_power_display: function(){
        return "" + ancien_power;
    },

    is_enfant: function(place){
        var res = false;
        if (Joueurs[place][2] == "Enfant Sauvage"){
            res = true;
        }
        return res;
    },

    enfant_power_model: function(membre){
        enfant_model = "" + membre;
        enfant_power = "off";
    },

    enfant_power_dispo: function(){
        var res = false;
        if (enfant_power == "model"){
            res = true;
        }
        return res;
    },

    model_enfantdisplay: function(){
        return "" + enfant_model;
    },

    is_salva: function(place){
        var res = false;
        if (Joueurs[place][2] == "Salvateur"){
            res = true;
        }
        return res;
    },

    salvateur_power_protect: function(membre){
        protec_salva = "" + membre;
        salva_power = "off";
    },

    salvateur_power_dispo: function(){
        var res = false;
        if (salva_power == "protect"){
            res = true;
        }
        return res;
    },

    salvateur_reset: function(){
        salva_power = "protect";
        protec_salva = "Personne";
    },

    protect_salvadisplay: function(){
        return "" + protec_salva;
    },

    is_assassin: function(place){
        var res = false;
        if (Joueurs[place][2] == "Assassin"){
            res = true;
        }
        return res;
    },

    assassin_power_murder: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                var role = "" + Joueurs[i][2];
                roles.delete_role(role);
                mort_assassin[0] = "" + Joueurs[i][0]; 
                mort_assassin[1] = "" + Joueurs[i][2];
                spec.push([Joueurs[i][1], Joueurs[i][5]]);
                Joueurs.splice(i, 1);
                assassin_power = "off"
            }
            else {
                i += 1;
            }
        }
    },

    assassin_power_dispo: function(){
        var res = false;
        if (assassin_power == "murder"){
            res = true;
        }
        return res;
    },

    assassin_reset: function(){
        assassin_power = "murder";
    },

    mort_assassindisplay: function(){
        return "" + mort_assassin[0];
    },

    role_mortassassin_display: function(){
        return "" + mort_assassin[1];
    },

    amoureux_1: function(){
        return "" + amoureux[0][0];
    },

    amoureux_2: function(){
        return "" + amoureux[1][0];
    },

    amoureux_1_role: function(){
        return "" + amoureux[0][1];
    },

    amoureux_2_role: function(){
        return "" + amoureux[1][1];
    },

    is_cupidon: function(place){
        var res = false;
        if (Joueurs[place][2] == "Cupidon"){
            res = true;
        }
        return res;
    },

    cupi_power: function(){
        var res = false;
        if (cupi_power == "love"){
            res = true;
        }
        return res;
    },

    cupi_power_use: function(membre_1, membre_2){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre_1 == "" + Joueurs[i][0]){
                find = true;
                amoureux[0][0] = "" + Joueurs[i][0]; 
                amoureux[0][1] = "" + Joueurs[i][2];
            }
            else {
                i += 1;
            }
        }
        var j = 0;
        var find = false;
        while (j < n && find == false){
            if ("" + membre_2 == "" + Joueurs[j][0]){
                find = true;
                amoureux[1][0] = "" + Joueurs[j][0]; 
                amoureux[1][1] = "" + Joueurs[j][2];
            }
            else {
                j += 1;
            }
        }
        cupi_power = "off";
    },

    vovo_power_see: function(){
        var res = false;
        if (power_vovo[1] == "Rien"){
            res = true;
        }
        return res;
    },

    vovobv_power_see: function(){
        var res = false;
        if (power_vovobv[1] == "Rien"){
            res = true;
        }
        return res;
    },

    vovo_power_use: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                power_vovo[0] = "" + Joueurs[i][0]; 
                power_vovo[1] = "" + Joueurs[i][2];
            }
            else {
                i += 1;
            }
        }
    },

    vovobv_power_use: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                power_vovobv[0] = "" + Joueurs[i][0]; 
                power_vovobv[1] = "" + Joueurs[i][2];
            }
            else {
                i += 1;
            }
        }
    },

    vovo_reset: function(){
        power_vovo = ["Personne", "Rien"];
        power_vovobv = ["Personne", "Rien"];
    },

    soso_power_kill: function(){
        var res = false;
        if (soso_power[0] == "kill"){
            res = true;
        }
        return res;
    },

    soso_power_rez: function(){
        var res = false;
        if (soso_power[1] == "rez"){
            res = true;
        }
        return res;
    },

    mort_sosodisplay: function(){
        return "" + mort_soso[0];
    },

    role_mortsoso_display: function(){
        return "" + mort_soso[1];
    },

    kill_soso: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                var role = "" + Joueurs[i][2];
                roles.delete_role(role);
                mort_soso[0] = "" + Joueurs[i][0]; 
                mort_soso[1] = "" + Joueurs[i][2];
                spec.push([Joueurs[i][1], Joueurs[i][5]]);
                Joueurs.splice(i, 1);
                soso_power[0] = "off"
            }
            else {
                i += 1;
            }
        }
    },

    new_mort: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                var role = "" + Joueurs[i][2];
                roles.delete_role(role);
                spec.push([Joueurs[i][1], Joueurs[i][5]]);
                Joueurs.splice(i, 1);
            }
            else {
                i += 1;
            }
        }
    },

    save_soso: function(){
        mort[0] = "Personne";
        mort[1] = "Rien";
        soso_power[1] = "off"
    },

    search_member: function(membre){
        res = '';
        var find = false;
        var i = 0;
        var n = Joueurs.length;
        while (i < n && find == false){
            if (Joueurs[i][0] == "" + membre){
                res = Joueurs[i][5];
            }
            i += 1;
        }
        return res;
    },

    is_loup: function(place){
        var res = false;
        if (Joueurs[place][2] == "Loup-Garou"){
            res = true;
        }
        return res;
    },

    is_voyante: function(place){
        var res = false;
        if (Joueurs[place][2] == "Voyante"){
            res = true;
        }
        return res;
    },

    is_voyantebv: function(place){
        var res = false;
        if (Joueurs[place][2] == "Voyante Bavarde"){
            res = true;
        }
        return res;
    },

    is_sorciere: function(place){
        var res = false;
        if (Joueurs[place][2] == "Sorcière"){
            res = true;
        }
        return res;
    },

    reset_joueurs: function(){
        Joueurs = [];
    },

    reset_debut: function(){
        debut = "oui";
    },

    reset_mj: function(){
        mj = [];
    },

    reset_spec: function(){
        spec = [];
    },

    reset_fait: function(){
        fait = [];
    },

    joueurs_liste: function(){
        return Joueurs;
    },

    mega_liste: function(){
        return Mega;
    },

    mj_liste: function(){
        return mj;
    },

    spec_liste: function(){
        return spec;
    },

    win_loup: function(){
        var res = true;
        var i = 0;
        var n = Joueurs.length;
        while (i < n && res == true){
            if (Joueurs[i][2] != "Loup-Garou"){
                res = false;
            }
            i += 1;
        }
        return res;
    },

    win_assassin: function(){
        var res = true;
        var i = 0;
        var n = Joueurs.length;
        while (i < n && res == true){
            if (Joueurs[i][2] != "Assassin"){
                res = false;
            }
            i += 1;
        }
        return res;
    },

    win_lgb: function(){
        var res = true;
        var i = 0;
        var n = Joueurs.length;
        while (i < n && res == true){
            if (Joueurs[i][2] != "Loup-Garou Blanc"){
                res = false;
            }
            i += 1;
        }
        return res;
    },

    win_amoureux: function(){
        var res = true;
        var i = 0;
        var n = Joueurs.length;
        while (i < n && res == true){
            if (("" + Joueurs[i][0] != "" + amoureux[0][0] && "" + Joueurs[i][0] != "" + amoureux[1][0])){
                res = false;
            }
            i += 1;
        }
        return res;
    },

    win_village: function(){
        var res = true;
        var i = 0;
        var n = Joueurs.length;
        while (i < n && res == true){
            if (Joueurs[i][2] == "Loup-Garou" || Joueurs[i][2] == "Assassin" || Joueurs[i][2] == "Loup-Garou Blanc"){
                res = false;
            }
            i += 1;
        }
        return res;
    },

    debut_disp: function(){
        return "" + debut;
    },

    debut_on: function(){
        debut = "non";
    },

    vote: function(membre, personne){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == Joueurs[i][1]){
                find = true;
                var ancien = "" + Joueurs[i][3];
                if (ancien != ""){
                    this.voix("" + ancien, (-1));
                }
                this.voix("" + personne, 1);
                Joueurs[i][3] = "" + personne;
            }
            else {
                i += 1;
            }
        }
    },

    voix: function(membre, nbr){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == Joueurs[i][0]){
                find = true;
                Joueurs[i][4] += nbr;
            }
            else {
                i += 1;
            }
        }
    },

    voix_display: function(membre){
        var res = 0;
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                res = Joueurs[i][4];
            }
            else {
                i += 1;
            }
        }
        return res;
    },

    voix_display_perso: function(membre){
        var res = 0;
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == Joueurs[i][1]){
                find = true;
                res = Joueurs[i][4];
            }
            else {
                i += 1;
            }
        }
        return res;
    },

    max_voix: function(){
        var disp = "";
        var max = 0;
        var i = 0;
        var n = Joueurs.length;
        while (i < n){
            if (Number(Joueurs[i][4]) > max){
                max = Number(Joueurs[i][4]);
                disp = "" + Joueurs[i][0];
                i += 1;
            }
            else if (Number(Joueurs[i][4]) == max){
                disp = "";
                i += 1;
            }
            else {
                i += 1;
            }
        }
        return "" + disp;
    },

    mort: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                var role = "" + Joueurs[i][2];
                roles.delete_role(role);
                mort[0] = "" + Joueurs[i][0];
                mort[1] = "" + Joueurs[i][2];
                spec.push([Joueurs[i][1], Joueurs[i][5]]);
                Joueurs.splice(i, 1);
            }
            else {
                i += 1;
            }
        }
    },

    mort_display: function(){
        return "" + mort[0];
    },

    role_mort_display: function(){
        return "" + mort[1];
    },

    reset_mort: function(){
        mort = ["Personne", "Rien"];
        mort_soso = ["Personne", "Rien"];
        mort_lgb = ["Peronne", "Rien"];
        mort_assassin = ["Personne", "Rien"];
    },

    reset_vote: function() {
        var i = 0; 
        var n = Joueurs.length;
        while (i < n){
            Joueurs[i][3] = "";
            Joueurs[i][4] = 0;
            i += 1;
        }
    },

    add_spec: function(membre){
        spec.push([membre.id, membre]);
    },

    supp_spec: function(membre){
        var i = 0;
        var n = spec.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == spec[i][0]){
                find == true;
                spec.splice(i, 1);
            }
            else {
                i += 1;
            }
        }
    },

    is_spec: function(membre){
        var i = 0;
        var n = spec.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == spec[i][0]){
                find == true;
            }
            else {
                i += 1;
            }
        }
        return find;
    },

    add_mj: function(membre){
        mj.push([membre.id, membre]);
    },

    supp_mj: function(membre){
        var i = 0;
        var n = mj.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == mj[i]){
                find == true;
                mj.splice(i, 1);
            }
            else {
                i += 1;
            }
        }
    },

    is_mj: function(membre){
        var i = 0;
        var n = mj.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == mj[i]){
                find == true;
            }
            else {
                i += 1;
            }
        }
        return find;
    },

    role_display: function(membre){
        var res = "";
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
                res = "" + Joueurs[i][2];
            }
            else {
                i += 1;
            }
        }
        return res;
    },

    role_display_perso: function(membre){
        var res = "";
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == Joueurs[i][1]){
                find = true;
                res = "" + Joueurs[i][2];
            }
            else {
                i += 1;
            }
        }
        return res;
    },

    create_list: function(liste){
        var i = 0;
        var n = liste.length;
        while (i < n){
            var taille = liste[i][1];
            while (taille > 0){
                fait.push("" + liste[i][0]);
                taille = taille - 1;
            }
            i += 1;            
        }
    },

    attribution: function(){
        var i = 0;
        var n = Joueurs.length;
        while (i < n){
            var max = fait.length - 1;
            var num = Math.floor(Math.random() * (max - 0 + 1)) + 0;
            Joueurs[i][2] = "" + fait[num];
            fait.splice(num, 1);
            i += 1;
        }
    },

    add_player: function(membre, name){
        Joueurs.push(["" + name, membre.id, "", "", 0, membre]);
        Mega.push(["" + name, membre.id, "", "", 0, membre]);
    },

    exist_player: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if ("" + membre == "" + Joueurs[i][0]){
                find = true;
            }
            else {
                i += 1;
            }
        }
        return find;
    },

    exist_id: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == Joueurs[i][1]){
                find = true;
            }
            else {
                i += 1;
            }
        }
        return find;
    },

    left_player: function(membre){
        var i = 0;
        var n = Joueurs.length;
        var find = false;
        while (i < n && find == false){
            if (membre.id == Joueurs[i][1]){
                find = true;
                Joueurs.splice(i, 1);
            }
            else {
                i += 1;
            }
        }
    },

    list_player: function(){
        res = "";
        var i = 0;
        var n = Joueurs.length;
        while (i < n){
            res += "\n" + "- " + Joueurs[i][0];
            i += 1;
        }
        return res;
    },

    nombre_player: function(){
        return Joueurs.length;
    },
};