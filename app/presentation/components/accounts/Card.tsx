import {Dimensions, FlatList, Image, Pressable, StyleSheet, Text, View} from "react-native";
import {AccountInterface} from "../../../domain/entities/Account";
import {AppTheme} from "../../theme/AppTheme";
import {useState} from "react";
interface IAccountCardProps {
    accounts: AccountInterface[]
}
export const AccountCard = ({accounts}:IAccountCardProps) => {
    const dataWithAddCard = [...accounts, null];
    const [actualIndex, setIndex] = useState(0);
    const handleScroll = (event: any) => {

        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.floor(contentOffsetX / (Dimensions.get("window").width - 50));
        setIndex(newIndex);
    };
    return (
        <View>
            <FlatList
                data={dataWithAddCard}
                horizontal
                snapToAlignment="start"
                decelerationRate="fast"
                pagingEnabled
                onScroll={handleScroll}
                contentContainerStyle={{marginHorizontal:15}}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => {
                    if (item === null) {

                        return (
                            <View style={{...styles.cardContainer, alignItems: "center"}}>
                                <Pressable onPress={() => console.log('Add')}>
                                    <Image source={require('../../../../assets/icons/add_account_icon.png')} />
                                </Pressable>
                            </View>
                        );
                    }

                    return (
                        <View style={styles.cardContainer}>
                            <View style={styles.cardTop}>
                                <Text style={styles.balanceText}>Balance</Text>
                                <Pressable onPress={() => console.log('Edit')}>
                                    <Image source={require('../../../../assets/icons/edit_icon.png')} />
                                </Pressable>
                            </View>
                            <Text style={styles.balanceAmount}>{item.balance} €</Text>
                            <Text style={styles.accountName}>{item.name}</Text>

                        </View>
                    );
                }}
            />
            <View style={styles.pagination}>

                <View style={styles.dotContainer}>
                    {dataWithAddCard.map((_, index) => (
                        index !== null && (
                            <View
                                key={index}
                                style={[
                                    styles.dot,
                                    actualIndex === index && styles.activeDot,
                                ]}
                            />
                        )
                    ))}
                </View>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        backgroundColor: AppTheme.colors.account,
        borderRadius: 20,
        width: Dimensions.get("window").width - 50,
        justifyContent: "center",
        height: 200,
        marginRight: 15
    },
    cardTop: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 23,
    },
    balanceText:{
        fontSize: 24,
        color: AppTheme.colors.white,
    },
    balanceAmount:{
        fontSize: 48,
        color: AppTheme.colors.white,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 19
    },
    accountName:{
        fontSize: 20,
        color: AppTheme.colors.white,
        textAlign: "left",
        marginLeft: 23,
    },
    pagination: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 28,
    },
    dotContainer: {
        flexDirection: 'row',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#ccc',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: AppTheme.colors.black,
    },

})