import React from 'react';
import {View, Image} from 'react-native';
import Header from './src/component/Header';
import Choose from './src/component/Choose';

//Creat a component
const Page = ()=> {
   const {pic1,pic2,pic3,all,bar} = styles;

return(
    <View style = {all}>
        <Header />
        <Choose />
       <Image source ={require('./src/Asset/img_firebat.png')}
       style = {pic1}
       />
        <Image source ={require('./src/Asset/img_forsen.png')}
       style = {pic2}
       />
        <Image source ={require('./src/Asset/img_kolento.png')}
       style = {pic3}
       />
       <View style = {bar}/>
    </View>
  );
};


const styles = {
    bar:{
       width: 375,
       height: 0.5,
       backgroundColor: 'rgba(0,0,0,2)',
       top: -35
    },
    all: {
        flex: 1,
        backgroundColor: 'F1F1F1',
    },
    pic1: {
        width: 365,
        height: 200,
        left: 5,
        top: 5
    },
    pic2: {
        width: 365,
        height: 200,
        left: 5,
        top: 10
    },
    pic3: {
        width: 365,
        height: 144,
        left: 5,
        top: 15
    }


};

export default Page;
// AppRegisterComponent('wk5', ()=> wk5);