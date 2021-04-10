import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: ${(props) => (props.bgNhan ? "gray" : "green")};
  opacity: 1;
  font-size: ${(props) => (props.font2x ? "2rem" : "1rem")};
  &:hover {
    opacity: 0.7;
    transition: all 0.5s;
  }
`;

export const SmallButton = styled(Button)`
  background-color: blue;
`;
