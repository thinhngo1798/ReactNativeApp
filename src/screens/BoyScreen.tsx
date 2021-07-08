import * as React from "react";
import { View, Text } from "react-native";
import { Header, Button, Input } from "react-native-elements";
import { Heading, Page } from "../components";
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    async function getNotificationToken() {
          const {status} = await Notifications.getPermissionsAsync()
          if (status !== 'granted') {
                const {status} = await Notifications.requestPermissionsAsync()
                if (status !== 'granted') {
                      alert('failed to get notification token')
                      return
                }
          }
          const tokenData = await Notifications.getExpoPushTokenAsync()
          const token = tokenData.data
          console.log(token);
          return token
      }

const BoyScreen: React.FC = () => {
      const [token, setToken] = React.useState<string | undefined>()
      return (
            <View>
                  <Header
                        centerComponent={{ text: 'For user 2 👩‍💻', style: { color: '#fff' } }}
                  />
                  <Page>
                        {!token ? <Text>If you havent got a code, please click to get one</Text> : 
                        <View>
                              <Text>Your Token is in the box below. Please copy it</Text>
                              <Input value={token}></Input>
                        </View>}
                        <Button title="Click to get the code" onPress={async () => {
                              const t = await getNotificationToken();
                              setToken(t)
                              }}></Button>
                  </Page>
            </View>
      );
};
export default BoyScreen;
