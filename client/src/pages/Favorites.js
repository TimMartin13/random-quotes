import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import API from '../utils/API'
import styled from 'styled-components';

const Container = styled.div`
  margin: 3.75rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const getFavorites = () => {
    API.getFavorites()
      .then(res => {
      // console.log(res.data);
      setFavorites(res.data.reverse());
    })
    .catch(err => console.log(err));
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <Container>
      { favorites.map((item, index) => (
        <Card quote={ item } key={ index }/>
      ))}
    </Container>
  )
}

export default Favorites
