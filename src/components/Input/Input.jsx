import { Button, TextInput, View, TouchableOpacity } from "react-native"

import { styles } from "./stylesInput.js"
import { color } from "../../themes/colors/themes.colors.js"

const InputTask = ({
    task,
    borderColor,
    onHandleFocus,
    onHandleBlur,
    onHandlerChangeText,
    onHandlerCreateTask,
    placeHolder
}) => {
    return(
        <View style={styles.InputContainer}>
            <TextInput style={[styles.InputTask, {borderColor}]}
                value={task}
                autoCorrect={false}
                placeholder={placeHolder}
                autoCapitalize="none"

                cursorColor={color.coral}
                onFocus={onHandleFocus}
                onBlur={onHandleBlur}
                placeholderTextColor= {color.green50}
                onChangeText={onHandlerChangeText}
            />
            <Button style={styles.InputButton}
                disabled={task.length === 0}
                title="Create"
                color={color.coral}
                onPress={onHandlerCreateTask}
            />
            
        </View>
    )
}

export default InputTask