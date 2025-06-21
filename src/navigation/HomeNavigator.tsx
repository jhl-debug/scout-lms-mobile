import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { MainTabParamList } from '../types';
import CourseNavigator from './CourseNavigator';

const Tab = createBottomTabNavigator<MainTabParamList>();

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => (
          <View style={styles.center}>
            <Text style={styles.text}>Home Screen</Text>
          </View>
        )}
      />
      <Tab.Screen
        name="Courses"
        component={CourseNavigator}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18 },
});