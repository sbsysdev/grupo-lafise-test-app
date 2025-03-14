/* native */
import { Pressable } from 'react-native';
/* props */
import { ButtonProps } from './button.props';
/* hooks */
import { useTheme } from '@/shared/hooks';
/* styles */
import {
  bgAspectPriorityStyle,
  borderMeasurableStyle,
  borderPriorityStyle,
  gapMeasurableStyle,
  paddingMeasurableStyle,
  roundedMeasurableStyle,
} from '@/shared/styles';

const Button = ({
  style,
  bg = 'base',
  aspect = 'plain',
  border = 'base',
  gap = 'md',
  padding = 'md',
  rounded = 'md',
  borderWidth,
  disabled,
  ...rest
}: ButtonProps) => {
  const { scheme } = useTheme();

  return (
    <Pressable
      style={({ pressed, hovered }) => [
        /* priority */
        bgAspectPriorityStyle(scheme, bg, aspect, hovered, pressed, disabled),
        borderPriorityStyle(scheme, border, hovered, pressed, disabled),
        /* measurable */
        gap && gapMeasurableStyle(gap),
        padding && paddingMeasurableStyle(padding),
        rounded && roundedMeasurableStyle(rounded),
        borderWidth && borderMeasurableStyle(borderWidth),
        typeof style === 'function' ? style({ pressed, hovered }) : style,
      ]}
      disabled={disabled}
      {...rest}
    />
  );
};

export default Button;
