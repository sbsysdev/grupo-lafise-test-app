/* native */
import { Text } from 'react-native';
/* props */
import { LabelProps } from './label.props';
/* hooks */
import { useTheme } from '@/shared/hooks';
/* styles */
import {
  fontFamilyStyle,
  fontPriorityStyle,
  fontSizeStyle,
  fontWeightStyle,
} from '@/shared/styles';

const Label = ({
  style,
  family = 'main',
  size = 'md',
  weight = 'md',
  text = 'base',
  contrast,
  dots,
  disabled,
  invalid,
  ...rest
}: LabelProps) => {
  const { scheme } = useTheme();

  return (
    <Text
      style={[
        fontFamilyStyle(family),
        fontSizeStyle(size),
        fontWeightStyle(weight),
        fontPriorityStyle(scheme, text, contrast, disabled),
        style,
      ]}
      {...rest}
    />
  );
};

export default Label;
