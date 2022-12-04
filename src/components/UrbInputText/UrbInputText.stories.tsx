import React, { useState } from "react";
import { AccessibilityProps, TextInputProps } from "react-native";
import Input from "./Input";
// import { IHelp } from "./DhaInputText.container";
// import InputMask, { TMask } from "./InputMask";

interface Props extends TextInputProps {
   label: string;
  //  helpText?: IHelp;
   error?: boolean;
   disabled?: boolean;
   onFocus?: () => void;
   onBlur?: () => void;
  //  mask?: TMask;
   accessibility?: AccessibilityProps;
}

const UrbInputText = ({
   label,
   helpText,
   error,
   disabled,
   value,
   onChangeText,
   placeholder,
   onFocus,
   onBlur,
   mask,
   accessibility,
   ...Props
}: Props) => {
   const [focus, setFocus] = useState(false)
   const accessibilityState = { disabled: !focus }

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
   return mask
      ? <InputMask
         {...Props}
         label={label}
         helpText={helpText}
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
         error={error}
         disabled={disabled}
         onFocus={_onFocus}
         onBlur={_onBlur}
         mask={mask}
         accessible={true}
         accessibilityLabel={label}
         accessibilityHint={helpText?.helpText}
         accessibilityState={accessibilityState}

      />
      : <Input
         {...Props}
         label={label}
         helpText={helpText}
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
         error={error}
         disabled={disabled}
         onFocus={onFocus}
         accessible={true}
         accessibilityLabel={label}
         accessibilityHint={helpText?.helpText}
         accessibilityState={accessibilityState}
         textAlignVertical={"center"}
      />
}
export default UrbInputText;