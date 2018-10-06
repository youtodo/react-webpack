import React from "react";
import ReactDOM from "react-dom";
import FormContainer from "./components/container/FormContainer";
import UserRoute  from "./components/route/route.js"

ReactDOM.render(
    <UserRoute/>,
    document.getElementById('root')
  );
ReactDOM.render(
  <FormContainer/>,
  document.getElementById('weather')
);