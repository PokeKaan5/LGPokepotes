const Discord = require('discord.js');
var roles = require('../roles.js');
var players = require('../players.js');
var time = require('../time.js');

module.exports.run = async(client, message, args) => {

    let lg = message.guild.roles.cache.get("715985590264529007");
    let normal = message.guild.roles.cache.get("674970506985996308");
    let maitre = message.guild.roles.cache.get("716604775403094027");
    let specta = message.guild.roles.cache.get("685144396638846997");
    let power_moment = message.guild.roles.cache.get("716968539159789609");

    if(args.length == 0 && (players.is_mj(message.author) || message.member.roles.cache.some(r => r.name === "Host"))){
        message.delete();
        var liste = players.mega_liste();
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
        var liste = players.mj_liste();
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
        players.reset();
        roles.reset_roles();
        time.reset();       
        message.channel.send("`La partie vient d'être redémarrée`");
    }
};

module.exports.help = {
    name : "reset"
}