const Discord = require('discord.js');

var description = [["Simple Villageois", "Son objectif est d'éliminer tous les Loups-Garous. Il ne dispose d'aucun pouvoir particulier : uniquement sa perspicacité et sa force de persuasion."], 
["Loup-Garou", "Son objectif est d'éliminer tous les innocents. Chaque nuit, il se réunit avec ses compères Loups pour décider d'une victime à éliminer..." + "\n" + "Pour manger quelqu'un : **/lgp eat nom_de_jeu**"],
["Voyante", "Son objectif est d'éliminer tous les Loups-Garous. Chaque nuit, elle peut espionner un joueur et découvrir sa véritable identité..." + "\n" + "Pour voir le rôle de quelqu'un : **/lgp see nom_de_jeu**"],
["Voyante Bavarde", "Son objectif est d'éliminer tous les Loups-Garous. Chaque nuit, elle peut espionner un joueur et découvrir sa véritable identité, et révèle le rôle trouvé à tout le Village.." + "\n" + "Pour voir le rôle de quelqu'un : **/lgp see nom_de_jeu**"],
["Sorcière", "Son objectif est d'éliminer tous les Loups-Garous. Elle dispose de deux potions : une potion de vie pour sauver la victime des Loups, et une potion de mort pour assassiner quelqu'un." + "\n" + "Pour sauver quelqu'un : **/lgp save** et pour tuer quelqu'un : **/lgp kill**"],
["Cupidon", "Son objectif est d'éliminer tous les Loups-Garous. Dès le début de la partie, il doit former un couple de deux joueurs. Leur objectif sera de survivre ensemble, car si l'un d'eux meurt, l'autre se suicidera." + "\n" + "Pour choisir le coupe : **/lgp love nom_de_jeu_1 nom_de_jeu_2**"],
["Chasseur", "Son objectif est d'éliminer tous les Loups-Garous. A sa mort, il doit éliminer un joueur en utilisant sa dernière balle..." + "\n" + "Pour tirer sur quelqu'un : **/lgp shoot nom_de_jeu**"],
["Assassin", "Son objectif est de terminer SEUL la partie. Pour cela il peut choisir de poignarder un joueur chaque nuit." + "\n" + "Pour poignarder quelqu'un : **/lgp murder nom_de_jeu**"],
["Salvateur", "Son objectif est d'éliminer tous les Loups-Garous. Chaque nuit, il peut protéger quelqu'un de l'attaque des Loups-Garous..." + "\n" + "Pour protéger quelqu'un : **/lgp protect nom_de_jeu**"],
["Ancien", "Son objectif est d'éliminer tous les Loups-Garous. Il peut résister à la première attaque des loups."],
["Enfant Sauvage", "Son objectif est d'éliminer tous les Loups-Garous. Il choisit un modèle au début du jeu, si ce dernier meurt, il devient Loup-Garou et joue dans leur camp." + "\n" + "Pour choisir quelqu'un en modèle : **/lgp model nom_de_jeu**"],
["Loup-Garou Blanc", "Son objectif est de terminer SEUL la partie. Les autres Loups-Garous croient qu'il est un loup normal, mais une nuit sur deux il peut assassiner un loup de son choix..." + "\n" + "Pour choisir quelqu'un en modèle : **/lgp white_eat nom_de_jeu**"]];
//[Role, Nombre]

module.exports = {

    search_desc: function(role){
        res = "";
        var i = 0;
        var n = description.length;
        var find = false;
        while (i < n && find == false){
            if ("" + role == description[i][0]){
                find = true;
                res = "" + description[i][1];
            }
            else {
                i += 1;
            }
        }
        return res;
    }
}