/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, width, height) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.width = width;
    this.height = height;

    this.getHeroElement = function () {
        return '<img width="' + this.width + '"' +
            ' height="' + this.height + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function (speed) {
        this.left += speed;
        console.log('ok: ' + this.left);
    }
    this.moveDown = function (speed) {
        this.top += speed;
    }
    this.moveLeft = function (speed) {
        this.left -= speed;
    }
    this.moveUp = function (speed) {
        this.top -= speed;
    }

}

let hero = new Hero('cat.png', 200, 700, 200, 300);

function start() {
    let random = Math.floor(Math.random() * 4 + 1);
    switch (random) {
        case 1:
            if (hero.top > 0)
                hero.moveUp(globalSpeed);
            break;
        case 2:
            if (hero.left < window.innerWidth - hero.width)
                hero.moveRight(globalSpeed);
            break;
        case 3:
            if (hero.top < window.innerHeight - hero.height)
                hero.moveDown(globalSpeed);
            break;
        case 4:
            if (hero.left > 0)
                hero.moveLeft(globalSpeed);
            break;

    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 200)
}

let globalSpeed = 50
start();