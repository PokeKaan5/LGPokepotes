const Discord = require('discord.js');

var roles_list = [];
//[Role, Nombre]

var liste = ["Loup-Garou", "Simple Villageois", "Voyante", "Voyante Bavarde", "Sorcière", "Cupidon", "Chasseur", "Assassin", "Salvateur", "Ancien", "Enfant Sauvage", "Loup-Garou Blanc"];

module.exports = {

    reset_roles: function(){
        roles_list = [];
    },

    roles_liste: function(){
        var list_role = roles_list;
        return list_role;
    },
    
    add_role: function(role){
        if (this.exist_role("" + role)){
            if (this.presence_role("" + role)){
                var i = 0;
                var n = roles_list.length;
                var find = false;
                while (i < n && find == false){
                    if ("" + role == roles_list[i][0]){
                        roles_list[i][1] += 1;
                        find = true;
                    }
                    else {
                        i += 1;
                    }
                }
            }
            else {
                roles_list.push(["" + role, 1]);
            }
        }
    },

    exist_role: function(role){
        var i = 0;
        var n = liste.length;
        var find = false;
        while(i < n && find == false){
            if ("" + role == liste[i]){
                find = true;
            }
            else {
                i += 1;
            }
        }
        return find;
    },

    presence_role: function(role){
        var i = 0;
        var n = roles_list.length;
        var find = false;
        while(i < n && find == false){
            if ("" + role == roles_list[i][0]){
                find = true;
            }
            else {
                i += 1;
            }
        }
        return find;
    },

    delete_role: function(role){
        var i = 0;
        var n = roles_list.length;
        var find = false;
        while (i < n && find == false){
            if ("" + role == roles_list[i][0]){
                find = true;
                if (roles_list[i][1] > 1){
                    roles_list[i][1] = roles_list[i][1] - 1;
                }
                else {
                    roles_list.splice(i, 1);
                }
            }
            else {
                i += 1;
            }
        }
    },
    
    list_role: function(){
        res = "";
        var i = 0;
        var n = roles_list.length;
        while (i < n){
            res += "\n" + "- " + roles_list[i][1] + " " + roles_list[i][0];
            i += 1;
        }
        return res;
    },

    nombre_role: function(){
        var res = 0;
        var i = 0;
        var n = roles_list.length;
        while (i < n){
            res += roles_list[i][1];
            i += 1;
        }
        return res;
    },
};