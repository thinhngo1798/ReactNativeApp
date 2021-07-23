import * as React from "react";
import { Alert, View } from "react-native";
import { Header, Button, Input } from "react-native-elements";
import { ButtonContainer, CustomButton, CustomButtonText, Page, ColorButton } from "../components";
import { sendPushNotification } from "../services/api";
import { userToken } from "../services/token";


const GirlScreen: React.FC = () => {
      const [nameInput, setNameInput] = React.useState('')
      const [messageInput, setMessageInput] = React.useState('')
      const [token, setToken] = React.useState<any>()
      return (
            <View>

                  <Header
                        centerComponent={{ text: 'For user 1 🐶', style: { color: '#fff' } }}
                  />
                  <Page>
                        {
                              !token ?
                                    <View>
                                          <Input selectTextOnFocus={true} label="User Name" placeholder="Input user 2 name" value={nameInput} onChangeText={setNameInput}></Input>
                                          <Button title="Confirm the user name" onPress={() => {
                                                const token = userToken(nameInput);
                                                if (token) {
                                                      const completeToken='ExponentPushToken[' + token + ']';
                                                      setToken(completeToken);
                                                }
                                                else
                                                      Alert.alert("The name is invalid or it is not in our database. Please try again!");
                                          }
                                          } />
                                    </View> :
                                    <View>
                                          <View>
                                                <Input selectTextOnFocus={true} label="Custom message" placeholder="Your message" onChangeText={setMessageInput}
                                                value={messageInput}
                                                ></Input>
                                                <Button title="Send message" onPress={async () => {
                                                      await sendPushNotification(token, "An express message", messageInput)
                                                      setMessageInput("")
                                                }
                                                }>
                                                </Button>
                                          </View>
                                          <ButtonContainer>
                                                <CustomButton color='#0DDA42' onPress={() => sendPushNotification(token, "I am hungry 😫", "I need food 😋")}>
                                                      <CustomButtonText>I want food 🥘</CustomButtonText>
                                                </CustomButton>
                                                <CustomButton color='#0D6CDA' onPress={() => sendPushNotification(token, "I am thirsty 😫", "I need a milk tea 😋")}>
                                                      <CustomButtonText>I want drink 🥤</CustomButtonText>
                                                </CustomButton>
                                                <CustomButton color='#A30DDA' onPress={() => sendPushNotification(token, "I am poor 😥", "Can I borrow some money 🤑 ")}>
                                                      <CustomButtonText>I want money 💵</CustomButtonText>
                                                </CustomButton>
                                                <CustomButton color='#0DDAD5' onPress={() => sendPushNotification(token, "I have something to say 🙂 ", "Can you call 📲 or text me 📟")}>
                                                      <CustomButtonText>Call me please 📲</CustomButtonText>
                                                </CustomButton>
                                          </ButtonContainer>
                                          <ButtonContainer>
                                                <ColorButton
                                                      onPress={async () => {
                                                            setToken('')
                                                      }}>
                                                      <CustomButtonText>
                                                            Try a different partner
                                                      </CustomButtonText>
                                                </ColorButton>
                                          </ButtonContainer>
                                    </View>
                        }
                  </Page>
            </View>
      )
}
export default GirlScreen
