import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Shape, Ellipse, Circle } from 'react-konva';
import styled from 'styled-components';

const RoomPaths = props => {
  const flightPath=(context, shape) => {
    context.beginPath();
    context.moveTo(100, 50);
    context.lineTo(props.points[0], props.points[1]);
    context.lineTo(props.points[2], props.points[3]);
    context.lineTo(props.points[4], props.points[5]);
    context.lineTo(props.points[6], props.points[7]);
    // context.quadraticCurveTo(props.points[0], props.points[1], props.points[2], props.points[3], props.points[4], props.points[5],  props.points[6],  props.points[7]);
    // context.closePath();
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  }
  return <Shape {...props} sceneFunc={flightPath} />
}
function Canvas(props) {
   
  console.log("State: ", props.info)
  
  return (
    <Stage width={window.innerWidth} height={window.innerHeight/2 + 200}>
      <Layer>
        {/* <Shape   NOT THIS ONE
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(200, 50);
            context.lineTo(220, 80);
            context.quadraticCurveTo(150, 100, 260, 170);
            context.closePath();
            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape);
          }}
          // fill="#00D2FF"
          stroke="white"
          strokeWidth={1}
        /> */}
        <RoomPaths
          stroke="white"
          strokeWidth={.5}
          shadowColor="white"
          shadowBlur={9}
          shadowOpacity={2}
          points={[58.4,86.36, 62.4, 421.36, 81.4, 71.36, 61.4, 51.36]} //Need to connect vertices to this
        />
        {props.vertices[0].map( point => {
          return(
            <Ellipse 
              x={point.x}
              y={point.y}
              radiusX={5}
              radiusY={5}
              fill='white'
              stroke='white'
              strokeWidth={0}
              shadowBlur={8}
              shadowColor='white'
            />
            )
          })
        }
        <Ellipse
          name="player1" 
          x={props.info.location["x"]}
          y={props.info.location["y"]}
          translate={props.info.location["x"], props.info.location["y"]}
          duration={0.5}
          radiusX={5}
          radiusY={5}
          fill='yellow'
          stroke='white'
          strokeWidth={0}
          shadowBlur={8}
          shadowColor='white'
          move
        />
      </Layer>
    </Stage>
  );
}

export default Canvas