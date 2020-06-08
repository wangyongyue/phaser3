function startGame(pre,scene,player,star,bomb,action,score){

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var gameOver = false;
    var game = new Phaser.Game(config);
    function preload ()
    {
        pre.load(this);
    }
    function update ()
    {
        if (gameOver){return;}

        action.left(() => {
            player.left();
        })
        action.right(() => {
            player.right();
        })
        action.up(() => {
            player.up();
        })
        action.stop(() => {
            player.stop();
        })


    }
    function create ()
    {
        scene.load(this);
        player.load(this);
        star.load(this);
        bomb.load(this);
        score.load(this);
        action.load(this);

        //将玩家和星星与平台碰撞
        this.physics.add.collider(player.obj(), scene.obj());
        this.physics.add.collider(star.obj(), scene.obj());
        this.physics.add.collider(bomb.obj(), scene.obj());


        this.physics.add.overlap(player.obj(), star.obj(), function(obj1,obj2){
            score.hit(obj1,obj2);
            star.hit(obj1,obj2);
            bomb.hit(obj1,star);

        }, null, this);


        this.physics.add.collider(player.obj(), bomb.obj(), function(obj1,obj2){

            player.hit(obj1,obj2);
            this.physics.pause();
            gameOver = true;

        }, null, this);
    }

}