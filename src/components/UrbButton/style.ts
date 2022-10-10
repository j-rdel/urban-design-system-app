import styled from "styled-components/native";

interface Props {
   color?: string;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 200;
  text-align: center;
  padding-vertical: 8;
  padding-horizontal: 16;
  border-radius: 4;
  align-self: flex-start;
  flex-grow: 0;
  background-color: purple;
`

export const TextButton = styled.Text<Props>`
  color: white;
  font-size: 16;
  font-weight: bold;
`