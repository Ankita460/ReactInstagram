//Task-2 Print Array Item


import React,{ Component }  from 'react';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView}from 'react-native';

export default class App extends Component{
constructor(props){
    super(props)
    this.state = {
      toppingValue: ["Paneer Pizza", "Corn Pizza", "Onion Pizza", "Cheese Pizza", "Capsicum Pizza"],
      chossedTopping: [],
  }
  }
  

  
  chossedtoppingFunction = (item, key) => {
    let {toppingValue, chossedTopping}=this.state
    toppingValue.splice(key, 1)
    this.setState({chossedTopping: [...chossedTopping,"  ", item], 
                    toppingValue: toppingValue
    })
  }

  render(){
    let {toppingValue, chossedTopping}=this.state

    return(
        <SafeAreaView style = {style.container}>
        <Text style={{fontWeight: 'bold'}}>Choose Any Topping</Text>
        <View style={{width:200, height:200, backgroundColor:'orange', alignItems:'center', paddingTop:10}}>
        { toppingValue.map((item, key)=>(
         <TouchableOpacity key={key} onPress={() => {this.chossedtoppingFunction(item, key)}} > { item } </TouchableOpacity>)
         )}
         </View>
         <View style={{ marginTop: 8, fontWeight: 'bold', backgroundColor: 'red', color:'black', padding: 5, borderRadius: 4, borderColor: 'black',}}>Chossed Topping: {chossedTopping}</View>
      </SafeAreaView>
    )


    }
        
}

const style= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


