import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const dataTask = {
      id: Date.now(),
      title:newTaskTitle,
      done:false,
    }
    setTasks((old) => [...old, dataTask]);
  }

  function handleToggleTaskDone(id: number) {
    setTasks(tasks.map((t) => t.id === id ? {...t,done:!t.done} : t));
  }

  function handleRemoveTask(id: number) {
    setTasks((old) => old.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})