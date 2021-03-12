import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import SignIn from "./pages/SignIn/Index.jsx";
import SignUp from "./pages/SignUp/Index.jsx";
import Home from "./pages/Home/Home.jsx";

import {UserContextProvider} from "./context/UserContext";

function App() {
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={SignIn}/>
                    <Route path="/signup" exact component={SignUp}/>
                    <Route path="/home" exact component={Home}/>
                    <Route path="*" exact component={()=>{ return <h1>404</h1>}}/>
                </Switch>
            </BrowserRouter>
        </UserContextProvider>
    );
}

export default App;