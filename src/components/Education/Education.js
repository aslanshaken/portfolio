import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Education = () => {
  return (
    <div className='education'>
      <div className="education__content">
        <h3>Academic Programs</h3>
        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Associate of Applied Sciences (A.A.S.)
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Field of Study:"
                secondary="Computer Network Technology"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Institution:"
                secondary="Borough of Manhattan Community College"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Location:"
                secondary="New York City"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>
        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Bachelor of Technology (B.T.)
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Field of Study:"
                secondary="Computer Systems (Software Development)"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Institution:"
                secondary="New York City College of Technology"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Location:"
                secondary="New York City"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="education__content">
        <h3>Certifications</h3>
        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Coding Bootcamp 500+ hours
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="General Assembly"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Software Engineering Courses
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Saylor Academy"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            IT Support
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4-content"
            id="panel4-header"
          >
            Project Management
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5-content"
            id="panel5-header"
          >
            Data Analytics
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>

        <Accordion className='education__accordion'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6-content"
            id="panel6-header"
          >
            Technical Support
          </AccordionSummary>
          <AccordionDetails>
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </AccordionDetails>
        </Accordion>

      </div>
    </div >
  );
};

export default Education;
