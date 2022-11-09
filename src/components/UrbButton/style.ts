import styled from "styled-components/native";
import { TOrdinal } from ".";

interface Props {
   type?: TOrdinal;
   isRevered: boolean;
   isPressed: boolean;
   isDisabled: boolean;
   color?: string;
}

export const Container = styled.TouchableOpacity<Props>`
  min-width: 160px;
  width: 240px;
  height: 50px;
  shadowColor: #121212;
  shadowOffset: {0, 16};
  shadowOpacity: 0.16;
  shadowRadius: 11.95;
  elevation: 40;
  border-radius: 500;
  background-color: #000000;
  padding: 0px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-width: 0;
  border-color: 0;
`

export const TextButton = styled.Text<Props>`
  color: white;
  font-size: 16;
  font-weight: bold;
`

const chooseOpacity = () => {

}

const chooseBackground = () => {

}