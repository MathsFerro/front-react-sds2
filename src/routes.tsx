import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Orders } from "./Orders";

// npm install react-router-dom
// npm install @types/react-router-dom

export function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Switch>
        
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/orders">
          <Orders />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}