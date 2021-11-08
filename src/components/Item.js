import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInCart: false,
      name: props.name,
      category: props.category,
    }
    this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
  }

  // const [isInCart, setIsInCart] = useState(false);

  handleAddToCartClick() {
    // setIsInCart((isInCart) => !isInCart);
    this.setState({ isInCart: !this.state.isInCart})
  }



  render() {

  
  return (
    <li className={this.state.isInCart ? "in-cart" : ""}>
      <span>{this.state.name}</span>
      <span className="category">{this.state.category}</span>
      <button
        className={this.state.isInCart ? "remove" : "add"}
        onClick={this.handleAddToCartClick}
      >
        {this.state.isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
  }
}

export default Item;
