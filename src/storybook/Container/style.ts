import styled from 'styled-components/native';

interface Props {
  backgroundColor?: string;
}

export const CenterViewChild = styled.View<Props>`
  flex: 1;
  align-items: center;
  padding: 16px;
  padding-top: 100px;
`;

export const IconView = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 4px;
  top: 10px;
`;

export const Icon = styled.Image``;
