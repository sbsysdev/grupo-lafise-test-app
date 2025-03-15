/* native */
import { ReactNode } from 'react';
import { TextInputProps } from 'react-native';
/* theme */
import { CommonFont, CommonPriority, CommonSize } from '@/shared/theme';

export interface FieldProps
  extends TextInputProps,
    CommonFont,
    Omit<CommonPriority, 'aspect'>,
    CommonSize {
  title?: string | ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  hint?: string | ReactNode;
  error?: boolean;
  disabled?: boolean;
}
