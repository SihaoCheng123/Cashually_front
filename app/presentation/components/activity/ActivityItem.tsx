import {TransactionInterface} from "../../../domain/entities/Activity";
import {FlatList, Image, StyleSheet, Text, View} from "react-native";
import {AppTheme} from "../../theme/AppTheme";

interface IActivityItemProps {
    transactions: TransactionInterface[]
}

export const ActivityItem = ({transactions}:IActivityItemProps) => {

    if (transactions.length === 0) {
        return (
            <View style={{...styles.mainContainer, width: "100%", height: "auto", justifyContent: "center", alignItems: "center", marginBottom: 0}}>
                <Text style={styles.title}>No transactions yet</Text>
            </View>
        )
    }else {
        return (

            <FlatList
                data={transactions}
                scrollEnabled={true}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    const dateObj = new Date(item.date);
                    dateObj.setHours(dateObj.getHours() + 2);
                    const formattedDate = new Intl.DateTimeFormat("es-ES", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric"
                    }).format(dateObj);

                    return (
                        <View style={styles.mainContainer}>
                            <View style={styles.iconDataContainer}>
                                <View style={styles.iconContainer}>
                                    {item.concept ? (
                                        <Image source={require("../../../../assets/icons/income_icon.png")}
                                               style={styles.icon}/>
                                    ) : (
                                        <Image source={require("../../../../assets/icons/expense_icon.png")}
                                               style={styles.icon}/>
                                    )}
                                </View>
                                <View style={styles.dataContainer}>
                                    {item.concept ? (
                                        <Text style={styles.title}>{item.concept}</Text>
                                    ) : (
                                        <Text style={styles.title}>{item.category}</Text>
                                    )}

                                    <Text style={styles.date}>{formattedDate}</Text>
                                </View>
                            </View>

                            <View style={styles.amountContainer}>
                                <Text style={styles.amountText}>{item.concept? "+" : "-"} {item.amount} €</Text>
                            </View>
                        </View>
                    );
                }}
            />

        )
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 23,
        backgroundColor: AppTheme.colors.background,
        elevation: 2,
    },
    iconDataContainer:{
        display: "flex",
        flexDirection: 'row',
        marginLeft: 23,
        marginVertical: 6
    },
    iconContainer:{
        width: 50,
        height: 50,
        elevation: 5,
        borderRadius: 50,
        backgroundColor: AppTheme.colors.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 24
    },
    icon:{
      width: 30,
      height: 30,
    },
    dataContainer:{
        display: 'flex',
        flexDirection: 'column',
    },
    title:{
        fontSize: 16,
        fontWeight: 500,
        color: AppTheme.colors.black,
        marginBottom: 6
    },
    date:{
        fontSize: 12,
        fontWeight: 200,
        color: AppTheme.colors.black,
        opacity: 0.4
    },
    amountContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 23
    },
    amountText:{
        fontSize: 16,
        fontWeight: "bold",
        color: AppTheme.colors.black,
    }
})