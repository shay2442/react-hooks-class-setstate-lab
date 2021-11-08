import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
   super(props);
   this.state= {
   items: itemData,
   isDarkMode: false,
 }
  this.handleDarkModeClick = this.handleDarkModeClick.bind(this)
}
  // const [items, setItems] = useState(itemData);
  // const [isDarkMode, setIsDarkMode] = useState(false);

   handleDarkModeClick() {
    // this.setIsDarkMode((isDarkMode) => !this.state.isDarkMode);
    this.setState({isDarkMode: !this.state.isDarkMode})
  }
render() {
  return (
    <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={this.handleDarkModeClick}>
          {this.state.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={this.state.items} />
    </div>
  );
}
}


export default App;
