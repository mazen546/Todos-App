import { styled } from "styled-components";

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;
function List({ items, itemComponent: ItemComponent }) {
  return (
    <StyledList>
      {items.map((item, i) => (
        <ItemComponent key={i} {...item} />
      ))}
    </StyledList>
  );
}

export default List;
