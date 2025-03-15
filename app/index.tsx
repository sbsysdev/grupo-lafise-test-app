/* native */
import { useSafeAreaInsets } from 'react-native-safe-area-context';
/* components */
import { Button, Field, Label, Panel } from '@/shared/components';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <Panel
      style={{
        flex: 1,
        paddingTop: insets.top,
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

        <Field
          title="Password"
          hint="checkout your email"
          placeholder="Type your secure password..."
          border="primary"
          text="primary"
          error={false}
          disabled={false}
        />
      </Panel>
    </Panel>
  );
};

export default HomeScreen;
