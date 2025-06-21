import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { CourseStackParamList } from '../../navigation/CourseNavigator';

type DetailRouteProp = RouteProp<CourseStackParamList, 'CourseDetail'>;

export default function CourseDetailScreen() {
  const { courseId } = useRoute<DetailRouteProp>().params;
  return (
    <View style={styles.center}>
      <Text>Course Detail: {courseId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});