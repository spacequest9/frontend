import React from 'react';
import {
  Grid,
  Dropdown,
  Menu,
  Segment,
  Table,
  Icon
} from 'semantic-ui-react'
import styled from 'styled-components';

const Controls = props => {
   
  console.log("State: ", props)

  const Panel = styled.div`

  `
  const DirectionBtn = styled.div`
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
        box-shadow: 1px 1px 7px black;
        
        &:active{
          text-shadow: unset;
          box-shadow: 1px 1px 7px black;
        }

      }
      .in4{
        text-shadow: 1px 1px 2px black;
        text-shadow: unset;
        /* background-color: white;
        width: 20%;
        height: 20%; */
      }
    }
  `


  return (
    <>
      <Panel className=" panel">
        <DirectionBtn onClick={() => props.flyTo("to_w")}>
          West
          <div className='graphic'>
            <div className='graphic in1'>
              <div className="graphic in2">
                <div className="graphic in3">
                  <div className="in4">
                    <Icon name='caret left' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DirectionBtn>
        <div className="mid">
          <DirectionBtn onClick={() => props.flyTo("to_n")}>
            North
            <div className='graphic'>
              <div className='graphic in1'>
                <div className="graphic in2">
                  <div className="graphic in3">
                    <div className="in4">
                      <Icon name='caret up' />
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </DirectionBtn>
          <DirectionBtn onClick={() => props.flyTo("to_s")}>
            <div className='graphic'>
              <div className='graphic in1'>
                <div className="graphic in2">
                  <div className="graphic in3">
                    <div className="in4">
                      <Icon name='caret down' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            South
          </DirectionBtn>
        </div>
        <DirectionBtn onClick={() => props.flyTo("to_e")}>
          East
          <div className='graphic'>
            <div className='graphic in1'>
              <div className="graphic in2">
                <div className="graphic in3">
                  <div className="in4">
                    <Icon name='caret right' />
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </DirectionBtn>
      </Panel>
    </>
  );
}

export default Controls