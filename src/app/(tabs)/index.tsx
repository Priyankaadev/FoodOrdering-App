import {  View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";


export default function MenuScreen() {
  return (
   <View>
    <ProductListItem product={products[0]} />
    <ProductListItem product={products[1]} />
    <ProductListItem product={products[2]} />
    <ProductListItem product={products[3]} />

   </View>
  );
}

