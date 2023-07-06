import { React, useState } from "react";
import { styles } from "./Styles";

import {
  View,
  Button,
  SafeAreaView,
  Text,
  FlatList,
  Modal
} from "react-native";

import { InputTask, TaskItem } from "./src/components/index.js";
import { color } from "./styles.variables";


export default function App(){
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [borderColor, setBorderColor] = useState(color.platinum);


    // Actions

    // Manage text in the input
    const onHandlerChangeText = (text) => {
      setTask(text);
    };

    // manage focus on input
    const onHandlerFocus = () => {
      setBorderColor(color.coral);
    };
    const onHandlerBlur = () => {
      setBorderColor(color.green);
    };

    // Create new task
    const onHandlerCreateTask = () => {
        console.log("onHandlerCreateTask");
        console.warn({ task });
        setTasks([
          ...tasks,
          {
            id: Date.now().toString(),
            value: task,
          },
        ]);
    
        setTask("");
        console.log(tasks)
      };
    
    // Delete task
    const onHandleDeleteTask = (id) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setIsVisible(false);
    };

    // modal
    /*
    const onHandlerModal = (item) => {
      setIsVisible(true);
      setSelectedTask(item);
    };
    */

    // RENDERING
    const renderItem = ({ item }) => {
      <TaskItem 
        item={item}
        //onPressItem={onHandlerModal} 
      />
    };


    return(
<>
    <SafeAreaView style={styles.SafeArea}>
        <View style={styles.Container}>
            <InputTask
                borderColor={borderColor}
                onHandleFocus={onHandlerFocus}
                onHandleBlur={onHandlerBlur}
                onHandlerChangeText={onHandlerChangeText}
                onHandlerCreateTask={onHandlerCreateTask}
                task={task}
            />
            <FlatList
              data={tasks}
              renderItem={renderItem}
              //style={styles.listContainer}
              //convtentContainerStyle={styles.list}
              alwaysBounceVertical={false}
              keyExtractor={(item) => item.id}
            />

        </View>

    </SafeAreaView>
    
</>
    )
}