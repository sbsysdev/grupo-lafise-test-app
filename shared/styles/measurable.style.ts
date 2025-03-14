/* native */
import { FlexStyle, ViewStyle } from 'react-native';
/* theme */
import { ExtendedSize, Measurable, theme } from '../theme';

export const gapMeasurableStyle = (
  gap: ExtendedSize,
  measurable: Measurable = 'space'
): FlexStyle => ({
  gap: theme.measurable[measurable][gap],
});

export const paddingMeasurableStyle = (
  padding: ExtendedSize,
  measurable: Measurable = 'space'
): FlexStyle => ({
  padding: theme.measurable[measurable][padding],
});

export const roundedMeasurableStyle = (
  rounded: ExtendedSize,
  measurable: Measurable = 'space'
): ViewStyle => ({
  borderRadius: theme.measurable[measurable][rounded],
});

export const borderMeasurableStyle = (
  border: ExtendedSize,
  measurable: Measurable = 'border'
): FlexStyle => ({
  borderWidth: theme.measurable[measurable][border],
});
