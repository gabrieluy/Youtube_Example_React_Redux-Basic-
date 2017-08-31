import React, {Component} from 'react';
//const Component = React.Component;  esto es lo que hace el {Component}

//funcional component
/*const SearchBar = () => {
    return <input />
};*/

//class based component (tine funcionalidad)
class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { term: '' };//solo en el constructor se manipula el estado asi
  }

  render() {
    //si solo tengo un parame tro le puedo sacar los parentesis a event
    //es lo mismo que (event) => console....
    //this.state.term = event.target.value MALLLLLL
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

  onInputChange(term){
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
