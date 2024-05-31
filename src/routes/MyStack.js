import { createStackNavigator } from '@react-navigation/stack';
import MyPosts from '../screens/MyPosts';
import Notification from '../screens/Notification';
import Mentions from '../screens/Mentions';


const Stack = createStackNavigator();

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