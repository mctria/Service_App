import React, { useState } from "react";
import { StyleSheet,Text, View, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Switch} from 'react-native-paper'


export const Setting = () => {

    const [noti,setnoti] = useState(false);
    const [theme,settheme] = useState(false);

    return(
        <View style={styles.MainContainer}>
            <View style={styles.nav}>
                {/* icon */}
                <TouchableOpacity activeOpacity={0.5}>
                <AntDesign name="back" size={25} color={colors.orange} />
                </TouchableOpacity>
                <Text style={styles.Navtext}>Setting</Text>
                <TouchableOpacity activeOpacity={0.5}>
                {/* <AntDesign name="user" size={20} /> */}
                </TouchableOpacity>
                {/* icon */}
            </View>

            <View style={styles.Container}>
                <View style={styles.SView}>

                    <Text style={styles.MainText}>
                        ACCOUNT SETTINGS
                    </Text>

                    <View style={styles.Radio}>

                        <Text style={styles.Text}>
                            Push notification    
                        </Text> 

                        <View style={styles.Btn}>
                            <Switch style={styles.BtnR} value={noti} onValueChange={()=>{setnoti(!noti)}} /> 
                        </View> 
                    </View>

                    <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.Text}>
                        Edit Profile
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.Text}>
                        Change Password
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.SView}>

                    <Text style={styles.MainText}>
                        THEME SETTINGS
                    </Text>

                    
                    <View style={styles.Radio}>

                        <Text style={styles.Text}>
                            Dark Theme    
                        </Text>   

                        <View style={styles.Btn}>
                            <Switch style={styles.BtnR} value={theme} onValueChange={()=>{settheme(!theme)}} /> 
                        </View> 
                    </View>
                </View>

                <View style={styles.SView}>

                    <Text style={styles.MainText}>
                        OTHER SETTINGS
                    </Text>

                    <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.Text}>
                        Feedback
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.Text}>
                        Privacy Policy
                    </Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.Text}>
                        Help
                    </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    MainContainer:{
        margin:30,
        marginTop:0,
        // backgroundColor:colors.verylightgrey,
    },
    nav:{
        marginTop:30,
        flexDirection:"row",
        // marginBottom:55,
        padding:20,
        justifyContent:"space-between",
    },
    Navtext:{
        color:colors.navtext,
        fontSize:20,
        fontWeight:800,
    },
    Container:{
        marginStart:-30,
        marginTop:40,
        // paddingTop:10,
        borderRadius:60,
        backgroundColor:colors.verylightgrey,
        height:"100%",
        width:"120%",
        elevation:50,
        padding:50,
    },
    SView:{
        paddingTop:25,
        paddingBottom:25,
    },
    MainText:{
        fontSize:16,
        fontWeight:800,
        marginBottom:40,
    },
    Text:{
        fontWeight:700,
        marginBottom:15,
    },
    Radio:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    Btn:{
        marginRight:20,
    },
    BtnR:{
        color:colors.green,
        margin:-10,
    }
});