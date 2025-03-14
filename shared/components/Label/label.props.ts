/* native */
import { TextProps } from 'react-native';
/* theme */
import { CommonFont } from '@/shared/theme';

export interface LabelProps extends TextProps, CommonFont {
  contrast?: boolean;
  dots?: boolean;
  disabled?: boolean;
  invalid?: boolean;
}
