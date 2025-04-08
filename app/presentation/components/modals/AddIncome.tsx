import {useState} from "react";
import {Keyboard, Modal, StyleSheet, Text, TouchableWithoutFeedback, View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {AppTheme} from "../../theme/AppTheme";

interface AddIncomeProps {
    onClose:()=>void
}

export const AddIncomeModal = ({onClose}:AddIncomeProps) => {
    const [text, setText] = useState("");

    return (
        <Modal transparent animationType="fade">
            <TouchableWithoutFeedback onPress={() => { onClose(); Keyboard.dismiss(); }}>
                <View style={styles.modalBackground}>
                    <TouchableWithoutFeedback>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalTextContainer}>
                                <Text style={styles.newText}>New income</Text>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.inputText}>Concept</Text>
                                    <TextInput mode={"outlined"} value={text}
                                        onChangeText={setText}
                                        theme={{roundness: 15,
                                            colors: {
                                                primary: AppTheme.colors.grey,
                                                background: AppTheme.colors.white}}}/>
                                </View>

                                <View style={styles.amountDateContainer}>
                                    <View style={{ ...styles.inputContainer, width: "40%" }}>
                                        <Text style={styles.inputText}>Amount</Text>
                                        <TextInput mode={"outlined"} value={text}
                                            onChangeText={setText}
                                            theme={{roundness: 15,
                                                colors: {
                                                    primary: AppTheme.colors.grey,
                                                    background: AppTheme.colors.white}}}/>
                                    </View>
                                    <View style={{ ...styles.inputContainer, width: "40%" }}>
                                        <Text style={styles.inputText}>Date</Text>
                                        <TextInput mode={"outlined"} value={text}
                                            onChangeText={setText}
                                            right={<TextInput.Icon icon="calendar" />}
                                            theme={{roundness: 15,
                                                colors: {
                                                    primary: AppTheme.colors.grey,
                                                    background: AppTheme.colors.white}}}/>
                                    </View>
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.inputText}>Choose an account</Text>
                                    <TextInput mode={"outlined"} value={text}
                                        onChangeText={setText}
                                               right={<TextInput.Icon icon="chevron-down" />}
                                        theme={{roundness: 15,
                                            colors: {
                                                primary: AppTheme.colors.grey,
                                                background: AppTheme.colors.white}}}/>
                                </View>

                                <View style={styles.buttonContainer}>
                                    <Button
                                        mode={"contained"}
                                        buttonColor={AppTheme.colors.black}
                                        textColor={AppTheme.colors.primary}
                                        labelStyle={{
                                            fontFamily: AppTheme.fonts.regular,
                                            fontSize: 24,
                                            lineHeight: 50,
                                            paddingHorizontal: 20,
                                            textAlign: "center"
                                        }}
                                        style={styles.button}
                                        onPress={onClose}
                                    >Add</Button>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContainer: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 50,
        width: "95%",
    },
    modalTextContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
    },
    newText:{
        fontSize: 32,
        fontWeight: "bold",
        color: AppTheme.colors.black,
        textAlign: "center",
        marginVertical: 38,
    },
    amountDateContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputContainer:{
        marginBottom: 21,
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 15
    },
    inputText:{
        fontFamily: AppTheme.fonts.regular,
        fontSize: 16,
        paddingLeft: 10,
        paddingBottom: 5
    },
    buttonContainer:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    button:{
        width: "60%",
        marginTop: 17,
        marginBottom: 38,
        borderRadius: 25,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16,
    },
});