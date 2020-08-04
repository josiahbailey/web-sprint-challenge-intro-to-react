import React from "react";
import styled from "styled-components";

export default function Header() {
  const SiteHeader = styled.header`
    max-width: 100%;
    background-color: black;
    padding: 2%;
    border-style: dashed;
    border-color: white;
  `;
  const SiteH1 = styled.h1`
    color: white;
    font-size: 400%;
  `;

  return (
    <SiteHeader>
      <SiteH1> StarWars Character List </SiteH1>
    </SiteHeader>
  );
}
