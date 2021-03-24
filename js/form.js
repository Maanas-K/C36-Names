class Form {
    constructor(){

    }
    display(){
        var title= createElement('h2')
        title.html("Car Racing")
        title.position(250,100)

        var input = createInput("Enter name")
        input.position(250,300)

        var button = createButton("Play!!")
        button.position(350,350)

        button.mousePressed(function(){

            input.hide();
            button.hide();

           var name=  input.value();
           playerCount ++;

           player.update(name)
           player.updateCount(playerCount)

           var greeting = createElement("Hi"+name)
           greeting.position(500,250)
        })
    }

}