import axios from "axios";
import { ProductType } from "../components/Product/Product";

export async function getData():Promise<ProductType[]> {
    const res = await axios.get("https://dummyjson.com/products");
    console.log(res.data);
    return res.data.products;
  }