import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/screens/type';
import { SafeAreaProvider } from 'react-native-safe-area-context';

{/* Get Started Screens */}
import { LoadingScreen } from './src/screens/getstarted/Loadingpage';
import GetStartedScreen from './src/screens/getstarted/Getstarted';

{/* Auth */}
import SignIn from './src/screens/auth/SignIn';
import SignUp from './src/screens/auth/SignUp';
import ForgotPass from './src/screens/auth/ForgotPass';
import SendCode from './src/screens/auth/SendCode';
import ResetPass from './src/screens/auth/ResetPass';

{/* Setting Up */}
import ChooseEvent from './src/screens/settingUp/ChooseEvent';
import ClientsName from './src/screens/wedding/ClientsName';
import EventDate from './src/screens/wedding/EventDate';

{/* Home Wedding */}
import Home from './src/screens/wedding/Home';
import Event from './src/screens/wedding/Event';
import Schedule from './src/screens/wedding/Schedule';
import Guest from './src/screens/wedding/Guest';
import Budget from './src/screens/wedding/Budget';
import Checklist from './src/screens/wedding/Checklist';
import Venue from './src/screens/wedding/Venue';
import Gallery from './src/screens/wedding/Gallery';
import Account from './src/screens/wedding/Account';

import { useGuestManagement } from './src/screens/wedding/Hook/useGuestManagement';

import NavigationSlider from './src/screens/wedding/ReusableComponents/NavigationSlider';
import MenuBar from './src/screens/wedding/ReusableComponents/MenuBar';

import { HomeIcon, EventIcon, GuestIcon, ScheduleIcon, BudgetIcon, ChecklistIcon, VenueIcon }
  from "./src/screens/icons";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Loading"
          screenOptions={{
            headerShown: false,
            animation: "fade"
          }}
        >
          {/* Get Started Screens */}
          <Stack.Screen name="Loading" component={LoadingScreen} />
          <Stack.Screen name="GetStarted" component={GetStartedScreen} /> 

          {/* Auth */}
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="SendCode" component={SendCode} />
          <Stack.Screen name="ResetPass" component={ResetPass} />

          {/* Setting Up */}
          <Stack.Screen name="ChooseEvent" component={ChooseEvent} />
          <Stack.Screen name="ClientsName" component={ClientsName} />
          <Stack.Screen name="EventDate" component={EventDate} />

          {/* Home Wedding */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Event" component={Event} />
          <Stack.Screen name="Schedule" component={Schedule} />
          <Stack.Screen name="Guest" component={Guest} />
          <Stack.Screen name="Budget" component={Budget} />
          <Stack.Screen name="Checklist" component={Checklist} />
          <Stack.Screen name="Venue" component={Venue} />
          <Stack.Screen name="Gallery" component={Gallery} />
          <Stack.Screen name="Account" component={Account} />
          
          {/* Icons */}
          <Stack.Screen name="HomeIcon" component={HomeIcon} />
          <Stack.Screen name="EventIcon" component={EventIcon} />
          <Stack.Screen name="GuestIcon" component={GuestIcon} />
          <Stack.Screen name="ScheduleIcon" component={ScheduleIcon} />
          <Stack.Screen name="BudgetIcon" component={BudgetIcon} />
          <Stack.Screen name="VenueIcon" component={VenueIcon} />
          <Stack.Screen name="ChecklistIcon" component={ChecklistIcon} />

          <Stack.Screen name="NavigationSlider" component={NavigationSlider} />
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

