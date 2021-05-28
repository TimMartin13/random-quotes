import React from 'react'
import styled from 'styled-components';

const Author = styled.div`
  padding-top: 1rem;
  text-align: right;
`;

const Background = styled.div`
  color: #F0F0F0;
  width: 50%;
  border-radius: 0.5rem;
  margin: 0rem 1rem 1rem 1rem;
  padding: 1rem;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px #000;
  border: 4px solid #F0F0F0;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }

  @media screen and (max-width: 780px) {
    width: 94%;
    margin: 0 auto 1rem;
  }
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
      </Background>
    </React.Fragment>
  )
}

export default Card
