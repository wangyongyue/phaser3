function Action(){

    var cursors;
    this.load = function(game){

         cursors = game.input.keyboard.createCursorKeys();  
    }
    this.left = function(callBack){

        if (cursors.left.isDown)
        {
            callBack();
        }

    }
    this.right = function(callBack){

        if (cursors.right.isDown)
        {
            callBack();
        }

    }
    this.up = function(callBack){

        if (cursors.up.isDown)
        {
            callBack();
        }


    }
    this.stop = function(callBack){

        if (cursors.left.isDown){
        }else if (cursors.right.isDown){
        }else{
          callBack();
        }
    }
    
      
}