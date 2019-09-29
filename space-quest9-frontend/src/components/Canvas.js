import React from 'react';
import Konva from 'konva';
import { Stage, Layer, Ellipse, Circle, Path } from 'react-konva';
import styled from 'styled-components';

const RoomPaths = props => {
  const flightPath=(context, shape) => {
    context.beginPath();
    context.moveTo(props.points[0], props.points[1]);
    context.lineTo(props.points[2], props.points[3]);
    // (!) Konva specific method, it is very important
    context.fillStrokeShape(shape);
  }
  return <Path {...props} sceneFunc={flightPath} />
}

const Canvas = props => {

  const pointList = [];

  props.vertices.map(location => { 
    pointList.push(location.x) 
    pointList.push(location.y)
  })

  let part = []
  let j = 0;
  for(let i = 0; i <= pointList.length; i++){
    while ( j <= pointList.length-1) {
      part.push([pointList[j], pointList[j+1], pointList[j+2], pointList[j+3]])
      j = j + 2
    }
    if(i+1 === pointList.length-1) {      // Specific for Lyrae Constellation. Can be removed for others to work.
      part.push([pointList[pointList.length - 2], pointList[pointList.length - 1], pointList[4], pointList[5]]);
    }
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight/2 + 200}>
      <Layer>
        {part.map((point, i) => {
          return(
            <RoomPaths
              key={i}
              stroke="white"
              strokeWidth={.5}
              shadowColor="white"
              shadowBlur={9}
              shadowOpacity={2}
              points={point}
            />
            )
          })
        }
        
        {props.vertices.map((point, i) => {
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