const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');
const Color = require('canvas-sketch-util/color');
const risoColors = require('riso-colors');

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#8e595a';
    context.fillRect(0, 0, width, height);

    context.save();
    parcelMaker(context, 50, 50, 10)
    ctx.restore();
    
  };
};

const parcelMaker = (ctx, x, y, a) => {
  ctx.save();
  ctx.fillStyle = random.pick(risoColors).hex;
  ctx.fillRect();
  ctx.restore();
}

canvasSketch(sketch, settings);
