import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Shape, Ellipse, Circle } from 'react-konva';
import styled from 'styled-components';

const RoomPaths = props => {
  const flightPath=(context, shape) => {
    context.beginPath();
    context.moveTo(100, 50);

    for(let i = 0; i < props.points.length-1; i++) {
      // console.log(props.points[i], props.points[i+1])
      context.lineTo(props.points[i], props.points[i+1]);
    }
    // context.quadraticCurveTo(props.points[0], props.points[1], props.points[2], props.points[3], props.points[4], props.points[5],  props.points[6],  props.points[7]);
    // context.closePath();
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  }
  return <Shape {...props} sceneFunc={flightPath} />
}

function Canvas(props) {
   
  console.log("State: ", props.vertices)

  const pointList = []

  props.vertices[0].map(location => { 
    pointList.push(location.x) 
    pointList.push(location.y)
  })
  
  return (
    <Stage width={window.innerWidth} height={window.innerHeight/2 + 200}>
      <Layer>
        <RoomPaths
          stroke="white"
          strokeWidth={.5}
          shadowColor="white"
          shadowBlur={9}
          shadowOpacity={2}
          points={pointList}
        />
        {props.vertices[0].map((point, i) => {
          return(
            <Ellipse 
              key={i}
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