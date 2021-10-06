// TODO
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems={['bananas', 'pears', 'coookies']}/> 
  </div>
);

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem => 
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };
    return (
      <li style={style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.groceryItem}</li>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));

// var Bananas = () => (
//   <div>
//     <li>Bananas</li>
//   </div> 
// );

// var Pears = () => (
//   <div>
//     <li>Pears</li>
//   </div> 
// );

// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     alert('I got clicked');
//   };
  
  
//   return (
//     <ul>
//     <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
//   );

// };

