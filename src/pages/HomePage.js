// src/pages/HomePage.js
import React from 'react';
import SearchBar from '../components/SearchBar';
import JobGrid from '../components/JobGrid';

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <JobGrid />
    </div>
  );
};

export default HomePage;
