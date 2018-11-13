class Game {
    constructor(canvasId) {
        this.player = "Player1";
        this.score = 400;
        this.lives = 3;
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext('2d');
        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ];
        this.start_screen();
    }
    start_screen() {
        this.text("white", 100, "center", "ASTEROIDS", this.canvas.width / 2, this.canvas.height / 2);
        this.text("white", 30, "center", "PRESS START TO PLAY!", this.canvas.width / 2, this.canvas.height / 1.7);
        this.addStartButton();
        this.addSpaceShipImage();
    }
    addStartButton() {
        let button = new Image();
        button.src = 'assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';
        button.onload = () => {
            this.ctx.drawImage(button, this.canvas.width / 2 - 110, this.canvas.height / 1.26);
            this.ctx.fillStyle = "black";
            this.ctx.font = "25px minecraft";
            this.ctx.textAlign = "center";
            this.ctx.fillText("START", this.canvas.width / 2, this.canvas.height / 1.2);
            this.canvas.addEventListener('click', (evt) => this.eventHandler(evt));
        };
    }
    eventHandler(event) {
        const buttonX = this.canvas.width / 2 - 110;
        const buttonY = this.canvas.height / 1.26;
        const buttonW = 222;
        const buttonH = 39;
        if (event.x > buttonX &&
            event.x < buttonX + buttonW &&
            event.y > buttonY &&
            event.y < buttonY + buttonH) {
            console.log(event);
            this.level_screen();
        }
    }
    addSpaceShipImage() {
        let spaceShip = new Image();
        spaceShip.src = 'assets/images/SpaceShooterRedux/PNG/playerShip1_red.png';
        spaceShip.onload = () => {
            this.ctx.drawImage(spaceShip, this.canvas.width / 2 - 50, this.canvas.height / 1.75 + 50);
        };
    }
    level_screen() {
        this.clearScreen();
        this.addSpaceShipLifes();
        this.text("white", 20, "right", "Your Score: 400", this.canvas.width / 1.1, this.canvas.height / 15);
        this.addRandomAsteroids();
        this.addSpaceShipImage2();
    }
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    addSpaceShipLifes() {
        let shipLife = new Image();
        shipLife.src = 'assets/images/SpaceShooterRedux/PNG/UI/playerLife1_red.png';
        shipLife.onload = () => {
            this.ctx.drawImage(shipLife, this.canvas.width / 20, this.canvas.height / 20);
            this.ctx.drawImage(shipLife, this.canvas.width / 12.5, this.canvas.height / 20);
            this.ctx.drawImage(shipLife, this.canvas.width / 9.1, this.canvas.height / 20);
        };
    }
    addRandomAsteroids() {
        const asteroidPictures = ['meteorBrown_big1', 'meteorBrown_big2', 'meteorBrown_big3', 'meteorBrown_big4', 'meteorBrown_med1', 'meteorBrown_med3', 'meteorBrown_small1', 'meteorBrown_small2', 'meteorBrown_tiny1', 'meteorBrown_tiny2',
            'meteorGrey_big1', 'meteorGrey_big2', 'meteorGrey_big3', 'meteorGrey_big4', 'meteorGrey_med1', 'meteorGrey_med2', 'meteorGrey_small1', 'meteorGrey_small2', 'meteorGrey_tiny1', 'meteorGrey_tiny2'];
        const amountAstroid = this.randomNumber(0, 5);
        for (let i = 0; i < amountAstroid; i++) {
            const randomWidthPLace = this.randomNumber(this.canvas.width - this.canvas.width, this.canvas.width);
            const randomHeightPLace = this.randomNumber(this.canvas.height - this.canvas.height, this.canvas.height);
            const randomAsteroid = this.randomNumber(0, asteroidPictures.length - 1);
            const randomAsteroidPicture = (asteroidPictures[randomAsteroid]);
            const astroidImage = new Image;
            astroidImage.addEventListener('load', () => {
                this.ctx.drawImage(astroidImage, randomWidthPLace, randomHeightPLace);
            });
            astroidImage.src = `./assets/images/SpaceShooterRedux/PNG/Meteors/${randomAsteroidPicture}.png`;
        }
    }
    addSpaceShipImage2() {
        let spaceShip = new Image();
        spaceShip.src = 'assets/images/SpaceShooterRedux/PNG/playerShip1_red.png';
        spaceShip.onload = () => {
            this.ctx.drawImage(spaceShip, this.canvas.width / 2, this.canvas.height / 2);
        };
    }
    title_screen() {
        this.text("white", 60, "center", "YOUR SCORE IS 400!", this.canvas.width / 2, this.canvas.height / 3);
        this.text("white", 40, "center", "HIGHSCORE", this.canvas.width / 2, this.canvas.height / 1.9);
        this.text("white", 20, "center", "1. Loek - 40000", this.canvas.width / 2, this.canvas.height / 1.7);
        this.text("white", 20, "center", "2. Daan - 20000", this.canvas.width / 2, this.canvas.height / 1.5);
        this.text("white", 20, "center", "3. Rimmert - 200", this.canvas.width / 2, this.canvas.height / 1.35);
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    text(color, fontSize, textAlign, text, X, Y) {
        this.ctx.fillStyle = color;
        this.ctx.font = `${fontSize}px minecraft`;
        this.ctx.textAlign = textAlign;
        this.ctx.fillText(text, X, Y);
    }
}
let init = function () {
    const Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map