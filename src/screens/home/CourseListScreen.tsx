import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { supabase } from '../../../lib/supabaseClient';

export default function CourseListScreen() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase.from('courses').select('*');
      if (!error && data) setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading courses...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={courses}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.courseItem}>
          <Text style={styles.courseTitle}>{item.title}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  courseItem: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
  courseTitle: { fontSize: 16, fontWeight: 'bold' },
});