import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import './App.css';

import Quotes from "./quotes.json";
import Authors from "./authors.json";
import Tags from "./tags.json";


const Header = styled.span`
  margin-top: 1em;
  font-weight: bold;
  font-size: 2em;
  margin-left: 1em;
`;

const Container = styled.div`
  margin: 1em;
`;

const ItemContainer = styled.div`
  margin: 4em;
  padding: 2em;
  border: solid 1px black;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex: 3 2 25%;
  margin: 1em;
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  padding: 0.5em;
  border-radius: 0.5em;
  box-shadow: 0.4em 0.6em 0.4em #888888;
  &:hover {
    background-color: #F8F8F8;
  }
`;

const ItemText = styled.span`
  font-size: 1.2em;
`;

const ItemAuthor = styled.span`
  font-size: 1em;
  color: gray;
  font-style: italic;
`;

const ItemTagsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0.5em;
`;

const ItemTag = styled.div`
  font-size: 0.6em;
  border: solid 1px gray;
  border-radius: 0.3em;
  box-shadow: 0.1em 0.2em 0.1em #888888;
  margin: 1em;
  padding: 0.5em;
  cursor: pointer;
  
  &:hover {
    background-color: #215AA7;
    color: white;
  }
`;

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Quotes.map((quote, idx) => {
      const item = {...quote};
      item.author = Authors[item.author.toString()];
      item.tags = item.tags.map((tag, idx) => Tags[tag.toString()]);
      return item;
    }));
  }, []);

  return (
    <Container>
      <Header>Quotoverse</Header>
      <ItemContainer>
        {items.map((item, idx) => {
          if (!item.text) 
            return <></>;
          return (
            <Item>
              <ItemText>
                {item.text}
              </ItemText>
              <ItemAuthor>
                {item.author}
              </ItemAuthor>

              <ItemTagsDiv>
                {item.tags.map((tag, idx) => {
                  return (
                    <ItemTag>
                      {tag}
                    </ItemTag>
                  );
                })}
              </ItemTagsDiv>
            </Item>
          );
        })}
      </ItemContainer>

    </Container>
  );
}

export default App;
