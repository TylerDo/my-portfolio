import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Singlepost from './components/singlepost';
import Post from './components/post';
import Project from './components/project';
import NavBar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Singlepost} path='/post/:slug' />
        <Route component={Post} path='/post' />
        <Route component={Project} path='/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
