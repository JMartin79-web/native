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
    const onHandlerModal = (item) => {
      setIsVisible(true);
      setSelectedTask(item);
    };
    

    // RENDERING
    const renderItem = ({ item }) => {
      return(<TaskItem 
        item={item}
        onPressItem={onHandlerModal} 
      />)
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
            <View style={styles.flatListContainer}>
              
              <FlatList
                data={tasks}
                renderItem={renderItem}
                //style={styles.listContainer}
                //convtentContainerStyle={styles.list}
                alwaysBounceVertical={false}
                keyExtractor={(item) => item.id}
              />
            </View>

        </View>

        <Modal visible={isVisible} animationType="slide">
          <View>
            <Text>Task Detail</Text>
            <View>
              <Text>Are you sure to delete this item?</Text>

            </View>

            <View>
              <Button title="Cancel" color="#424D9E" onPress={() => setIsVisible(false)} />
              <Button title="Delete" color="red" onPress={() => onHandleDeleteTask(selectedTask?.id)} />
            </View>
          
          </View>
          
        </Modal>


    </SafeAreaView>
    
</>
    )
}