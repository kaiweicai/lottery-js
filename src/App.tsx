import React from 'react';
import logo from './logo.svg';
import { Routing } from 'pages';
import './App.css';
import {Header} from "components";

function App() {
  return (
    <>
      <Header isAccountVisible={true} />
      <main>{ <Routing /> }</main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
