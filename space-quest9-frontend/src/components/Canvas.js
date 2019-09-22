import React, { Component } from 'react';
import Konva from 'konva';
import { Stage, Layer, Shape, Ellipse, Circle } from 'react-konva';

class Canvas extends Component {
  state = {
    fill: 'lightblue',
    stroke: 'redorange'
  }

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight/2 + 200}>
        <Layer>
          {/* <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(20, 50);
              context.lineTo(220, 80);
              context.quadraticCurveTo(150, 100, 260, 170);
              context.closePath();
              // (!) Konva specific method, it is very important
              context.fillStrokeShape(shape);
            }}
            fill="#00D2FF"
            stroke="black"
            strokeWidth={4}
          /> */}
          <Ellipse
            x={200}
            y={100}
            radiusX={5}
            radiusY={5}
            fill='white'
            stroke='white'
            strokeWidth={0}
            shadowBlur={8}
            shadowColor='white'
          />
        </Layer>
      </Stage>
    );
  }
}

export default Canvas