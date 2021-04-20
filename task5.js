//Instagram UI with delete Button
//App.js
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Alert, Text, View, Image, SafeAreaView, ScrollView,  TouchableOpacity } from 'react-native';
import Post from './Post';
import like from './imagePath';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    postsArray: [
      {
        id:1,
        personName: 'Ankita Sandhu',
        locationText: 'Apna Hamirpur',
        postImage: 'https://koreyhowellphotography.com/wp-content/uploads/2017/09/AdobeStock_122362963-1028x675.jpg',
        likeImage: require('./assets/Image/likes.jpg') ,
        deleteImage: require('./assets/Image/trash.jpg'),
        circleImage: require('../hello/assets/Image/post.jpg'),
        captionText: 'The greatest happiness you can have is knowing that you do not necessarily require happiness.'


      },
      {
        id:2,
        personName: 'Aditi Gupta',
        locationText: 'Jamnagar, Gujrat',
        postImage: 'https://koreyhowellphotography.com/wp-content/uploads/2017/09/AdobeStock_122362963-1028x675.jpg',
        likeImage: require('./assets/Image/likes.jpg') ,
        deleteImage: require('./assets/Image/trash.jpg'),
        circleImage: require('../hello/assets/Image/post.jpg'),
        captionText: 'The greatest happiness you can have is knowing that you do not necessarily require happiness.'





      },
      {
        id:3,
        personName: 'Anku',
        locationText: 'Hii, I am Ankita From Himachal Pradesh',
        postImage: 'https://koreyhowellphotography.com/wp-content/uploads/2017/09/AdobeStock_122362963-1028x675.jpg',
        likeImage: require('./assets/Image/likes.jpg') ,
        deleteImage: require('./assets/Image/trash.jpg'),
        circleImage: require('../hello/assets/Image/post.jpg'),
                captionText: 'The greatest happiness you can have is knowing that you do not necessarily require happiness.'


      },
      ]
    }
  }

  
  onDelete=(id)=>
  { alert('Are You want to delete Post?'),
     [
       {
         text: "Cancel",
         onPress: ()=> console.log("Cancel Pressed")
       },
       {
         text: "OK", onPress: ()=>{
           let newarr = [...this.state.postsArray];
           console.log(newarr,'the new arrr')
           let newarr1 = newarr.filter((value)=>value.id!=id)
           this.setState(
             {postsArray:newarr1}
             )


         }
       }

     ],
     {
       cancelleable: false
     }
   console.log(id,'the id vlari')


  }

  render() {
    const { postsArray } = this.state;

    return (
        <ScrollView>
          
<Image style={{width: 110, height: 70, marginTop: 0, marginBottom: 10, marginLeft: 120}} source={require("../hello/assets/Image/logo.jpg")}/>
          

          {

            postsArray.map((value, index)=>{
              return(
                <Post  data={value} key={index} onPress={this.onDelete} onDelete={this.onDelete}></Post>
              )
            })

}
           
        </ScrollView>

    )
  }
}









//imagePath.js
export default{
    like: require("../hello/assets/Image/likes.jpg"),
    trash: require("../hello/assets/Image/trash.jpg"),
    smallImage: require("../hello/assets/Image/post.jpg"),
    

}

//Post.js
import React from 'react'
import { render } from 'react-dom'
import { Alert, Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import imagePath from './imagePath';
import like from './imagePath';

function Post(props){
  const {data,onDelete,id}=props
return (
  

  

    <View style={{backgroundColor:'white', width:'100%', height:500,margin:5}}>
      <Image style={{width: 50, height: 50, borderRadius: 30}} source={imagePath.smallImage}/>

      <Text style={{fontWeight: 'bold', marginLeft: 60, marginTop: -40}}> {data.personName} </Text>
      <Text style={{ marginLeft: 60, marginTop: -5}}> {data.locationText}</Text>

      <Image style={{height: 350, width: '100%', marginTop: 15}} source={data.postImage}/>
      <Image style={{height: 30, width: 150}} source={imagePath.like}/>
      <TouchableOpacity   onPress={()=>onDelete(data.id)}>
        <Image style={{height: 35, width: 30, marginLeft: 300, marginTop: -30}} source={imagePath.trash} />
        </TouchableOpacity>
        <Text style={{ marginTop: -3}}> {data.captionText}</Text>



        
    </View>
  )
}

export default Post;
