function Bomb(){
    var bombs;
    this.load = function(game){
        bombs = game.physics.add.group();
    }
    this.obj = function(){

    	return bombs;
    }

    this.hit = function(obj1,obj2){

                console.log(obj2.obj().countActive(true));

    	if (obj2.obj().countActive(true) === 12)
           {

                var x = (obj1.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

                var bomb = bombs.create(x, 16, 'bomb');
                bomb.setBounce(1);
                bomb.setCollideWorldBounds(true);
                bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
                bomb.allowGravity = false;

            }

    }
}