import React, { useState } from "react";
import { TextInputProps } from "react-native";
import Container, { IHelp } from "./DhaInputText.container";
import * as S from './style'

interface Props extends TextInputProps {
   label: string;
   helpText?: IHelp;
   error?: boolean;
   disabled?: boolean;
   onFocus?: () => void;
   onBlur?: () => void;
}
const Input = ({
   label,
   helpText,
   error,
   disabled,
   placeholder,
   value,
   onChangeText,
   onFocus,
   onBlur,
   ...props
}: Props) => {
   const [focus, setFocus] = useState(false)

   const _onFocus = () => {
      if (onFocus) {
         onFocus()
      }
      setFocus(true)
   }

   const _onBlur = () => {
      if (onBlur) {
         onBlur()
      }
      setFocus(false)
   }

   return (
      <Container
         label={label}
         helpText={helpText}
         error={error}
         disabled={disabled}
         value={value}
         focus={focus}
         onChangeText={onChangeText}
         
      >
         {/*@ts-ignore*/}
         <S.Input
            {...props}
            onFocus={() => _onFocus()}
            onBlur={() => _onBlur()}
            placeholder={focus! ? placeholder : ""}
            value={value}
            editable={!disabled}
            onChangeText={onChangeText}
         />
      </Container>
   );
}
export default Input;