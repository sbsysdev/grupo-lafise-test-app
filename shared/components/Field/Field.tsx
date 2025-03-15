/* native */
import { Fragment, useRef } from 'react';
import { Pressable, TextInput, View } from 'react-native';
/* props */
import { FieldProps } from './field.props';
/* hooks */
import { useTheme } from '@/shared/hooks';
/* components */
import { Label } from '../Label';
/* styles */
import {
  bgAspectPriorityStyle,
  borderMeasurableStyle,
  borderPriorityStyle,
  fontFamilyStyle,
  fontPriorityStyle,
  fontSizeStyle,
  fontWeightStyle,
  gapMeasurableStyle,
  paddingMeasurableStyle,
  roundedMeasurableStyle,
} from '@/shared/styles';

const Field = ({
  style,
  title,
  before,
  after,
  hint,
  error,
  /* fonts */
  family = 'main',
  size = 'md',
  weight = 'md',
  text = 'base',
  /* priority */
  bg = 'base',
  border = 'base',
  gap = 'xs',
  padding = 'xs',
  rounded = 'md',
  borderWidth = 'xs',
  disabled,
  ...rest
}: FieldProps) => {
  const { scheme } = useTheme();

  const textInputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    if (disabled) return;

    textInputRef.current?.focus();
  };

  return (
    <Pressable style={[gap && gapMeasurableStyle(gap)]} onPress={handleFocus} disabled={disabled}>
      {({ pressed, hovered }) => (
        <Fragment>
          {typeof title === 'string' ? (
            <Label
              style={[padding && { paddingHorizontal: paddingMeasurableStyle(padding).padding }]}
              family={family}
              weight="lg"
              text={error ? 'danger' : text}
              disabled={disabled}
            >
              {title}
            </Label>
          ) : (
            title
          )}

          <View
            style={[
              { flexDirection: 'row', alignItems: 'center' },
              !!before && padding && { paddingLeft: paddingMeasurableStyle(padding).padding },
              !!after && padding && { paddingRight: paddingMeasurableStyle(padding).padding },
              /* priority */
              bgAspectPriorityStyle(scheme, error ? 'danger' : bg, 'mild', false, false, disabled),
              borderPriorityStyle(scheme, error ? 'danger' : border, hovered, pressed, disabled),
              /* measurable */
              rounded && roundedMeasurableStyle(rounded),
              borderWidth && borderMeasurableStyle(borderWidth),
            ]}
          >
            {before}

            <TextInput
              style={[
                {
                  flex: 1,
                  height: fontSizeStyle(size).fontSize! + 24,
                },
                /* fonts */
                fontFamilyStyle(family),
                fontSizeStyle(size),
                fontWeightStyle(weight),
                fontPriorityStyle(scheme, error ? 'danger' : text, false, disabled),
              ]}
              maxFontSizeMultiplier={0}
              placeholderTextColor={
                fontPriorityStyle(scheme, error ? 'danger' : text, false, true).color
              }
              ref={textInputRef}
              editable={!disabled}
              {...rest}
            />

            {after}
          </View>

          {typeof hint === 'string' ? (
            <Label
              style={[
                { alignSelf: 'center' },
                padding && { paddingHorizontal: paddingMeasurableStyle(padding).padding },
              ]}
              family={family}
              size="xs"
              text={error ? 'danger' : text}
              disabled={disabled}
            >
              {hint}
            </Label>
          ) : (
            hint
          )}
        </Fragment>
      )}
    </Pressable>
  );
};

export default Field;
