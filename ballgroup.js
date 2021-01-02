import { Ball } from './ball.js';

export class BallGroup  {
  constructor(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeigth = stageHeight;
    this.totalBalls = 5;
    this.color = ['rgba(0,199,235,0.4)', 'rgba(0,146,199,0.4)', 'rgba(0,87,158,0.4)',
    'rgba(255,255,255,0.4)', 'rgba(0,109,255,0.4)', 'rgba(0,186,219,0.4)']

    this.radius = 50;

    this.balls = [];
    this.speed = 3;

    for(let i = 0; i < this.totalBalls; i++) {
      const ball = new Ball(
        this.totalBalls, this.stageWidth, this.stageHeigth, this.radius, this.speed, this.color[i]
      );
      this.balls[i] = ball;
    }
  }

  draw(ctx, stageWidth, stageHeight, block) {
    for(let i = 0; i < this.totalBalls; i++) {
      const ball = this.balls[i];
      ball.draw(ctx, stageWidth, stageHeight, block);
    }
  }
}