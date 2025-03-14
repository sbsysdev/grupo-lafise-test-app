/* native */
import { ViewProps } from 'react-native';
/* theme */
import { CommonSize, Priority } from '@/shared/theme';

export interface PanelProps extends ViewProps, CommonSize {
  bg?: Priority;
  border?: Priority;
  surface?: boolean;
}
