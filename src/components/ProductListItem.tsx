import {  Image, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const ProductListItem = ({product})=>{
 
  return(
     <View style={styles.container} key={product.id}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    
    </View>
  )
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding:10,
    borderRadius:20
  },
  image:{
    width:'100%',
    aspectRatio:1
  },
  title: {
    color: Colors.light.text,
    fontSize: 18,
    fontWeight: 600,
    marginVertical:10,
  },
  price: {
    color:Colors.light.tint,
    fontSize: 14,
 
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});