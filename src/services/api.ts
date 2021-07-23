import axios from 'axios'

const EXPO_SERVER_URL = "https://exp.host/--/api/v2/push/send"


export const sendPushNotification = async (token: string, title: string , body: string) => {
      const message = {
            to: token,
            sound: 'default',
            title,
            body,
      }

      const result = await axios.post(EXPO_SERVER_URL,message)
      if (result?.data?.data?.status == "ok")
            alert("Message sent successfully");
      else
            alert("Message has failed.");
}