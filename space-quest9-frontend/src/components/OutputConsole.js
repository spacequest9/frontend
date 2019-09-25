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
   
  console.log("State: ", props.vertices)

  const Output = styled.div`
    
    #bgc{
      background-color: transparent;
    }
    .bgc{
      color: white; 
      /* background-color: transparent; */
      box-shadow: 0px 1px 1px #4D4CE3;
      background-color: rgba(50, 115, 220, 0.3);
    }
  `

  return (
    <Output>
      <Table color={'pink'} className='bgc'>
        <Table.Header >
          <Table.Row >
            <Table.HeaderCell id='bgc'>Food</Table.HeaderCell>
            <Table.HeaderCell>Calories</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </Output>
  );
}

export default OutputConsole