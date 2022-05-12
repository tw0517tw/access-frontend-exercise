import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 720px;

  & > div {
    font-size: 18px;
    margin: 8px 0;
  }
`;

export default Container;
