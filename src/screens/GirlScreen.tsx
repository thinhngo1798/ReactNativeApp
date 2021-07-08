import * as React from "react";
import { View } from "react-native";
import { Header , Button, Input } from "react-native-elements";
import { ButtonContainer, CustomButton, CustomButtonText, Page } from "../components";
import { sendPushNotification } from "../services/api";


const GirlScreen: React.FC = () => {
      const [tokenInput, setTokenInput] = React.useState('')
      const [token, setToken] = React.useState<any>()
      return (
            <View>
                  
                  <Header
                        centerComponent={{ text: 'For user 1 👨‍💻', style: { color: '#fff' } }}
                  />
                  <Page>
                        {
                        !token ?
                        <View>
                              <Input selectTextOnFocus={true} label="Code" placeholder="Input the code from user 2" value={tokenInput} onChangeText={setTokenInput}></Input>
                              <Button title="Confirm the code" onPress={() => setToken(tokenInput)}/>
                        </View> :
                        <ButtonContainer>
                              <CustomButton color='#0DDA42' onPress={() => sendPushNotification(token,"I am hungry 😫","I need food 😋")}>
                                    <CustomButtonText>I want food 🥘</CustomButtonText>
                              </CustomButton>
                              <CustomButton color='#0D6CDA' onPress={() => sendPushNotification(token,"I am thirsty 😫","I need a milk tea 😋")}>
                                    <CustomButtonText>I want drink 🥤</CustomButtonText>
                              </CustomButton>
                              <CustomButton color='#A30DDA' onPress={() => sendPushNotification(token,"I am poor 😥","Can I borrow some money 🤑 ")}>
                                    <CustomButtonText>I want money 💵</CustomButtonText>
                              </CustomButton>
                              <CustomButton color='#0DDAD5' onPress={() => sendPushNotification(token,"I have something to say 🙂 ","Can you call me 📲")}>
                                    <CustomButtonText>Call me please 📲</CustomButtonText>
                              </CustomButton>
                              <Button title="Try a different partner" onPress={async () => {
                              setToken('')
                              }}></Button>
                        </ButtonContainer>
                        }
                  </Page>
            </View>
      )
}
export default GirlScreen
