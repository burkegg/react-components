  // TODO
var App = () => (
  <div>
    <h1>My grocery list</h1>
    <GroceryList todos={['broccoli', 'cukes', 'soda']}/>
  </div>
)




var GroceryList = (props) => {



  return (
  <ul id = 'myGroceryList'>
    {props.todos.map(todo => 
      <GroceryListItem todo={todo} />
      )}
  </ul>
  );
}

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
      fontWeight: this.state.done ? 'bold' : 'normal'
    };

    return (
        <li style = {style} 
        onMouseEnter={this.onListItemClick.bind(this)}
        onMouseLeave={this.onListItemClick.bind(this)}
        >{this.props.todo}</li>
    );

  }
}



var onListItemClick = (event) => {
  console.log('I got clicked');
};



ReactDOM.render(<App/>, document.getElementById('app'));
