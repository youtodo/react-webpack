import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InputSearch from "../container/InputSearch";

const UserRoute = () => (

  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Поиск</Link>
        </li>
        <li>
          <Link to="/favorites">Избранное</Link>
        </li>
        <li>
          <Link to="/forecast">Прогноз</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Search} />
      <Route path="/favorites" component={About} />
      <Route path="/forecast" component={Topics} />
    </div>
  </Router>
);
let url = 'london2';
const Search = () => (
  <div>
    <InputSearch value='haha' url={'/api/location/search/?query='+url} />    
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default UserRoute;