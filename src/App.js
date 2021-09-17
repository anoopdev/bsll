import React from 'react';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';
import Header from './components/Header'
import Footer from './components/Footer';
import NotFound from './components/NotFound';
function App() {
  return (
	<div id="wrapper" className="homepage homepage-1">
		
    <Router>
    <Header />
    		<Switch>
    			<Route exact path="/" component={Home}>

			</Route>
				<Route exact path="/about-us" component={Page}></Route>
				
				
    			<Route component={NotFound} />
    		</Switch>
		    <Footer />
    	</Router>
	   
	</div>
    

  );
}

export default App;
