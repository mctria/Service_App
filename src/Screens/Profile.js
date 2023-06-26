import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import colors from '../constants/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';


export const Profile = ({navigation}) => {
    return(
        // <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={styles.MainContainer}>
            <View style={styles.nav}>
                {/* icon */}
                <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                    navigation.navigate('Home');
                }}>
                <AntDesign name="back" size={25} color={colors.orange} />
                </TouchableOpacity>
                <Text style={styles.Navtext}>Profile</Text>
                <TouchableOpacity activeOpacity={0.5}>
                {/* <AntDesign name="user" size={20} /> */}
                </TouchableOpacity>
                {/* icon */}
            </View>

            {/* body */}
            <View style={styles.Container}>
                
            {/* <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}> */}
                <View style={styles.Profile}>
                    <View style={styles.Img} >
                        <Image />
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.CamEdit}>
                        {/* <Image /> */}
                        {/* absolute */}
                        <AntDesign name="camerao" size={20} color={colors.while} />
                        {/* Icon */}
                    </TouchableOpacity>

                    <View style={styles.proftext}>
                        <Text style={styles.MainsText}>
                            Robert Fox
                        </Text>
                        <Text style={styles.Email}>
                            robertabc@gmail.com
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.Edit} >
                        {/* Icon */}
                        <AntDesign name="edit" size={15} color={colors.back} />
                    </TouchableOpacity>
                
                </View>

                <View style={styles.SubContainer}>
                    <View style={styles.TextView}>
                        <Text style={styles.HeadText}>
                            Address
                        </Text>
                        <Text style={styles.Text}>
                            1901 Thormridge Cir, Shllah,
                            Hawali 81063
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.Edit} >
                        {/* Icon */}
                        <AntDesign name="edit" size={15} color={colors.back} />
                    </TouchableOpacity>
                </View>

                <View style={styles.SubContainer}>
                    <View style={styles.TextView}>
                        <Text style={styles.HeadText}>
                            Phone
                        </Text>
                        <Text style={styles.Text}>
                            +91 9432458xxx
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.Edit} >
                        {/* Icon */}
                        <AntDesign name="edit" size={15} color={colors.back} />
                    </TouchableOpacity>
                </View>

                <View style={styles.SubContainer}>
                    <View style={styles.TextView}>
                        <Text style={styles.HeadText}>
                            DOB
                        </Text>
                        <Text style={styles.Text}>
                            23-11-1999
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.Edit} >
                        {/* Icon */}
                        <AntDesign name="edit" size={15} color={colors.back} />
                    </TouchableOpacity>
                </View>

                <View style={styles.SubContainer}>
                    <View style={styles.TextView}>
                        <Text style={styles.HeadText}>
                            Gender
                        </Text>
                        <Text style={styles.Text}>
                            Male
                        </Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.Edit} >
                        {/* Icon */}
                        <AntDesign name="edit" size={15} color={colors.back} />
                    </TouchableOpacity>
                </View>
                
            {/* </ScrollView> */}

            </View>
        </ View>
        
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
    Container:{
        marginStart:-30,
        marginTop:40,
        paddingTop:10,
        borderRadius:60,
        backgroundColor:colors.verylightgrey,
        height:"100%",
        width:"120%",
        elevation:50,
    },
    CamEdit:{
        backgroundColor:colors.orange,
        borderRadius:50,
        padding:2,
        top:35,
        left:75,
        position:"absolute",
        borderWidth:1,
        borderColor:colors.while,
    },
    SubContainer:{
        backgroundColor:colors.while,
        margin:50,
        marginBottom:0,
        padding:20,
        borderRadius:10,
        elevation:20,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    Profile:{
        backgroundColor:colors.lightorange,
        // backgroundColor:colors.while,
        margin:50,
        marginBottom:0,
        padding:20,
        paddingTop:35,
        paddingBottom:35,
        borderRadius:10,
        elevation:20,
        flexDirection:"row",
        justifyContent:"space-around",
    },  
    Img:{
        backgroundColor:colors.orange,
        width:65,
        height:65,
        borderRadius:50,
    },
    proftext:{
        justifyContent:"space-around",
        // marginStart:-25,
    },
    MainsText:{
        color:colors.orange,
        fontSize:20,
        fontWeight:800,
    },
    HeadText:{
        color:colors.orange,
        paddingBottom:10,
        fontWeight:800,
    },
    Text:{
        fontWeight:600,
    },
    ScrollView:{
        backgroundColor: 'pink',
        // marginHorizontal: 10,
    }
});