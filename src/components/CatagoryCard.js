import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from "../constants/colors";



export const CatagryCard = ({
    Width,
    Height,
    Image,
    Radius,
    onPress
}) =>{
    return(
        <TouchableOpacity style={{...styles.MainView,width:Width,height:Height}} activeOpacity={0.5} onPress={onPress}>
            <ImageBackground style={{width:"100%",height:"100%"}} imageStyle={{borderRadius:Radius}} source={{uri:Image}}>

            </ImageBackground>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    MainView:{
        backgroundColor:colors.transparent,
        marginStart:20,
    }
});