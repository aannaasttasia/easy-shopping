import { Component } from "react";

export interface ProductType {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
  }
  
 
class Product extends Component<{product : ProductType}> {
    constructor(props:{product : ProductType}){
        super(props)
    }

    render() { 
        return (
            <div key={this.props.product.id}>
                <h1>{this.props.product.title}</h1>
            </div>
        );
    }
}
 
export default Product;