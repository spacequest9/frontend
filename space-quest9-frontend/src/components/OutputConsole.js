import React from 'react';
import {
  Grid,
  Dropdown,
  Menu,
  Segment,
  Table
} from 'semantic-ui-react'
import styled from 'styled-components';

const OutputConsole = props => {
   
  // console.log("State: ", props.vertices)

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
    }

    .display-header{
      transform: skew(15deg);
      border-style: solid;
      border-width: 1px 1px 1px 20px;
      margin: 0;
      width: 50%;
       
    }
    .description-display{
      border-width: 1px;
      border-style: dotted dashed dotted solid;
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
      }
      .in3{
        width: 60%;
        height: 60%;
        border-style: solid dotted none;
        border-width: 2px;
      }
      .in4{
        background-color: white;
        width: 20%;
        height: 20%;
      }
    }
  `
  return (
    <>
      <Output>
        <div className='players-display'>
          <div className='inner'>
            Players are here. will map over player information and display here.
          </div>
        </div>
        <div className='middle'>
          <h3 className='display-header'>Description</h3>
          <div className='description-display'>
            Description here
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
      <h3>Location:</h3>
      <p>Constellation {}</p>
    </>
  );
}

export default OutputConsole