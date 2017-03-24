import React from 'react';
import {View, Image, Text} from 'react-native';
import Header from './src/component/page3header';

//Creat a component
const Page = ()=> {
   const {horizontal ,left ,right ,all ,con ,down, one ,two ,
      three ,four ,textnormal ,textpurple ,bqr} = styles;

return(
    <View style = {all}>
        <Header />
    <View style = {horizontal}>
       <Image source ={require('./src/Asset/img_leagueoflegends.png')}
       style ={left}
       />
       <Image source= {require('./src/Asset/img_counterstrike.png')}
       style = {right}/>
    </View>
    <View style ={horizontal}>
        <Image source = {require('./src/Asset/img_hearthstone.png')}
        style= {left} />

        <Image source = {require('./src/Asset/img_dota2.png')}
        style= {right} />
    </View>
    
    <View style ={horizontal}>
        <Image source = {require('./src/Asset/img_h1z1.png')}
        style= {left} />

        <Image source = {require('./src/Asset/img_destiney.png')}
        style= {right} />

    </View>

    <View style = {bar}/>
    <View style={con}>
        <View style={down}>
            <View style={one}>
                <Image source={require('./src/Asset/btn_games_selscted.png')}/>
                <Text style={textpurple}>Games</Text> 
            </View>
            <View style={two}>
                <Image source={require('./src/Asset/btn_channels.png')}/>
                <Text style={textnormal}>Channels</Text> 
            </View>
            <View style={three}>
                <Image source={require('./src/Asset/btn_following.png')}/>
                <Text style={textnormal}>Following</Text> 
            </View>
            <View style={four}>
                <Image source={require('./src/Asset/btn_me.png')}/>
                <Text style={textnormal}>Me</Text> 
                </View>
            </View>
        </View>
    </View>

  );
};


const styles = {
    bar:{
        width:375,
        height: 0.5,
        backgroundColor:'rgba(0,0,0,2)',
        top: -1
    },
    texpurple:{
        fontSize: 1o,
        color: '#6441a5',
        textAlign:'center',
        top: -14
    },
    down: {
        flexDirection: 'row'
    },
    con: {
        width: 375,
        height: 49,
        backgroundColor: '#ffffff'
    },
    all: {
        flex: 1,
        backgroundColor: '#f1f1f1'
    },
    horizontal: {
        flexDirection: 'row',
        flex: 1,
        top: 5
    },
    left: {
        width: 180,
        height: 180,
        left: 5
    },
    right: {
        width: 100,
        height: 100,
        left: 10ß
    }
};

export default Page;
