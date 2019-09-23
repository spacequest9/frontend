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
      to_n: 0,
      to_s: 1,
      to_e: 2,
      to_w: 3
    }
  }

  rooms = [
    {
      name: 'Sector 1',
      description: 'Bright and green',
      x: 400,
      y: 300,
      to_n: 1,
      to_s: 2,
      to_e: null,
      to_w: 1
    },
    {
      name: 'Sector 2',
      description: 'Bright and green',
      x: 100,
      y: 200,
      to_n: 2,
      to_s: 2,
      to_e: 0,
      to_w: null
    },
    {
      name: 'Sector 3',
      description: 'Bright and green',
      x: 300,
      y: 300,
      to_n: 0,
      to_s: 1,
      to_e: 0,
      to_w: 1
    }
  ]

  // Map over the vertices with the location points from each room in room array
  // vertices = []
  // vertices = this.rooms.map(location => {
  //   const newVertices = []
  //   newVertices.push({'x': location.x, 'y': location.y})
  //   return newVertices
  // })
  
  vertices = [
    this.rooms.map(location => {
    // const newVertices = []
    // newVertices.push({'x': location.x, 'y': location.y})
    
    return {'x': location.x, 'y': location.y}
    // return newVertices
  })
  
  ]
  // vertices = [
  //   {
  //     x: 100,
  //     y: 200
  //   },
  //   {
  //     x: 400,
  //     y: 300
  //   },
  //   {
  //     x: 300,
  //     y: 300
  //   }
  // ]

  flyTo = direction => {
    console.log(direction)
    const goTo = this.state.neighbors

    if (this.rooms[goTo[direction]] !== null) {
      if (goTo[direction] !== null) {
        this.setState({ 
          location: {
            x: this.rooms[goTo[direction]].x,
            y: this.rooms[goTo[direction]].y,
          },
          neighbors: {
            to_n: this.rooms[goTo[direction]].to_n,
            to_s: this.rooms[goTo[direction]].to_s,
            to_e: this.rooms[goTo[direction]].to_e,
            to_w: this.rooms[goTo[direction]].to_w
          }
        })
        console.log("x: ", this.rooms[goTo[direction]].x, "y: ", this.rooms[goTo[direction]].y)
      }
      else {
        console.log('There is nothing in that direction.')
      } 
    }
    else {
      console.log("Room does not have that index number")
    }
  }
  
  render() {
    const Button = styled.div`
      border: 1px solid white;
    `
      console.log("State: ", this.state)
    
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
            points={[58.4,86.36, 62.4, 421.36, 81.4, 71.36, 61.4, 51.36]} //Need to connect vertices to this
          />
          {this.vertices[0].map( point => {
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
            x={this.state.location["x"]}
            y={this.state.location["y"]}
            translate={this.state.location["x"], this.state.location["y"]}
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
      <Button className="console" onClick={() => this.flyTo("to_n")}> 
        North
      </Button>
      <Button className="console" onClick={() => this.flyTo("to_s")}>
        South
      </Button>
      </>
    );
  }
}

export default Canvas