import styled from "styled-components"
const Button = styled.button`
  background-color: ${({ theme }) =>
    theme === "light" ? "#516beb" : "#191919"};
  color: ${({ theme }) => (theme === "light" ? "#191919" : "#516beb")};
  padding: 10px;
  margin: 10px;
  font-weight: bolder;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.5s, 0.8s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export {Button}