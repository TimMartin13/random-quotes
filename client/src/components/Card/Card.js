import React from 'react'
import styled from 'styled-components';

const Author = styled.div`
  padding-top: 1rem;
  text-align: right;
`;

const Background = styled.div`
  background-color: grey;
  color: #fff;
  width: 50%;
  margin: 2rem auto;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 13px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 5px hsl(0, 0%, 80%);
  text-shadow: 1px 1px #000;
`;

const Quote = styled.div`
  
`;

function Card({ quote }) {
  return (
    <React.Fragment>
      <Background>
        <Quote>
          { quote.content ? quote.content : <></> }
        </Quote>
        <Author>
          { quote.author ? " - " + quote.author : <></> }
        </Author>
        {/* <h2>{ quote.content ? quote.content + " - " + quote.author : <></> }</h2> */}
      </Background>
    </React.Fragment>
  )
}

export default Card
