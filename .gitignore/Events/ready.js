module.exports = async(client) => {

    client.user.setPresence({
        game: {
            name : "Nouveau bot - Hogwarts"
        }
    })
};