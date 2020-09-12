const Discord = require('discord.js');

var rolest = require('./roles.js');

var timer = 0;

var pause = 0;

var moment = "Start";

var ancien_moment = "Rien";

var jour_1 = "on";

var events = ["Nuit", "Chasseur 2", "Cupidon", "Enfant Sauvage", "Salvateur", "Loup-Garou", "Loup-Garou Blanc", "Voyante", "Voyante Bavarde", "Sorcière", "Assassin", "Jour", "Chasseur", "Vote"];

module.exports = {

    jour_1_display: function(){
        return "" + jour_1;
    },

    reset: function(){
        timer = 0;
        pause = 0;
        moment = "Start";
        ancien_moment = "Rien";
    },

    reset_timer: function(){
        timer = 0;
    },

    reset_pause: function(){
        pause = 0;
    },

    ex_moment: function(moment){
        ancien_moment = "" + moment;
    },

    moment_change: function(event){
        moment = "" + event;
    },

    reset_moment: function(){
        moment = "Start";
    },

    finish: function(){
        timer = 280;
    },

    finish_chasseur: function(){
        timer = 28;
    },

    start: function(){
        moment = "Nuit";
        timer = 0;
    },

    end: function(){
        timer = 0;
        pause = 1;
        moment = "End";
    },

    pass_event: function (){
        var n = events.length;
        var find = false;
        var i = 0;
        while (i < n && find == false){
            if ("" + events[i] == "" + moment){
                moment = "" + events[i+1];
                find = true;
                timer = 0;
            }
            else {
                i += 1;
            }    
        }
    },

    plus_seconde: function (){
        if (pause == 0){
            if ("" + moment == "Nuit"){
                var i = 1;
                if (timer == 10){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        }
                    }                    
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Jour"){
                var i = 12;
                if (timer == 3){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Vote"){
                            find = true;
                            moment = "Vote";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        }
                    }                    
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Cupidon"){
                var i = 3;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Enfant Sauvage"){
                var i = 4;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Salvateur"){
                var i = 5;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Loup-Garou"){
                var i = 6;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    }
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Loup-Garou Blanc"){
                var i = 7;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    }
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Voyante"){
                var i = 8;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Voyante Bavarde"){
                var i = 9;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Sorcière"){
                var i = 10;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Assassin"){
                var i = 11;
                if (timer == 45){
                    var n = events.length;
                    var find = false;
                    while (i < n && find == false){
                        if ("" + events[i] == "Jour"){
                            find = true;
                            moment = "Jour";
                            timer = 0;
                        }
                        else if ((rolest.presence_role("" + events[i]) && events[i] != "Cupidon") || ((rolest.presence_role("" + events[i]) && events[i] == "Cupidon" && jour_1 == "on"))){
                            find = true;
                            moment = "" + events[i];
                            timer = 0;
                        }
                        else {
                            i += 1;
                        } 
                    } 
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Chasseur"){
                if (timer == 30){
                    moment = "Vote";
                    timer = 0;
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Chasseur 2"){
                if (timer == 30){
                    moment = "Cupidon";
                    timer = 0;
                }
                else {
                    timer += 1;
                }
            }
            if ("" + moment == "Vote"){
                var i = 0;
                if (timer == 300){
                    moment = "Nuit";
                    timer = 0;
                }
                else {
                    timer += 1;
                }
            }
        }
    },

    timer: function(){
        return timer;
    },

    pause: function(){
        pause = 1;
    },

    play: function(){
        pause = 0;
    },
    
    pause_display: function(){
        return pause;
    },

    moment_display: function(){
        return moment;
    },
};