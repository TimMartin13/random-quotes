import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Card from "../components/Card/Card";
import Button from "../components/Button/Button";
import styled from 'styled-components';

const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  border: 1px solid green;
`;

function Home() {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    API.getAPIQuote()
    .then(res => {
        // console.log(res.data);
        setQuote(res.data);
    })
    .catch(err => console.log(err));
  };

  const saveQuote = () => {
    const newQuote = {
      quote: quote.content,
      author: quote.author
    }

    // console.log({ newQuote });
    API.saveQuote(newQuote);

  };

  return (
    <React.Fragment>
      <Container>
        <Card quote={ quote }/>
        <Button funct={ getQuote } text={ "Get Quote" }/>
        <Button funct={ saveQuote } text={ "Save Quote" }/>
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
