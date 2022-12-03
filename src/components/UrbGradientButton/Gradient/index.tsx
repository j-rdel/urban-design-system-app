import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export type TType = 'primary' | 'secondary'
export type TWidth = 'default' | 'small'

interface Props {
  children: any
  colors: Array<string>
};

const Gradient = ({
  children,
  colors
}: Props) => {

  return (
      <LinearGradient 
        colors={[colors[0], colors[1], colors[2]]} 
        style={{
          flex: 1,
          height: '100%',
          borderBottomLeftRadius: 500,
          borderBottomRightRadius: 500,
          borderTopLeftRadius: 500,
          borderTopRightRadius: 500,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        useAngle={true} 
        angle={45} 
        angleCenter={{x:0.5,y:0.5}}
        >
        {children}
      </LinearGradient>
  );
}

export default Gradient;