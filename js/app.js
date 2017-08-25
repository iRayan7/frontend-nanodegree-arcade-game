var TILE_WIDTH = 101, TILE_HEIGHT = 83;
// Enemies our player must avoid
var Enemy = function (y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -200;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if ((this.x > player1.x - 85 && this.x < player1.x + 85) && this.y > player1.y - 50 && this.y < player1.y + 50) {
        player1.x = 202;
        player1.y = 404;
    }

    if (this.x > 700)
        this.x = -200;
    this.x = this.x + (this.speed * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {

    this.sprite = "images/char-boy.png";
    this.x = 101;
    this.y = 404;
};

Player.prototype.update = function (dt) {

    this.x = 50;
    this.y = 50;

};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now instantiate your objects.
var player1 = new Player();
var enemy1 = new Enemy(60, 200);
var enemy2 = new Enemy(145, 100);
var enemy3 = new Enemy(230, 300);


// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];

// Place the player object in a variable called player
var player = player1;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

Player.prototype.handleInput = function (keyCode) {
    if (keyCode === 'left') {
        if (this.x - TILE_WIDTH > -100)
            this.x -= TILE_WIDTH;
    } else if (keyCode === 'right') {
        if (this.x + TILE_WIDTH < 504)
            this.x += TILE_WIDTH;
    } else if (keyCode === 'up') {
        if (this.y - TILE_HEIGHT > 0)
            this.y -= TILE_HEIGHT;
        else {
            this.y = 404;
            this.x = 202;
        }
    } else if (keyCode === 'down') {
        if (this.y + TILE_HEIGHT < 406)
            this.y += TILE_HEIGHT;
    }
};