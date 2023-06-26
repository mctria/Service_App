import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';

export const OrderCard = ({
    name,
    service,
    date,
    time,
    img,
    onPress
}) =>{


    return(
        <TouchableOpacity style={styles.MainView} activeOpacity={0.5} onPress={onPress}>
            <View style={styles.SubMain}>
                <View style={styles.ImageView}>
                    <Image source={{uri:img}} style={{width:"100%",height:"100%"}} />
                </View>
                <View style={styles.Texttime}>
                    <Text style={styles.MainText} >{name}</Text>
                    <Text>{date} at {time}</Text>
                </View>
                <View style={styles.Status}>
                    <Text>{service}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    SubMain:{
        height:80,
        width:"90%",
        borderRadius:10,
        backgroundColor:colors.grey,
        margin:20,
        padding:10,
        flexDirection:"row",
    },
    ImageView:{
        backgroundColor:colors.orange,
        width:50,
        height:40,
        borderRadius:4,
        margin:5,
        marginTop:10,
    },
    MainText:{
        color:colors.back,
        fontWeight:800,
    },
    Texttime:{
        margin:2,
        justifyContent:"space-between",
    },
    Status:{
        // justifyContent:"center",
        marginTop:19,
        marginBottom:16,
        marginStart:16,
        paddingLeft:5,
        paddingRight:5,
        borderRadius:5,
        backgroundColor:colors.lightorange,

    }
});