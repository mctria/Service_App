import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from "../constants/colors";
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CatagryCard } from "../components/CatagoryCard";



export const HomeScreen = ({navigation}) => {

    const [search,setsearch] = useState('');

    return(
        <View style={styles.MainContainer}>
            <View style={styles.nav}>
                {/* icon */}
                <TouchableOpacity activeOpacity={0.5} >
                <AntDesign name="menu-fold" size={20} color={colors.orange} />
                </TouchableOpacity>
                <Text style={styles.Navtext}>Home</Text>
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                    navigation.navigate('Profile');
                }}>
                <AntDesign name="user" size={20} />
                </TouchableOpacity>
                {/* icon */}
            </View>
            <View style={styles.Search}>
                {/* icon */}
                <TextInput style={styles.SearchInput} placeholder="Search" onChangeText={(e)=>{
                    setsearch(e)
                }}></TextInput>
            </View>
            {/* <Text>{search}</Text> */}
            <View style={styles.adcard}>
                {/* AdCard */}
                <CatagryCard 
                    Width={'90%'} 
                    Height={100} 
                    Radius={5}
                    Image={'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg'}
                    onPress={()=>{console.log("ad")}}
                />
            </View>
            <View style={styles.Catagry}>
                <View style={styles.HeadView}>
                    <Text style={styles.HeaderText}>Select Category</Text>
                    <Text style={styles.viewText}>View all</Text>
                </View>
                <View style={styles.CataView}>
                    {/* CategoryCard */}
                    <CatagryCard 
                        Width={120} 
                        Height={210}
                        Radius={20}
                        Image={'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg'}
                        onPress={()=>{console.log("data")}}
                    />
                </View>
            </View>
            <View style={styles.Promotions}>
                <View style={styles.HeadView}>
                    <Text style={styles.HeaderText}>Promotions</Text>
                    <Text style={styles.viewText}>View all</Text>
                </View>
                <View style={styles.promcard}>
                    {/* promotioncard */}
                    <CatagryCard 
                        Width={'50%'} 
                        Height={100}
                        Radius={10}
                        Image={'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg'}
                        onPress={()=>{console.log("prom")}}
                    />
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    MainContainer:{
        margin:30,
        // marginTop:0,
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
    Search:{
        width:'90%',
        backgroundColor:colors.lightgray,
        borderRadius:5,
        padding:10,
        margin:20,
        marginBottom:25
    },
    SearchInput:{
        color:colors.lightgray,
    },
    Catagry:{
        // marginBottom:250,
    },
    HeadView:{
        margin:20,
        marginEnd:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    viewText:{
        color:colors.navtext,
    },
    HeaderText:{
        color : colors.back,
        fontSize:20,
        fontWeight:700,
        // marginEnd:120,
    }
});