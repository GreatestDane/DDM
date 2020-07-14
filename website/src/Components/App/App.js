import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../Elements/Header/Header.js'
import Home from '../Home/Home.js'
import VideoGallery from '../Elements/VideoGallery/Gallery/VideoGallery.js'


function App() {
  return (
    <div>
      <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path='/videogallery' component={VideoGallery} exact />
        </Switch>
      </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
