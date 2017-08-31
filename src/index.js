//referencia a librerias
import React, { Component } from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSerch from 'youtube-api-search';
//referencia a otros componentes
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCcQGvYO9kzD-d_Tc9AMckd2iTQkW0DnA4';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos:[],
      selectedVideo: null
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term){
    YTSerch({key: API_KEY, term: term}, videos => {
      //si se llaman igual puedo escribir viedos en vez de videos: videos
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}


//CREAR UN COMPONENTE QUE PRODUCE HTML
//las const son el valor final de una variable significa que no va a cambair
//esta es la clase no la instancia del componente
/*
const App = () => { // () => equivale a funcion()
    return (
      <div>
        <SearchBar />
      </div>
    );
}*/


//PONER EL COMPONENTE EN LA PAGINA (EN EL DOM)
//la instancia de la clase App es <App />
ReactDOM.render(<App />, document.querySelector('.container'));

export default SearchBar;
