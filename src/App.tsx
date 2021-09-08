import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Posts from "./features/Posts/pages/Posts";
import "./theme/styles.scss";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/">
                    <Posts />
                </Route>
            </Switch>
            <ToastContainer autoClose={5000} />
        </div>
    );
}

export default App;
