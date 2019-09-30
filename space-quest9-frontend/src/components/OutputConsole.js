import React from 'react';
// import {
//   Grid,
//   Dropdown,
//   Menu,
//   Segment,
//   Table,
//   Divider
// } from 'semantic-ui-react'
import styled from 'styled-components';

const OutputConsole = props => {
   
  const { title, description, players, directionError } = props.current

  const Output = styled.div`
    display: flex;
    justify-content: space-between;

    .players-display{
      border: 1px solid white;
      width: 25%;
      height: 30vh;
      /* box-shadow: 0px 1px 1px #4D4CE3;  */
      /* .inner{
        width: 100%;
        height: 100%;
        border: 7px dashed white;
        border-style
      } */

    }

    .middle{
      width: 50%;
      display: flex;
      flex-direction: column;
      
      .title-display-h2{
        margin:0 0 3%;
      }
      .title-display-h3{
        margin:0 0 4%;
      }
    }

    .display-header{
      transform: skew(15deg);
      border-style: solid;
      border-width: 1px 1px 1px 20px;
      margin: 0;
      width: 50%;
       
    }
    .description-display{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3%;
      border-width: 1px;
      border-style: dotted dashed dotted none;
      border-color: white;
      height: 100%;
      width: 100%;
    }
    .graphic{
      margin: 0 auto;
      border: 1px solid white;
      border-radius: 4rem;
      width: 100px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: center;

      .in1{
        width: 80%;
        height: 80%;
        border-style: double;
        border-width: 4px;
      }
      .in2{
        width: 80%;
        height: 80%;
        border-style: dashed;
        border-width: 2px;

        -webkit-animation: 8s linear 0s infinite move_in2;
        animation: 8s linear 0s infinite move_in2;
      }
      @-moz-keyframes move_in2 {100% {-moz-transform: rotate(360deg);}}
      @-webkit-keyframes move_in2 {100% {-webkit-transform: rotate(360deg);}}
      @keyframes move_in2 {100% {-webkit-transform: rotate(360deg); transform: rotate(360deg);}}

      .in3{
        width: 60%;
        height: 60%;
        border-style: solid dotted none;
        border-width: 2px;

        -webkit-animation: 4s linear 0s infinite reverse move_in3;
        animation: 4s linear 0s infinite reverse move_in3;
      }
      @-moz-keyframes move_in3 {100% {-moz-transform: rotate(360deg);}}
      @-webkit-keyframes move_in3 {100% {-webkit-transform: rotate(360deg);}}
      @keyframes move_in3 {100% {-webkit-transform: rotate(360deg); transform: rotate(360deg);}}

      .in4{
        background-color: white;
        border-radius: 3rem;
        width: 20%;
        height: 15%;

      }
    }
  `
  return (
    <>
      <Output>
        <div className='players-display'>
          <h4>Scanning Location...</h4>
          {players.map((player, i) => {
            return (
              <li key={i}>{player}</li>            
            )
          })}
        </div>
        <div className='middle'>
          <h2 className='title-display-h2'>Location:</h2>
          <h3 className='title-display-h3'>{title}</h3>
          <h3 className='display-header'>Description</h3>
          <div className='description-display'>
            {description}
            <h3>{directionError}</h3>
          </div>
        </div>
        <div className='graphic'>
          <div className='graphic in1'>
            <div className="graphic in2">
              <div className="graphic in3">
                <div className="graphic in4"></div>
              </div>
            </div>
          </div>
        </div>
      </Output>
    </>
  );
}

export default OutputConsole