import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import styled from 'styled-components';

const Container = styled.div`
  margin: 5.75rem auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 780px) {
    flex-direction: column;
    align-items: left;
    margin: 5.75rem auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 780px) {
    flex-direction: row;
    margin-left: 2rem;
  }
`;

function Home() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    API.getAPIQuote()
    .then(res => {
        setQuote(res.data);
    })
    .catch(err => console.log(err));
  };

  const saveQuote = () => {
    const newQuote = {
      content: quote.content,
      author: quote.author
    }

    // console.log({ newQuote });
    API.saveQuote(newQuote);

  };

  return (
    <React.Fragment>
      <Container>
        <Card quote={ quote }/>
        <ButtonContainer>
          <Button funct={ getQuote } text={ "get" }/>
          <Button funct={ saveQuote } text={ "save" }/>
        </ButtonContainer>
      </Container>
      {/* <h2>{ quote.content ? quote.content + " - " + quote.author : <></> }</h2>
      <button onClick={ getQuote }>New Quote</button>
      <button onClick={ saveQuote }>Save</button> */}
      {/* { result.length > 0 ? (
          result.map((item, key) => (
          <>
            <h2 key={`h2-${key}`}>{ item.quote + " " + item.author }</h2>
          </> 
          ))
        ) : <div>"Not Loaded!"</div>
      } */}
    </React.Fragment>
  )
}

export default Home
