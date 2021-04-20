//Task-3 Print Array Items with Price
import React,{ Component }  from 'react';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView}from 'react-native';

export default class PizzaToppingWithPrice extends Component {

  constructor(props) {
    super(props)
    this.state = {

      toppingValue: [{ topping: "Paneer Pizza", price: 70 },
      { topping: "Corn Pizza", price: 120 },
      { topping: "Onion Pizza", price: 100 },
      { topping: "Capsicum Pizza", price: 50 },
      { topping: "Cheese Pizza", price: 150 }
      ],
      chossedTopping: [],
      totalPrice: 0
    }
  }

  // function for pizza topping
  chossedtoppingFunction = (index) => {
        let {chossedTopping,toppingValue, totalPrice}=this.state;

    let item = toppingValue.splice(index, 1)
    this.setState({
    
      chossedTopping: [...chossedTopping, ", ",...item],
      toppingValue: toppingValue,
      totalPrice: item[0].price + totalPrice
    })
  }

  // render the class
  render() {
    let {chossedTopping,toppingValue, totalPrice}=this.state;
    return (
      <SafeAreaView style={stylePizza.container}>
        <Text style={{fontWeight: 'bold'}}> Choose Any Topping</Text>
        <View style={{ width: 200, height: 200, fontWeight: 'bold', backgroundColor: 'orange', alignItems: 'center', paddingTop: 10 }}>
          {toppingValue.map((value, index) => (
            <TouchableOpacity key={index} onPress={() => { this.chossedtoppingFunction(index) }} > {value.topping} : {value.price} </TouchableOpacity>)
          )}
        </View>
        
        <View style={{ marginTop: 8, backgroundColor: 'gray', fontWeight: 'bold', color: 'black', padding: 5, borderRadius: 4, borderColor: 'black', alignItems:'center'}}>
          <Text style={{fontSize:20, fontWeight: 'bold',}}>Choosed Topping:</Text>
          {chossedTopping.map((value, index) => (
            <TouchableOpacity key={index}> {value.topping}  {value.price} </TouchableOpacity>)
          )}
          <Text style={{fontSize:20, fontWeight: 'bold',}}>Total Price: {totalPrice}</Text>
        </View>
      </SafeAreaView>
    )
  }
  // end of class
}




const stylePizza= StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
  }
});