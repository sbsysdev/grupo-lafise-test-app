/* native */
import { useColorScheme } from 'react-native';
/* theme */
import { Scheme } from '../theme';

export const useTheme = () => {
  const scheme = useColorScheme();

  /* TODO: implement user preferences */

  return { scheme: scheme as Scheme };
};
