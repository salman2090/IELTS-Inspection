import './App.css';
// import Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
// boostrap stylesheet
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from './components/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="/services">
            <Services></Services>
          </Route>

          <Route path="/contacts">
            <Contacts></Contacts>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
