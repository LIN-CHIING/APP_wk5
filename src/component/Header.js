//Import libraries for making a component

import React from 'react';
import {Text ,View, Image} from 'react-native';

//Creat a component
const Header = ()=> {
   const {textstyle ,headerstyle ,picback ,picheart} = styles;
   return (
       <View style = {headerstyle}>
           <Image source= {require('../Asset/btn_back.png')}
           style = {picback} />
           <Text style = {textstyle}>HeartStone</Text>
           <Image source= {require('../Asset/btn_like.png')}
           style = {picheart} />
           </View>
   );
};


const styles = {
    picback: {
        width: 33,
        height: 33,
        left: 25,
        top: 25
    },
    picheart: {
        width: 33,
        height: 33,
        top: 25,
        right: -95
    },
    heartstyle: {
        backgroundColor: '#6441a5',
        justifyContent: 'center',
        width: 375,
        height: 64,
        flexDirection: 'row'
    },
    textstyle: {
        fontSize: 18,
        alignItems: 'center',
        top: 30.5,
        color: '#ffffff'
    }
};

export default Header;
// AppRegisterComponent('wk5', ()=> wk5);