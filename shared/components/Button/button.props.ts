/* native */
import { PressableProps } from 'react-native';
/* theme */
import { CommonPriority, CommonSize } from '@/shared/theme';

export interface ButtonProps extends PressableProps, CommonPriority, CommonSize {
  disabled?: boolean;
}
