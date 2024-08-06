import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import RealtyRoomImage from './images/realtyroom.png';
import Button from '@mui/material/Button';

const RealtyRoom = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <div className="project-image">
        <img src={RealtyRoomImage} alt="Realty Room Project" />
      </div>
      <Typography variant="h2">
        <a href='https://realtyroom.co' target='_blank' rel='noopener noreferrer' className="project-title">Realty Room</a>
      </Typography>

      <div className='project-buttons'>
        <Button size="small" variant='outlined' href='https://www.figma.com/board/wyJygT0hJvPSpwYXVkxqJh/Commercial-Leasing-Process?node-id=0-1&t=W7M1ncjazFOcoicK-1' target='_blank'>Whiteboard</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/design/TDI0faOdiLxakII0wKLf74/Commercial-Leasing-Process?node-id=0-1&t=dEcQVpMlLCRmZcX8-1' target='_blank'>MVP Design</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/design/wKofpEoVFQ1hev7ikm8oRC/Start-Up-Draft?t=E2tE2alqbFMrTHI8-1' target='_blank'>Pitch Deck</Button>
      </div>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description1">
        <strong>Situation:</strong> I started Realty Room to create a platform that empowers commercial real estate brokers with AI tools to generate essential documents and provide immediate answers through an AI-powered chatbot. Despite having a strong vision and initial technological progress, the project faced significant challenges including logistical issues, poor market research, and limited networking opportunities. These factors ultimately led to the decision to halt further development.
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Task:</strong> As the founder and lead developer of Realty Room, my role involved conducting market research and designing a basic prototype to build the MVP. The task included creating a platform to automate document generation and integrating AI tools. I had to address challenges related to market fit, team building, and operational logistics.
        <ul>
          <li><strong>Development:</strong> Initiated the development of a full-stack MVP, focusing on essential features and integration.</li>
          <li><strong>Market Research:</strong> Conducted initial research to understand the needs of CRE brokers and designed a prototype based on these insights.</li>
          <li><strong>Technologies Used:</strong> Planned to use AI tools for document creation and data integration but faced challenges in execution.</li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Action:</strong>
        <ul>
          <li><strong>Prototyping and Design:</strong>
            <ul>
              <li><strong>Application Design:</strong> Designed a basic prototype to address broker needs and gathered initial feedback.</li>
            </ul>
          </li>
          <li><strong>Data Integration:</strong>
            <ul>
              <li><strong>Setup:</strong> Planned integration with various platforms for seamless data processing.</li>
              <li><strong>AI Integration:</strong> Designed workflows for AI processing of external and internal data.</li>
            </ul>
          </li>
          <li><strong>Networking and Partnerships:</strong>
            <ul>
              <li><strong>Co-Founder Search:</strong> Attempted to find a suitable co-founder and build a network to support the project.</li>
              <li><strong>Investor Engagement:</strong> Prepared pitch decks and engaged with potential investors.</li>
            </ul>
          </li>
        </ul>
      </Typography>

      <Typography variant="body1" sx={{ mb: 5 }} className="project-description">
        <strong>Result:</strong> Despite the development efforts, Realty Room faced several critical challenges:
        <ul>
          <li><strong>Logistical Issues:</strong> Difficulty in managing project logistics and integration processes.</li>
          <li><strong>Market Fit:</strong> Insufficient market research resulted in a misalignment between the product and broker needs.</li>
          <li><strong>Networking Constraints:</strong> Limited networking and partnership opportunities hindered growth and project success.</li>
        </ul>
        The experience provided valuable insights into the importance of thorough market research, effective logistical planning, and building strong networks for startup success.
      </Typography>
    </Container>
  );
}

export default RealtyRoom;
