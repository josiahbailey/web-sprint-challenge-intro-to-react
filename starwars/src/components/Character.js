// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = ({ individual }) => {
  const CharacterCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: auto;
    justify-content: space-between;
    width: 500px;
    margin: auto;
    border-style: dashed;
  `;

  return (
    <div key={individual.id}>
      <CharacterCard>
        <h2>{individual.name} - </h2>
        <h3>{individual.gender}</h3>
        <p>Birth Year: {individual.birth_year}</p>
        <p>Skin Color: {individual.skin_color}</p>
      </CharacterCard>
    </div>
  );
};

export default Character;
