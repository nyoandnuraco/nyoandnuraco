import React from 'react'
import Neldo from '../pages/shop/neldo'
//import web from '../pages/web.jpg'
const Type =["Neldo Light Package", "Neldo Package", "Neldo Champ Package"];
const Package=["n","nl","nc"];
let cartList;
export const productCallBack = async (order, index) => {
    let updatedProducts = this.state.products;
    const currImg = updatedProducts[index].currImg;
    updatedProducts[index] = {currImg, order};
    await this.setState({products:updatedProducts});
}
export const typeCallBack = (changedType) => {
    this.setState({
        type:changedType
    })
    this.props.productCallBack(this.state, this.props.index)
}
export const ShoppingCart = (props) => {
 
    if(props.items.length === 0){
        return(
            <div className="scEmptyCart">
                Nothing In Cart
            </div>
        )
    } else
        return(
            <div className="scShoppingCart" id="shoppingCartScroll">
                <div>Your Items</div>
        <p>{props.items.length}</p>
        <ProductDisplay items={props.items}/>
            </div>
        )
    
}

export class ProductDisplay extends React.Component{    

componentDidMount = async () => {
    let productList = [];
    await this.props.items.map((currImg) => productList.push({currImg, order: {type:Type[0], quantity: 1}}))
    this.setState({products:productList})
}

render(){
   
    return (cartList = this.props.items.map((currImg, index)=> <Display image={currImg} index={index} key={index} productCallBack={this.productCallBack}/>))
}
}

export class Display extends React.Component{
    render(){
 
        return(
            <div key={this.props.index}>
                <figure>
                    <img src={this.props.image.src} alt={this.props.image.name} id={this.props.index}/>
                </figure>
                <form>
                  
                    <table>
                        <tbody>
                            <tr>
                                <td><b>Image Description:</b></td>
                                <td>{this.props.image.description}</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </form>
            </div>
        )
    }
}

class ShoppingCartPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cart:0,
            type:'Neldo Package'
        }
        this.handleClick = this.handleClick.bind(this);
      
    }


handleClick = async (e) => {
    await this.setState({type: e.target.value});
this.props.typeCallBack(this.state.type)
}
 
    render(){
    
        const scpcart = {
            backgroundColor: "purple",
            height: "100vh",
            width:"44vw",
            float:"right",
        }
        return(
            <section style={scpcart}>
                <ShoppingCart items={[this.state.type]}/>
                <h3>{this.state.type}</h3>
                <button value="Neldo Light Package" onClick={(e)=>this.handleClick(e)}>Add to Cart</button>
                <button value="Neldo Package" onClick={(e)=>this.handleClick(e)}>Add to Cart</button>
                <button value="Neldo Champ Package" onClick={(e)=>this.handleClick(e)}>Add to Cart</button>
              
            </section>
        )
    }
}

export default ShoppingCartPage

