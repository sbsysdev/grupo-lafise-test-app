/* native */
import { ViewStyle } from 'react-native';
/* theme */
import { Aspect, Priority, Scheme, theme } from '../theme';

export const bgPriorityStyle = (
  scheme: Scheme,
  priority: Priority,
  surface: boolean = false
): ViewStyle => ({
  backgroundColor: theme.scheme[scheme][priority][surface ? 'bgSurface' : 'bg'],
});

export const bgAspectPriorityStyle = (
  scheme: Scheme,
  priority: Priority,
  aspect: Aspect,
  hovered: boolean = false,
  pressed: boolean = false,
  disabled: boolean = false
): ViewStyle => {
  if (disabled)
    return {
      backgroundColor:
        theme.scheme[scheme][priority][aspect === 'fill' ? 'bgFillDisabled' : 'bgMildDisabled'],
    };

  if (pressed)
    return {
      backgroundColor:
        theme.scheme[scheme][priority][aspect === 'fill' ? 'bgFillActive' : 'bgMildActive'],
    };

  if (hovered)
    return {
      backgroundColor:
        theme.scheme[scheme][priority][aspect === 'fill' ? 'bgFillHover' : 'bgMildHover'],
    };

  return {
    backgroundColor:
      aspect === 'plain'
        ? 'transparent'
        : theme.scheme[scheme][priority][aspect === 'fill' ? 'bgFill' : 'bgMild'],
  };
};

export const borderPriorityStyle = (
  scheme: Scheme,
  priority: Priority,
  hovered: boolean = false,
  pressed: boolean = false,
  disabled: boolean = false
): ViewStyle => ({
  borderColor:
    theme.scheme[scheme][priority][
      disabled ? 'borderDisabled' : pressed ? 'borderActive' : hovered ? 'borderHover' : 'border'
    ],
});
