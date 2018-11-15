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
        this.ctx.font = "140px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Asteroids", this.canvas.width / 2, 150);
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("PRESS PLAY TO START", this.canvas.width / 2, this.canvas.height / 2 - 20);
        let buttonElement = document.createElement("img");
        buttonElement.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png";
        buttonElement.addEventListener("load", () => {
            this.ctx.drawImage(buttonElement, this.canvas.width / 2 - 111, this.canvas.height / 2 + 219);
            this.ctx.font = "20px Minecraft";
            this.ctx.fillStyle = "black";
            this.ctx.fillText("Play", this.canvas.width / 2, this.canvas.height / 2 + 245);
        });
        let asteroidElement = document.createElement("img");
        asteroidElement.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        asteroidElement.addEventListener("load", () => {
            this.ctx.drawImage(asteroidElement, this.canvas.width / 2 - 50, this.canvas.height / 2 + 40);
        });
    }
    level_screen() {
        const lifeImagePath = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        let xCoor = 70;
        for (let i = 0; i < this.lives; i++) {
            let element = document.createElement("img");
            element.src = lifeImagePath;
            element.addEventListener("load", () => {
                xCoor += 40;
                this.ctx.drawImage(element, xCoor, 50);
            });
        }
        this.ctx.font = "20px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "right";
        this.ctx.fillText(`Score: ${this.score}`, this.canvas.width - 50, 65);
        const asteroids = [
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big4.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med3.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_small2.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny1.png",
            "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_tiny2.png",
        ];
        const maxAsteroidsOnScreen = 5;
        for (let i = 0; i < maxAsteroidsOnScreen; i++) {
            const index = this.randomNumber(0, asteroids.length);
            let element = document.createElement("img");
            element.src = asteroids[index];
            element.addEventListener("load", () => {
                this.ctx.drawImage(element, this.randomNumber(0, this.canvas.width), this.randomNumber(0, this.canvas.height));
            });
        }
        let element = document.createElement("img");
        element.src = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        console.log(element);
        element.addEventListener("load", () => {
            this.ctx.drawImage(element, this.canvas.width / 2 - 50, this.canvas.height / 2 - 37);
        });
    }
    title_screen() {
        this.ctx.font = "80px Minecraft";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`${this.player} score is ${this.score}`, this.canvas.width / 2, this.canvas.height / 2 - 100);
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("HIGHSCORES", this.canvas.width / 2, this.canvas.height / 2);
        let yCoord = this.canvas.height / 2;
        this.highscores.forEach((element, index) => {
            yCoord += 40;
            this.ctx.font = "20px Minecraft";
            this.ctx.fillText(`${index + 1}: ${element.playerName} - ${element.score}`, this.canvas.width / 2, yCoord);
        });
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
let init = function () {
    const Asteroids = new Game(document.getElementById('canvas'));
};
window.addEventListener('load', init);
//# sourceMappingURL=app.js.map