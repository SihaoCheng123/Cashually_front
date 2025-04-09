import {useState} from "react";
import {
    FlatList,
    Keyboard,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {AppTheme} from "../../theme/AppTheme";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import {useAccountContext} from "../../context/AccountContext";
import {AccountInterface} from "../../../domain/entities/Account";

interface AddIncomeProps {
    onClose:()=>void,
    onSubmit:(data:{
        concept: string,
        amount: number,
        date: string,
        account: AccountInterface,
    })=>void,
}

export const AddIncomeModal = ({onClose, onSubmit}:AddIncomeProps) => {
    const [text, setText] = useState("");
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [concept, setConcept] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("")
    const [account, setAccount] = useState<AccountInterface | undefined>(undefined);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [dateShow, setDateShow] = useState("");
    const {localAccounts} = useAccountContext()
    const showDatePicker = () =>{
        setIsModalVisible(true);
    }
    const hideDatePicker = () =>{
        setIsModalVisible(false);
    }
    const formatDate = (date: Date): string => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        setDate(date.toISOString().split("T")[0])
        const formattedDate = formatDate(date)
        setDateShow(formattedDate)
        hideDatePicker();
    };
    const handleSelectAccount = (accountName: string) => {
        const account = localAccounts.find(acc => acc.name === accountName);
        if(account){
            setText(account.name);
            setAccount(account)
            setModalVisible(false);
        }

    };

    const parsedAmount = Number(amount);
    const handleSubmit = () => {
        if (account){
            onSubmit({concept: concept, amount: parsedAmount, date: date, account: account})
            onClose()
        }
    }


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
                                    <TextInput mode={"outlined"}
                                        onChangeText={setConcept}
                                        theme={{roundness: 15,
                                            colors: {
                                                primary: AppTheme.colors.grey,
                                                background: AppTheme.colors.white}}}/>
                                </View>

                                <View style={styles.amountDateContainer}>
                                    <View style={{ ...styles.inputContainer, width: "35%" }}>
                                        <Text style={styles.inputText}>Amount</Text>
                                        <TextInput mode={"outlined"}
                                            onChangeText={setAmount}
                                            theme={{roundness: 15,
                                                colors: {
                                                    primary: AppTheme.colors.grey,
                                                    background: AppTheme.colors.white}}}/>
                                    </View>
                                    <View style={{ ...styles.inputContainer, width: "45%" }}>
                                        <Text style={styles.inputText}>Date</Text>
                                        <TextInput mode={"outlined"} value={dateShow}
                                            onChangeText={setDateShow}
                                            right={<TextInput.Icon icon="calendar" onPress={showDatePicker}/>}
                                            theme={{roundness: 15,
                                                colors: {
                                                    primary: AppTheme.colors.grey,
                                                    background: AppTheme.colors.white}}}/>
                                    </View>
                                    <DateTimePickerModal
                                        isVisible={isModalVisible}
                                        mode="datetime"
                                        is24Hour={true}
                                        onConfirm={handleConfirm}
                                        onCancel={hideDatePicker}
                                    />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Text style={styles.inputText}>Choose an account</Text>
                                    <TextInput mode={"outlined"} value={text}
                                        onChangeText={setText}
                                               right={<TextInput.Icon icon="chevron-down" onPress={() => setModalVisible(true)}/>}
                                        theme={{roundness: 15,
                                            colors: {
                                                primary: AppTheme.colors.grey,
                                                background: AppTheme.colors.white}}}/>
                                </View>
                                {modalVisible && (
                                    <FlatList
                                        data={localAccounts}
                                        keyExtractor={(item, index) => index.toString()}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity onPress={() => handleSelectAccount(item.name)}>
                                                <Text style={styles.accountItem}>{item.name}</Text>
                                            </TouchableOpacity>
                                        )}
                                        style={styles.dropdownList}
                                    />
                                )}
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
                                        onPress={handleSubmit}
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
    dropdownList:{
        position: 'absolute',
        top: 240,
        left: '5%',
        right: '5%',
        maxHeight: 200,
        backgroundColor: AppTheme.colors.white,
        borderRadius: 15,
        elevation: 5,
    },
    accountItem: {
        padding: 10,
        fontSize: 16,
    },
});