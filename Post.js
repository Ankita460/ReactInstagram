import React from "react";
import { render } from "react-dom";
import {
  Alert,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";

function Post(props) {
  const {data, onDelete,closeModal, update, onEdit } = props;
  const {
    personName,
    captionText,
    deleteImage,
    editImage,
    locationText,
    circleImage,
    postImage,
    likeImage,
    id,
    showModal,
    addPost
  } = data;
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        height: 500,
        margin: 5,
      }}

      
    >
    
      
      {showModal&&<View style={{zIndex:99, height:800, width: 300, top:0, margin: 10, backgroundColor:'lightgrey', position:'absolute', alignItems:'center', justifyContent:'center'}}>
        <TextInput
          onChangeText={(text) => {
            update(text, id);
          }}
          style={{ width: 100, height: 50 }}
          placeholder="Enter the Text"
        ></TextInput>

        <TouchableOpacity onPress={()=>closeModal(id)}>Submit</TouchableOpacity>
      </View>}
      <Image
        style={{ width: 50, height: 50, borderRadius: 30 }}
        source={circleImage}
      />
     

      <Text style={{ fontWeight: "bold", marginLeft: 60, marginTop: -40 }}>
        {" "}
        {personName}{" "}
      </Text>
      <Text style={{ marginLeft: 60, marginTop: -5 }}> {locationText}</Text>
<Image style={{width: 50, height: 30, marginLeft: 310, marginTop: -30}} source={require("../hello/assets/Image/dot.png")}/>
      <Image
        style={{ height: 350, width: "100%", marginTop: 15 }}
        source={postImage}
      />

      <Image style={{ height: 30, width: 150 }} source={likeImage} />
      <TouchableOpacity onPress={()=>onEdit(id)}>
        <Image
          style={{ height: 35, width: 30, marginTop: -30, marginLeft: 270}}
          source={editImage}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(data.id)}>
        <Image
          style={{ height: 30, width: 30, marginLeft: 300, marginTop: -30 }}
          source={deleteImage}
        />
      </TouchableOpacity>
      <Text style={{ marginTop: -3 }}> {captionText}</Text>
    </View>
  );
}

export default Post;

