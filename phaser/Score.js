function Score(game){
    var scoreText;
    var number = 0;
    this.load = function(game){

        scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    }
    this.hit = function(obj1,obj2){

        number += 10;
    	scoreText.setText('Score: ' + number);
    }
}