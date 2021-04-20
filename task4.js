//Task-4 Print Mount
import React,{ Component }  from 'react';
import { StyleSheet, Text, View , TouchableOpacity, SafeAreaView}from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            
            mountNumber: 0,
            
        }
    }
    componentDidMount(){
        this.setState({
            mountNumber: 2
        })
    }



    

        render(){
            let {counter, iterator}= this.state;
            return(
                <SafeAreaView style={style.container}>
                                    <Text style={{fontWeight: 'bold'}}>Mount: {this.state.mountNumber} </Text>

                     

                
                       
                  
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
