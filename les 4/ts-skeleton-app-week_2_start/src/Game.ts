class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement; // find the right type
    private readonly ctx: CanvasRenderingContext2D; // find the right type

    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!

    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
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
        ]

        // all screens: uncomment to activate comment to deactivate
        this.start_screen();
        // this.level_screen();
        // this.title_screen();

    }

    //-------- Splash screen methods ------------------------------------
    /**
     * Function to initialize the splash screen
     */
    public start_screen() {
        //1. add 'Asteroids' text
        this.text("white", 100, "center", "ASTEROIDS", this.canvas.width / 2, this.canvas.height / 2)
        //2. add 'Press to play' text
        this.text("white", 30, "center", "PRESS START TO PLAY!", this.canvas.width / 2, this.canvas.height / 1.7)
        //3. add button with 'start' text
        this.addStartButton()
        //4. add Asteroid image
        this.addSpaceShipImage()
    }

    public addStartButton() {
        let button = new Image();
        button.src = 'assets/images/SpaceShooterRedux/PNG/UI/buttonBlue.png';
        button.onload = () => {
            this.ctx.drawImage(button, this.canvas.width / 2 - 110, this.canvas.height / 1.26);
            this.ctx.fillStyle = "black";
            this.ctx.font = "25px minecraft";
            this.ctx.textAlign = "center";
            this.ctx.fillText("START", this.canvas.width / 2, this.canvas.height / 1.2);

            // activate eventhandler when start button is clicked
            this.canvas.addEventListener('click', (evt) => this.eventHandler(evt));
        };
    }

    // load level_screen when activated 
    public eventHandler(event: MouseEvent) {
        const buttonX = this.canvas.width / 2 - 110;
        const buttonY = this.canvas.height / 1.26;
        const buttonW = 222;
        const buttonH = 39;

        if (
            event.x > buttonX &&
            event.x < buttonX + buttonW &&
            event.y > buttonY &&
            event.y < buttonY + buttonH
        ) {
            // Executes if button was clicked!
            console.log(event);
            this.level_screen();

        }
    }

    public addSpaceShipImage() {
        let spaceShip = new Image();
        spaceShip.src = 'assets/images/SpaceShooterRedux/PNG/playerShip1_red.png';
        spaceShip.onload = () => {
            this.ctx.drawImage(spaceShip, this.canvas.width / 2 - 50, this.canvas.height / 1.75 + 50);
        };
    }

    //-------- level screen methods -------------------------------------
    /**
     * Function to initialize the level screen
     */
    public level_screen() {
        // clears previous canvas
        this.clearScreen();
        //1. load life images
        this.addSpaceShipLifes()
        //2. draw current score
        this.text("white", 20, "right", "Your Score: 400", this.canvas.width / 1.1, this.canvas.height / 15)
        //3. draw random asteroids
        this.addRandomAsteroids()
        //4. draw player spaceship
        this.addSpaceShipImage2()
    }

    // clears previous canvas
    public clearScreen() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public addSpaceShipLifes() {
        let shipLife = new Image();
        shipLife.src = 'assets/images/SpaceShooterRedux/PNG/UI/playerLife1_red.png';
        shipLife.onload = () => {
            this.ctx.drawImage(shipLife, this.canvas.width / 20, this.canvas.height / 20);
            this.ctx.drawImage(shipLife, this.canvas.width / 12.5, this.canvas.height / 20);
            this.ctx.drawImage(shipLife, this.canvas.width / 9.1, this.canvas.height / 20);
        };
    }

    public addRandomAsteroids() {
        const asteroidPictures = ['meteorBrown_big1', 'meteorBrown_big2', 'meteorBrown_big3', 'meteorBrown_big4', 'meteorBrown_med1', 'meteorBrown_med3', 'meteorBrown_small1', 'meteorBrown_small2', 'meteorBrown_tiny1', 'meteorBrown_tiny2',
            'meteorGrey_big1', 'meteorGrey_big2', 'meteorGrey_big3', 'meteorGrey_big4', 'meteorGrey_med1', 'meteorGrey_med2', 'meteorGrey_small1', 'meteorGrey_small2', 'meteorGrey_tiny1', 'meteorGrey_tiny2']
        const amountAstroid = this.randomNumber(0, 5)
        for (let i = 0; i < amountAstroid; i++) {
            const randomWidthPLace = this.randomNumber(this.canvas.width - this.canvas.width, this.canvas.width);
            const randomHeightPLace = this.randomNumber(this.canvas.height - this.canvas.height, this.canvas.height);
            const randomAsteroid = this.randomNumber(0, asteroidPictures.length - 1);
            const randomAsteroidPicture = (asteroidPictures[randomAsteroid]);
            const astroidImage = new Image
            astroidImage.addEventListener('load', () => {
                this.ctx.drawImage(astroidImage, randomWidthPLace, randomHeightPLace);
            });
            astroidImage.src = `./assets/images/SpaceShooterRedux/PNG/Meteors/${randomAsteroidPicture}.png`;
        }
    }

    public addSpaceShipImage2() {
        let spaceShip = new Image();
        spaceShip.src = 'assets/images/SpaceShooterRedux/PNG/playerShip1_red.png';
        spaceShip.onload = () => {
            this.ctx.drawImage(spaceShip, this.canvas.width / 2, this.canvas.height / 2);
        };
    }

    //-------- Title screen methods -------------------------------------
    /**
    * Function to initialize the title screen   
    */
    public title_screen() {
        //1. draw your score
        this.text("white", 60, "center", "YOUR SCORE IS 400!", this.canvas.width / 2, this.canvas.height / 3)
        //2. draw all highscores
        this.text("white", 40, "center", "HIGHSCORE", this.canvas.width / 2, this.canvas.height / 1.9)
        this.text("white", 20, "center", "1. Loek - 40000", this.canvas.width / 2, this.canvas.height / 1.7)
        this.text("white", 20, "center", "2. Daan - 20000", this.canvas.width / 2, this.canvas.height / 1.5)
        this.text("white", 20, "center", "3. Rimmert - 200", this.canvas.width / 2, this.canvas.height / 1.35)
    }

    //-------Generic canvas functions ----------------------------------
    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

    public text(color: string, fontSize: number, textAlign: CanvasTextAlign, text: string, X: number, Y: number) {
        this.ctx.fillStyle = color;
        this.ctx.font = `${fontSize}px minecraft`;
        this.ctx.textAlign = textAlign;
        this.ctx.fillText(text, X, Y);
    }

}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};
//add loadlistener for custom font types
window.addEventListener('load', init);
