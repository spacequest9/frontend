import React, { Component } from 'react';
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
class Canvas extends Component {
  state = {
    location: {
      x: 300,
      y: 50,
    },
    neighbors: {

    }
  }

  vertices = [
    {
      x: 200,
      y: 100
    },
    {
      x: 100,
      y: 100
    },
    {
      x: 200,
      y: 300
    },
    {
      x: 350,
      y: 70
    },
    {
      x: 300,
      y: 230
    }
  ]

  flyTo = direction => {
    console.log(direction)
    console.log(this.state)
    // if (this.vertices[0]){
      if (direction === "up"){
        this.setState({ location: {
          x: 50,
          y: 100,
        }
        })
      }
    // }
  }
  
  render() {
    const Button = styled.div`
      border: 1px solid white;
      `
      console.log(this.state)
    
    return (
      <>
      <Stage width={window.innerWidth} height={window.innerHeight/2 + 200}>
        <Layer>
          {/* <Shape
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
            points={[58.4,86.36, 62.4, 421.36, 81.4, 71.36, 61.4, 51.36]}
          />
          {this.vertices.map( point => {
            return(
              <Ellipse 
                x={point.x}
                y={point.x}
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
            x={this.state.location["x"]}
            y={this.state.location["y"]}
            translate={this.state.location["x"], this.state.location["y"]}
            duration={0.5}
            radiusX={5}
            radiusY={5}
            fill='red'
            stroke='white'
            strokeWidth={0}
            shadowBlur={8}
            shadowColor='white'
            move
          />
        </Layer>
      </Stage>
      <Button className="console" onClick={() => this.flyTo("up")}> 
        UP
      </Button>
      <Button className="console" onClick={() => this.flyTo("down")}>
        DOWN
      </Button>
      </>
    );
  }
}

export default Canvas