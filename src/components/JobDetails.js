// src/components/JobDetails.js
// import React, { useContext, useEffect, useState } from 'react';
// import { JobContext } from '../context/JobContext';
// import { useParams } from 'react-router-dom';
// import { Typography, Chip } from '@mui/material';

// const JobDetails = () => {
//   const { jobs } = useContext(JobContext);
//   const { slug } = useParams();
//   const job = jobs.find(job => job.slug === slug);
//   const [jobDesc, setJobDesc] = useState('')

//   if (!job) return <Typography variant="h6">Job not found</Typography>;

//   useEffect(() => {
//     if(job) {
//       setJobDesc(job.description)
//     }
//   },[job])

//   return (
//           <div dangerouslySetInnerHTML={{ __html: jobDesc }} />


         

      // {/* <Typography variant="h4">{job.title}</Typography>
      // <Typography variant="h6">{job.company_name}</Typography>
      // <Typography variant="body1">{job.location}</Typography>
      // <Typography variant="body1">{job.description}</Typography>
      // <div style={{ marginTop: '10px' }}>
      //   {job.tags.map(tag => (
      //     <Chip key={tag} label={tag} style={{ marginRight: '5px' }} />
      //   ))}
      // </div>
      // <Typography variant="body2" color="textSecondary">{job.job_types.join(', ')}</Typography> */}
//   );
// };

// export default JobDetails;


// import React, { useContext, useEffect, useState } from 'react';
// import { JobContext } from '../context/JobContext';
// import { useParams } from 'react-router-dom';
// import Typography from '@material-ui/core/Typography';
// import { Typography, Chip } from '@mui/material';

import React, { useContext, useEffect, useState } from 'react';
import { JobContext } from '../context/JobContext';
import { useParams } from 'react-router-dom';
import { Typography, Chip } from '@mui/material';
// import './styles.css'; 



const JobDetails = () => {
  const { jobs } = useContext(JobContext);
  const { slug } = useParams();
  const [jobDesc, setJobDesc] = useState('');

  // Find the job
  const job = jobs.find((job) => job.slug === slug);

  useEffect(() => {
    if (job) {
      setJobDesc(job.description);
    }
  }, [job]);

  if (!job) return <Typography variant="h6">Job not found</Typography>;

  return (
    <div className="container">
    <div dangerouslySetInnerHTML={{ __html: jobDesc }} />
    </div>
  );
};

export default JobDetails;
