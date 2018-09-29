import React, { Component } from 'react';
import './App.scss';
import { temas } from './temas';

class App extends Component {
  renderTopicos(tema){
    console.log(tema);
    return tema.topicos.map((topico, index)=>{
      return (
      <div key = {index}>
        { topico.titulo }
      </div>)
    });
  }
  renderTemas(){
    return temas.Basico.map((tema, index)=>{
      return(
        <div key = {index}>
          <h2>{ tema.titulo }</h2>
          <p>
            { this.renderTopicos(tema) }
          </p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="App">
        { this.renderTemas() }
      </div>
    );
  }
}

export default App;
