/* native */
import { useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
/* components */
import { Button, Label } from '@/shared/components';
/* theme */
import { theme } from '@/shared/theme';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: scheme === 'dark' ? 'black' : theme.scheme.light.base.bg,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Button bg="primary" aspect="fill">
        {({ pressed }) => (
          <Label style={{ textAlign: 'center' }} contrast disabled={pressed}>
            Click me!
          </Label>
        )}
      </Button>
    </View>
  );
};

export default HomeScreen;
