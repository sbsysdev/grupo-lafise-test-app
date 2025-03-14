/* native */
import { TextStyle } from 'react-native';
/* theme */
import { ExtendedSize, FontFamily, Priority, Scheme, Size, theme } from '../theme';

export const fontFamilyStyle = (family: FontFamily): TextStyle => ({
  fontFamily: theme.fontFamily[family],
});

export const fontSizeStyle = (size: ExtendedSize): TextStyle => ({
  fontSize: theme.fontSize[size],
});

export const fontWeightStyle = (weight: Size): TextStyle => ({
  fontWeight: theme.fontWeight[weight],
});

export const fontPriorityStyle = (
  scheme: Scheme,
  priority: Priority,
  contrast: boolean = false,
  disabled: boolean = false
): TextStyle => ({
  color:
    theme.scheme[scheme][priority][
      contrast ? (disabled ? 'textCtrsDisabled' : 'textCtrs') : disabled ? 'textDisabled' : 'text'
    ],
});
