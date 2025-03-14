/* native */
import { View } from 'react-native';
/* props */
import { PanelProps } from './panel.props';
/* hooks */
import { useTheme } from '@/shared/hooks';
import {
  bgPriorityStyle,
  borderMeasurableStyle,
  borderPriorityStyle,
  gapMeasurableStyle,
  paddingMeasurableStyle,
  roundedMeasurableStyle,
} from '@/shared/styles';

const Panel = ({
  style,
  bg = 'base',
  border = 'base',
  gap = 'md',
  padding = 'md',
  rounded = 'md',
  borderWidth,
  surface,
  ...rest
}: PanelProps) => {
  const { scheme } = useTheme();

  return (
    <View
      style={[
        /* priority */
        bgPriorityStyle(scheme, bg, surface),
        borderPriorityStyle(scheme, border),
        /* measurable */
        gap && gapMeasurableStyle(gap, 'wide'),
        padding && paddingMeasurableStyle(padding, 'wide'),
        rounded && roundedMeasurableStyle(rounded, 'wide'),
        borderWidth && borderMeasurableStyle(borderWidth),
        style,
      ]}
      {...rest}
    />
  );
};

export default Panel;
