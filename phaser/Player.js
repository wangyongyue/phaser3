function Player(){

    var player;

    var cursors;
    this.load = function(game){

        player = game.physics.add.sprite(100, 450, 'dude');
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);


        game.anims.create({
        key: 'left',
        frames: game.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
        });

        game.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        game.anims.create({
            key: 'right',
            frames: game.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });


        //  Input Events   输入事件 
        cursors = game.input.keyboard.createCursorKeys();  

    }
    this.obj = function(){

        return player;
    }
    
    this.hit = function(obj1,obj2){


       player.setTint(0xff0000);

       player.anims.play('turn');


    }
    this.update = function(){

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);

            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }

    }
      
}