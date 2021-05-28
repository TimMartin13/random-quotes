import React from 'react'
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const ButtonStyle = styled.div`
  font-size: 1.5rem;
  padding-top: 0.6rem;
  width: 50px;
  height: 50px;
  margin: 0.4rem;
  border: 2px solid #F0F0F0;;
  border-radius: 8px;
  color: #F0F0F0;;
  transition: 0.4s;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: #F0F0F0;
    color: #594683;
  }

`;

function Button({ funct, text }) {

  const getIcon = (choice) => {
    let buttonIcon;

    switch (choice) {
      case 'get': buttonIcon = faRedoAlt; break;
      case 'save': buttonIcon = faHeart; break;
      default: break;
    }

    return buttonIcon;
  }

  return (
    <div>
      <ButtonStyle className='button' onClick={ funct }>
        <FontAwesomeIcon className='iconStyle' icon={ getIcon(text) } />
      </ButtonStyle>
    </div>
  )
}

export default Button
