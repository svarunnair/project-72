
import MyPosts from '../screens/MyPosts';
import Notification from '../screens/Notification';
import Mentions from '../screens/Mentions';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function NotificationStack() {
  return (
    
    <Stack.Navigator initialRouteName="Notification">
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Mentions" component={Mentions} options={{ headerShown: false }}  />
      <Stack.Screen name="MyPosts" component={MyPosts}  options={{ headerShown: false }} />
    </Stack.Navigator>
 
  );
}


export default NotificationStack