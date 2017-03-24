import React from 'react';
import {Text,View } from 'react-native';


// Create a component
const Choose = () => {
  const { choose, lefttextstyle, leftstyle,righttextstyle, 
      rightstyle ,purple} = styles;
  
   return (
    <View style={choose}>
     <View style={leftstyle}>    
         <Text style={lefttextstyle}>LIFE</Text>
         <View style={purple} />
    </View>
     <View style={rightstyle}>    
         <Text style={righttextstyle}>RECENT</Text>
    </View>
    </View>
  );
};


const styles = {
   choose:
   {
      width: 375,
      height: 44,
      backgroundColor: '#ffffff',
      flexDirection: 'row'
   },
   leftstyle:
   {
      width: 187.5,
      height: 44
   },
   lefttextstyle:
   {
   color: '#6441a5',
   top: 15,
   left: 79.5
   },
   purple:
   {
   backgroundColor: '#6441a5',
   width: 187.5,
   height: 5,
   top: 22
   },
   rightstyle:
   {
      width: 187.5,
      height: 44
   },
   righttextstyle:
   {   
   color: '#bbbbbb',
   top: 15,
   left: 67
   },
   };

export default Choose;
// AppRegisterComponent('wk5', ()=> wk5);