import React from 'react';
import {Text ,View ,Image} from 'react-native';

//Creat a component
const Bottom = ()=> {
   const {all ,horizonal ,one ,two ,three ,four ,textnormal ,textpurple} = styles;

return(
    <View style = {all}>
        <View style={horizonal}>
            <View style = {one}>
                <Image source = {require('../Asset/btn_games_selected.png')}/>
                <Text style = {textpurple}>Games</Text> 
            </View>
            <View style = {two}>
                <Image source={require('../Asset/btn_channels.png')}/>
                <Text style = {textnormal}>Channel</Text>
                </View>
            <View style = {three}>
                <Image source = {require('../Asset/btn_following.png')}/>
                <Text style = {textnormal}>Following</Text>
                </View>
            <View style = {four}>
                <Image source = {require('../Asset/btn_me.png')}/>
                <Text style = {textnormal}>Me</Text>
                </View>
            </View>
        </View>
);
       
};


const styles = {
    all: {
        width: 375,
        height: 49,
        top: 146,
        left: -360,
        backgroundColor: '#ffffff'
    },
    horizonal: {
        flexDirection: 'row',
    },
    text1: {
        fontSize: 10,
        alighItem: ''center
    },
    text2: {

    },
    text3: {

    },
    text4: {

    }
};

export default Page;
// AppRegisterComponent('wk5', ()=> wk5);