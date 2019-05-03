import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

class App extends React.Component {
  state = {
    users: [],
    groups: [],
    currentUser: null
  };

  login(user) {
    if (this.state.user.includes(user))
      this.setState({
        currentUser: user
      });
  }

  componentDidMount() {
    fetch("http://localhost:3000/users")
      .then(resp => resp.json())
      .then(users => {
        this.setState({
          users
        });
      });
    fetch("http://localhost:3000/groups")
      .then(resp => resp.json())
      .then(groups => {
        this.setState({
          groups
        });
      });
  }

  render() {
    return (
        {this.state.currentUser ?
          <div>
<User />
</div>
        :
        <div>
        <Router>
          <NavBar />
            <Route path="/" component={Home} />
            <Route exact path="/login" component={Login} login={this.login} />
            <Route exact path="/signup" component={SignUp} />

        </Router>
        </div>
    );
  }
}


      }


export default App;
