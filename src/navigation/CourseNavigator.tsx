import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CourseListScreen from '../screens/home/CourseListScreen';
import CourseDetailScreen from '../screens/home/CourseDetailScreen';

export type CourseStackParamList = {
  CourseList: undefined;
  CourseDetail: { courseId: string };
};

const Stack = createStackNavigator<CourseStackParamList>();

export default function CourseNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CourseList" component={CourseListScreen} />
      <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
    </Stack.Navigator>
  );
}