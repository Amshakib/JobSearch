// src/components/JobCard.js
// import React from 'react';
// import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';

// const JobCard = ({ job }) => {
//   const theme = useTheme();

//   return (
//     <Card style={{ margin: '15px', flexBasis: '30%', borderColor: theme.palette.primary.main }}>
//       <CardActionArea component={Link} to={`/job/${job.slug}`}>
//         <CardContent>
//           <Typography variant="h5" component="div" style={{ color: theme.palette.primary.main }}>
//             {job.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {job.company_name}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {job.location}
//           </Typography>
//           <Typography variant="body2" color="textSecondary">
//             {job.description}
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//     </Card>
//   );
// };

// const JobCard = ({ job }) => {
//     return (
//       <div className="job-card">
//         <CardActionArea component={Link} to={`/job/${job.slug}`}>
//           <h2>{job.title}</h2>
//           <h4>{job.company_name}</h4>
//           <p>{job.location}</p>
//           <p>{job.description}</p>
//         </CardActionArea>
//       </div>
//     );
//   };

// export default JobCard;

// src/components/JobCard.js
import React from 'react';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <CardActionArea component={Link} to={`/job/${job.slug}`}>
        <h2>{job.title}</h2>
        <h4>{job.company_name}</h4>
        <p>{job.location}</p>
        <p dangerouslySetInnerHTML={{ __html: job.description }}></p>
        <div className="tags">
          {job.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </CardActionArea>
    </div>
  );
};

export default JobCard;

