/* native */
import { useSafeAreaInsets } from 'react-native-safe-area-context';
/* components */
import { Button, Label, Panel } from '@/shared/components';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Panel
      style={{
        flex: 1,
        paddingTop: insets.top,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      rounded={null}
      padding={null}
    >
      <Panel surface>
        <Button bg="primary" aspect="fill">
          {({ pressed }) => (
            <Label style={{ textAlign: 'center' }} text="primary" contrast disabled={pressed}>
              Click me!
            </Label>
          )}
        </Button>

        <Button bg="secondary" aspect="mild">
          {({ pressed }) => (
            <Label style={{ textAlign: 'center' }} text="secondary" disabled={pressed}>
              Click me!
            </Label>
          )}
        </Button>

        <Button bg="danger" aspect="plain">
          {({ pressed }) => (
            <Label style={{ textAlign: 'center' }} text="danger" disabled={pressed}>
              Click me!
            </Label>
          )}
        </Button>
      </Panel>
    </Panel>
  );
};

export default HomeScreen;
