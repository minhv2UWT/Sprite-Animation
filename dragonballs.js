class DragonBalls {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./DragonBalls.png"), 3, 0, 35, 55, 5, 0.2);
        this.x = 10;
        this.y = 100;
        this.speed =  300;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x = -20;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}