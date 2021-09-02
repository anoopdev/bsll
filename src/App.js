import React from 'react';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Page from './components/Page';
import NotFound from './components/NotFound';
function App() {
  return (
    <Router>
    		<Switch>
    			<Route exact path="/" component={Home}></Route>
				<Route exact path="/about-us" component={Page}></Route>
				
				
    			<Route component={NotFound} />
    		</Switch>
    	</Router>
     
    

  );
}

export default App;
