//Task-1 Create 4 Buttons Increment, Decrement, Press, and Clear and When we click on Increment Button color will be change
import React,{ Component }  from 'react';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView}from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: 1,
            iterator: 1,
            chossedTopping: "Nothing"
        }
    }
   
        onPressButton=() =>{
            this.setState({
iterator: +1            
            });


          


        }
        onPressMinusButton=() =>{
            this.setState({
            iterator: -1                
            });
      
        }
        onPressMeButton=() =>{
            this.setState({
                counter: this.state.counter + this.state.iterator
            });
            if(this.state.counter%10==0){
                alert("Count" + this.state.counter);
       }
        }
        onClearButton=() =>{
            this.setState({counter: 0, iterator: 0})
        }
       

        render(){
            let {counter, iterator}= this.state;
            return(
                <SafeAreaView style={style.container}>

                      <View style={{width: 200, height: 200, backgroundColor: "pink", padding: 10, alignItems: 'center', borderRadius: 4}}>
                        <Text style={{fontWeight: 'bold', color: "red"}}>Result: {this.state.counter}</Text>
                <Text style={{fontWeight: 'bold', color: "green"}}>Pressed Times :- {this.state.iterator}</Text><br></br>
            
                <TouchableOpacity style={{ padding: 5, borderRadius: 10, marginBottom: 5, backgroundColor: this.state.iterator==+1?"green":"yellow"}} onPress={this.onPressButton}>  <Text style={{fontWeight: 'bold', color: "black"}}>Increment Count</Text></TouchableOpacity>
                <TouchableOpacity style={{ padding: 5, borderRadius: 10, marginBottom: 5, backgroundColor:this.state.iterator==-1?"red":"green"}} onPress={this.onPressMinusButton}>  <Text style={{ fontWeight: 'bold', color: "black"}}>Decrement Count</Text> </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "gray", padding: 5, borderRadius: 10, marginBottom: 5}} onPress={this.onPressMeButton}>  <Text style={{fontWeight: 'bold', color: "black"}}>Press Me</Text> </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: "gray", padding: 5, borderRadius: 10, marginBottom: 5}} onPress={this.onClearButton}>  <Text style={{fontWeight: 'bold', color: "black"}}>Clear Me</Text> </TouchableOpacity>

                </View>

                
                       
                  
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
