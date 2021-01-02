import { BallGroup } from './ballgroup.js';
import { Block } from './block.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.block = new Block(700, 30, 300, 450);
    this.ballGroup = new BallGroup(this.stageWidth, this.stageHeight);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;
    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight);

    this.block.draw(this.ctx);
    this.ballGroup.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
  }

}

window.onload = () => {
  new App();
}