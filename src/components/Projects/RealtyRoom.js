import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import './Projects.css';
import RealtyRoomImage from './images/realtyroom.png';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const RealtyRoom = () => {
  return (
    <Container className="project-container">
      <Link to="/projects" className="back-link">Back to projects</Link>
      <Typography variant="h2">
        <a href='https://realtyroom.co' target='_blank' rel='noopener noreferrer' className="project-title">Realty Room</a>
      </Typography>
      <div className="project-image">
        <img src={RealtyRoomImage} alt="Realty Room Project" />
      </div>

      <div className='project-buttons'>
        <Button size="small" variant='outlined' href='https://www.figma.com/board/wyJygT0hJvPSpwYXVkxqJh/Commercial-Leasing-Process?node-id=0-1&t=W7M1ncjazFOcoicK-1' target='_blank'>Whiteboard</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/design/TDI0faOdiLxakII0wKLf74/Commercial-Leasing-Process?node-id=0-1&t=dEcQVpMlLCRmZcX8-1' target='_blank'>MVP Design</Button>
        <Button size="small" variant='outlined' href='https://www.figma.com/design/wKofpEoVFQ1hev7ikm8oRC/Start-Up-Draft?t=E2tE2alqbFMrTHI8-1' target='_blank'>Pitch Deck</Button>
      </div>
      <Divider sx={{ mb: 3 }} />

      <div className="project-description">
        <Typography variant="body1" sx={{ mb: 2 }}>
          After my challenging experience with the Cookk startup, where I learned a lot, I continued to explore how I could use my software engineering skills and entrepreneurial mindset to solve other problems. While helping a friend find a new location for his coffee shop franchise, I interacted with many commercial real estate (CRE) brokers and discovered that they perform a lot of manual tasks daily. This sparked the idea: why not automate these manual processes for CRE brokers?
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          The real estate sector always seemed promising with numerous opportunities. Drawing from my experience with Cookk, where I quickly developed an MVP, I decided to take a more slow approach with this new idea. I spent some time researching product-market fit and engaging with different CRE brokers. It became clear that AI could play a crucial role in automating their workflow, though I wasn’t sure initially which specific problems to address.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Later, I came across a startup on the YC Accelerator website that was tackling similar challenges in the CRE industry using AI. They were automating the generation of essential documents like marketing fliers, offering memorandums (OMs), broker opinion of value (BOVs), market reports, and had an AI-powered chatbot for immediate answers using internal and external data. I was impressed—they seemed to have nailed the problem and raised $500k in funding. I thought it was a strong product-market fit in this area.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Feeling inspired, my new pitch was: “We empower CRE brokers with AI tools to instantly generate essential documents like marketing fliers, OMs, BOVs, market reports, and an AI-powered chatbot that provides immediate answers using internal and external data.”
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          I began building a landing page and pitch deck to present to potential CRE brokers and investors, eager to get their feedback. I even developed 40% of the MVP prototype only (not product) to see how it’s going to work, but I questioned whether I was just wasting my time.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2 }}>
          Despite the effort, the landing page, MVP, and research took a significant amount of time. I reached out to CRE brokers in Austin, TX, through emails, LinkedIn, office visits, and phone calls. The response was disappointing. Out of 300 cold calls, only 10 responses came in, and they didn’t see the value in my product. I also attended local events and even paid for lunches to get feedback, but received none.
        </Typography>

        <Typography variant="body1" sx={{ mb: 5 }}>
          After several weeks of unproductive effort, I decided to stop the project. I struggled with finding a strong product-market fit, getting honest feedback from potential users, understanding the real estate industry, finding a reliable co-founder, lying to myself, and managing finances. However, this experience was invaluable in teaching me about product-market fit and the importance of persistence. Sometimes, it’s not about knocking the same door repeatedly but about finding new ones to open.
        </Typography>
      </div>
    </Container>
  );
}

export default RealtyRoom;
