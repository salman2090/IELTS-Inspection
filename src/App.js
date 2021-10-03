import logo from './logo.svg';
import './App.css';
// import Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
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

          <Route path="/contactUs">
            <ContactUs></ContactUs>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
