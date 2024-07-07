// src/components/SearchBar.js
import React, { useContext, useState } from 'react';
import { JobContext } from '../context/JobContext';
import { TextField, Button, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Internship'];

const SearchBar = () => {
  const { filterJobs } = useContext(JobContext);
  const [input, setInput] = useState('');
  const [selectedJobType, setSelectedJobType] = useState('');

  const handleSearch = () => {
    filterJobs(input, selectedJobType);
  };

  return (
    <Box display="flex" alignItems="center" marginBottom="20px">
      <TextField
        label="Search Jobs"
        variant="outlined"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <FormControl variant="outlined" style={{ marginRight: '10px', minWidth: 120 }}>
        <InputLabel>Job Type</InputLabel>
        <Select
          value={selectedJobType}
          onChange={(e) => setSelectedJobType(e.target.value)}
          label="Job Type"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {jobTypes.map(type => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Box>
  );
};

export default SearchBar;
