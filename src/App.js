import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layouts/Header';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Articles from './components/Articles';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8090/articles")
      .then(res => setPosts(res.data))
      .catch(error => console.log(error));
  });
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Route to="/" render={() => <Articles posts={posts} />} />
      <Footer />

    </div>
  );
}

export default App;
