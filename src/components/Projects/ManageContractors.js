import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import ManageContractorsImage from './images/manage-contractors.png';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const ManageContractors = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <div className="project-image">
        <img src={ManageContractorsImage} alt="AI Project" />
      </div>
      <Typography variant="h2">
        <a href='https://' target='_blank' rel='noopener noreferrer' className="project-title">AI Contractor Manager</a>
      </Typography>

      <div className='project-buttons'>
        <Button size="small" variant='outlined' href='https://www.figma.com/board/h72sLQ66yk9CaiiiL5F1fW/AI-AMC-White-Board?node-id=0-1&t=5vPpu5HgyMNHpoVd-1' target='_blank'>Whiteboard</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/design/bDf2VN6niG5wYMTL4Eejo4/AI-AMC-Design?node-id=0-1&t=MMROurDNtqlEurGD-1' target='_blank'>MVP Design</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/proto/bDf2VN6niG5wYMTL4Eejo4/AI-AMC-Design?node-id=1-9&t=sksWoG6PGfZpbSji-1' target='_blank'>Pitch Deck</Button>
      </div>
      <Divider sx={{ mb: 3 }} />

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description1">
        After facing setbacks with two startup ideas, I continued searching for new challenges to tackle. My wife runs a bookkeeping business and works with several clients in the telecommunications industry. She mentioned that these clients handle contractor payrolls weekly, using manual methods like Excel sheets and Google Drive. The business owners were frustrated with the repetitive, manual tasks involved.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description2">
        Seeing this as a significant problem, I realized we had a ready market eager for automation. My wife’s deep understanding of the manual processes and her connections in the industry made it a perfect opportunity. I researched available solutions and found none that effectively addressed the contractor weekly payroll issue. Conversations with other business owners confirmed that this was a common pain point.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description3">
        Encouraged by the clear B2B problem and the enthusiasm from potential users, I developed an MVP prototype and pitch deck. Sharing these with several businesses garnered positive feedback. The MVP resonated well with telecom business owners, validating the need for a solution that simplified payroll, tracked equipment, and improved contractor communication.
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }} className="project-description4">
        Despite the positive validation and demand, I faced significant challenges in securing the funding necessary to advance the project. This difficulty in obtaining resources, coupled with financial strains, led me to pause my entrepreneurial efforts. I recognized that I still had much to learn and decided to focus on gaining more experience from experts. My goal is to either build a successful startup in the future or join an existing venture as a CTO. Overall, the experience was invaluable; it provided deep insights into the startup world that I wouldn’t have gained otherwise.
      </Typography>
    </Container>
  );
}

export default ManageContractors;
