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
        I embarked on developing the AI Assistant to Manage Contractors and discovered a significant market opportunity. The MVP I created resonated strongly with business owners in the telecommunications sector, who were facing challenges with managing contractors. I validated the product through extensive feedback, which confirmed a genuine need for this solution. The platform effectively addressed issues like payroll processing, equipment tracking, and contractor communication. However, despite the positive response and clear demand, I encountered major difficulties in securing the funding needed to advance and scale the project. As a result, I was unable to continue beyond the initial stages.
      </Typography>
    </Container>
  );
}

export default ManageContractors;
