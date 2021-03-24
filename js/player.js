class Player{
    constructor(){

    }
    updateCount(count){

        database.ref('/').update({
            playerCount : count
        })
    }
    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value",function(data){

            playerCount = data.val();
        })
    }
    update(dummyname){

        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({

            name : dummyname
        })

        
        
    }
}