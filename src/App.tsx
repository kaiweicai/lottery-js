import React from 'react';
import logo from './logo.svg';
import { Routing } from 'pages';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import {Header} from "components";

function App() {
  return (
    <Router>
      <Header isAccountVisible={true} />
      <main>{ <Routing /> }</main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
