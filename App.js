import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Post from "./Post";
import like from "./imagePath";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsArray: [
        {
          id: 1,
          showModal: false,
          personName: "Ankita Sandhu",
          locationText: "Apna Hamirpur",
          postImage: require("../hello/assets/Image/post.jpg"),
          likeImage: require("./assets/Image/likes.jpg"),
          deleteImage: require("./assets/Image/trash.jpg"),
          editImage: require("../hello/assets/Image/edit.png"),

          circleImage: require("../hello/assets/Image/post.jpg"),
          captionText:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        },
        {
          id: 2,
          showModal: false,
          personName: "the_beautiful_Mountain",
          locationText: "Dalhousie, Himachal Pradesh",
          postImage: require("../hello/assets/Image/travel.jpg"),
          likeImage: require("./assets/Image/likes.jpg"),
          deleteImage: require("./assets/Image/trash.jpg"),
          editImage: require("../hello/assets/Image/edit.png"),

          circleImage: require("../hello/assets/Image/post.jpg"),
          captionText:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        },
        {
          id: 3,
          showModal: false,
          personName: "the_hight_mountain",
          locationText: "Manali, Himachal Pradesh",
          postImage: require("../hello/assets/Image/trash1.jpg"),
          likeImage: require("./assets/Image/likes.jpg"),
          deleteImage: require("./assets/Image/trash.jpg"),
          editImage: require("../hello/assets/Image/edit.png"),
          circleImage: require("../hello/assets/Image/post.jpg"),
          captionText:
            "The greatest happiness you can have is knowing that you do not necessarily require happiness.",
        },
      ],
      addPostView: false,
      person_name:'',
      person_location:'',
      add_position:'',
      data: [],
    };
  }

  onDelete = (id) => {
    console.log(id, "the id vlari");

    let newarr = [...this.state.postsArray];
    console.log(newarr, "the new arrr");
    let newarr1 = newarr.filter((value) => value.id != id);
    this.setState({ postsArray: newarr1 });
  };
  update = (Text, id) => {
    let { postsArray } = this.state;
    let newarray = [...postsArray];
    newarray.map((value) => {
      if (value.id == id) {
        value.captionText = Text;
      }
    });
    this.setState({
      postsArray: newarray,
    });
  };

  onEdit = (id) => {
    let { postsArray } = this.state;
    let newarray = [...postsArray];
    newarray.map((value) => {
      if (value.id == id) {
        value.showModal = true;
      }
    });
    this.setState({
      postsArray: newarray,
    });
  };

  closeModal = (id) => {
    let { postsArray } = this.state;
    let newarray = [...postsArray];
    newarray.map((value) => {
      if (value.id == id) {
        value.showModal = false;
      }
    });
    this.setState({
      postsArray: newarray,
    });
  };

  onAddButtonClick = () => {
    // console.log("Hello");
    this.setState({
      addPostView: true,
    });
  };

  _onChangeText(keyItem){


  return (value)=>{
    this.setState({
      [keyItem]:value,
    })

  }

  }

  onAddNewPost=()=>{
      const {person_name, person_location, postsArray,add_position}=this.state;


      let newObj={};
      newObj["personName"]=person_name;
      newObj["locationText"]=person_location;

      let newPostsAry=[...postsArray];

       newPostsAry.splice(add_position-1,0,newObj);

        this.setState({
          postsArray:newPostsAry
        })
  }

  textSearch=(value) =>{
    const{ postsArray , data } = this.state;
    let text=value.toLowerCase();
    let otherArray=[...postsArray]
    if(text=="")
    {
      this.setState({postsArray:data})
    }
    else{
      let filterArray=otherArray.filter((item)=>{
        return item.personName.toLowerCase().match(text)
      })
      this.setState({postsArray: filterArray})
    }
  }
componentDidMount(){
  const {postsArray}=this.state
  let newArrayPost=[...postsArray]
  this.setState({data:newArrayPost})
}
  render() {
    const { postsArray, addPostView,person_name,person_location,add_position } = this.state;

    return (
      <ScrollView>
        <Image
          style={{
            width: 110,
            height: 70,
            marginTop: 0,
            marginBottom: 10,
            marginLeft: 120,
          }}
          source={require("../hello/assets/Image/logo.jpg")}
        />
        <TouchableOpacity onPress={this.onAddButtonClick}>
          <Image
            style={{
              width: 45,
              height: 30,
              marginTop: -65,
              marginBottom: 10,
              marginLeft: 10,
            }}
            source={require("../hello/assets/Image/add.png")}
          />
        </TouchableOpacity>
        <Image
          style={{
            width: 45,
            height: 30,
            marginTop: -60,
            marginBottom: 30,
            marginLeft: 320,
          }}
          source={require("../hello/assets/Image/mesg.png")}
        />
        {addPostView && (
          <View
            style={{
              height: 200,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
            }}
          >
            <TextInput
              placeholder="Enter name"
              value={person_name}

              style={{
                borderWidth: 2,
                borderRadius: 2,
                borderColor: "white",
                width: 130,
                height: 50,
                backgroundColor: "white",
              }}
              onChangeText={this._onChangeText('person_name')}
            ></TextInput>
            <TextInput
              placeholder="Enter location"
              value={person_location}
              style={{
                borderWidth: 2,
                borderRadius: 2,
                backgroundColor: "white",
                borderColor: "white",
                width: 130,
                height: 50,
                marginVertical: 5,
              }}

              onChangeText={this._onChangeText('person_location')}

            ></TextInput>

<TextInput
              placeholder="Enter position"
              value={add_position}
              style={{
                borderWidth: 2,
                borderRadius: 2,
                backgroundColor: "white",
                borderColor: "white",
                width: 130,
                height: 50,
                marginVertical: 5,
              }}

              onChangeText={this._onChangeText('add_position')}

            ></TextInput>


            <TouchableOpacity
              style={{
                backgroundColor: "green",
                height: 50,
                width: 110,
                alignItems: "center",
                justifyContent: "center ",
              }}

              onPress={this.onAddNewPost}
            >
              <Text style={{ fontSize: 16, color: "white" }}>Add Post</Text>
            </TouchableOpacity>
          </View>
        )}
        <TextInput
          onChangeText={this.textSearch}
          style={{
            width: 374,
            height: 40,
            backgroundColor: "lightgray",
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          placeholder="Search"
        ></TextInput>

        {postsArray.map((value, index) => {
          return (
            <Post
              closeModal={this.closeModal}
              onEdit={this.onEdit}
              onAddImage={this.onAddImage}
              update={this.update}
              data={value}
              key={index}
              onPress={this.onDelete}
              onDelete={this.onDelete}
            ></Post>
          );
        })}
      </ScrollView>
    );
  }
}
