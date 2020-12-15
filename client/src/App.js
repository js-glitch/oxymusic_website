import './App.css';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Home from './Components/Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Footer from './Components/Footer';


//import admin component
import Admin from './Components/Admin'

//Routes not included
//import Register from './Components/auth/Register'
//import Login from './Components/auth/Login'


import {Provider} from 'react-redux'
import store from './store'
import { loadUser} from './Actions/authActions';
import { Component } from 'react';

class App extends Component{

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render(){
    return (
        <Provider store = {store}>
        <Router>
          <div className="App">
            <Nav/>
            <Switch>
              <Route  exact path = "/" component ={Home} />
              <Route path = "/blogs" component ={Blogs} />
              <Route path = "/contact" component ={Contact} />
              <Route path = "/confidential" component ={Admin} />

              {
                /* routes not included
                  <Route path = "/register" component ={Register} />
                  <Route path = "/login" component ={Login} />
                */
              }
             
           </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
    
  }

}

export default App;
