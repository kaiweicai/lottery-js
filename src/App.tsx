import React from 'react';
import logo from './logo.svg';
import { Routing,WalletConnectSelector } from 'pages';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.scss';
import {Header} from "components";

function App() {
  return (
    <Router>
      <Header isAccountVisible={true} />
      <WalletConnectSelector/>
      <main>{ <Routing /> }</main>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
