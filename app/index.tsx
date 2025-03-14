import { Pressable, Text, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        backgroundColor: scheme === 'dark' ? 'black' : 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Pressable>
        <Text style={{ textAlign: 'center', color: scheme === 'dark' ? 'white' : 'black' }}>
          Click me!
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;
