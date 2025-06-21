import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';
import { View, Text } from 'react-native';

const HomeStack = createStackNavigator();

// Placeholder screens for AI features
function AIChatScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AI Chat - Course Contextual</Text>
    </View>
  );
}

function ChatHistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Chat History</Text>
    </View>
  );
}

function AIToolsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>AI Tools - Module Specific</Text>
    </View>
  );
}

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen 
        name="HomeMain" 
        component={HomeScreen} 
      />
      <HomeStack.Screen 
        name="AIChat" 
        component={AIChatScreen} 
      />
      <HomeStack.Screen 
        name="ChatHistory" 
        component={ChatHistoryScreen} 
      />
      <HomeStack.Screen 
        name="AITools" 
        component={AIToolsScreen} 
      />
    </HomeStack.Navigator>
  );
}