import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import colors from "../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { OrderCard } from "../components/OrderCard";

export const Order = ({navigation}) =>{

    const catagory = [
        "All","Pending","To Be Paid","Comments","Other"
    ]
    const [textid,settextid] = useState(0);

    return(
        <View style={styles.MainContainer}>
            <View style={styles.nav}>
                {/* icon */}
                <TouchableOpacity activeOpacity={0.5}>
                <AntDesign name="menu-fold" size={20} color={colors.orange} />
                </TouchableOpacity>
                {/* <Text style={styles.Navtext}>Home</Text> */}
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                    navigation.navigate('Profile');
                }}>
                <AntDesign name="user" size={20} />
                </TouchableOpacity>
                {/* icon */}
            </View>
            <View style={styles.MainView}>
                <Text style={styles.Navtext}>My Orders</Text>
                {/* Data Text */}
                <View style={styles.CatagryText} >
                {catagory.map((e,i)=>(
                        // <Text key={i}>{e}</Text>
                        // i==1?console.log(i):console.log("Working")
                        <TouchableOpacity key={i} activeOpacity={0.5} onPress={()=>{
                            settextid(i)
                        }}>
                            {i!=textid?<Text key={i}>{e}</Text>:<Text style={{color:'blue'}} key={i}>{e}</Text> }
                        </TouchableOpacity>
                ))}
                </View>
            </View>
            <View style={styles.OrderData}>
                {/* data */}
                <OrderCard 
                     name={'Cleaning Service'}
                     date={'Oct 10,22'}
                     time={'6:56 pm'}
                     service={'Running'}
                     img={'https://images.pexels.com/photos/434163/pexels-photo-434163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}    
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    MainContainer:{
        margin:30,
    },
    nav:{
        marginTop:30,
        flexDirection:"row",
        // marginBottom:55,
        padding:20,
        justifyContent:"space-between",
    },
    Navtext:{
        padding:20,
        fontSize:30,
        fontWeight:900,
    },
    CatagryText:{
        flexDirection:"row",
        marginStart:20,
        justifyContent:"space-between",
    }
});