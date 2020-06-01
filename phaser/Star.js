function Star(){
    var stars;
    this.load = function(game){
        stars = game.physics.add.group({
            key: 'star',
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });

        stars.children.iterate(function (child) {

        //  Give each star a slightly different bounce  给每颗恒星一个稍微不同的反弹 
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));

        });


    }
    this.obj = function(){

        return stars;
    }
    this.hit = function(obj1,obj2){

        obj2.disableBody(true, true);

        if (stars.countActive(true) === 0){

            stars.children.iterate(function (child) {

                child.enableBody(true, child.x, 0, true, true);

            });

        }

    }
}