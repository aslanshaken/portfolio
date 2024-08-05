import React from 'react';
import { Link } from 'react-router-dom';
import './Education.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const Education = () => {
  return (
    <div className='education'>
      <div className="education__first">
        <h3>Academic Programs</h3>
        <div className='education__content'>
          <List className="education-card">
            <ListItem>
              <ListItemText
                primary="Degree Earned:"
                secondary="Associate of Applied Sciences (A.A.S.)"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Field of Study:"
                secondary="Computer Network Technology"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Institution:"
                secondary="Borough of Manhattan Community College"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Location:"
                secondary="New York City"
              />
            </ListItem>
          </List>
          <List className="education-card">
            <ListItem>
              <ListItemText
                primary="Degree Earned:"
                secondary="Bachelor of Technology (B.T.)"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Field of Study:"
                secondary="Computer Systems (Software Development)"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Institution:"
                secondary="New York City College of Technology"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Location:"
                secondary="New York City"
              />
            </ListItem>
          </List>
        </div>
      </div>
      <div className="education__second">
        <h3>Certifications</h3>
        <div className='education__certification__content'>

          <List className="education-certification-card">
            <ListItem>
              <ListItemText
                primary="Name:"
                secondary="Coding bootcamp 500+ hours"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="General Assembly"
              />
            </ListItem>
          </List>

          <List className="education-certification-card">
            <ListItem>
              <ListItemText
                primary="Name:"
                secondary="Software Engineering Cources"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Saylor Academy"
              />
            </ListItem>
          </List>

          <List className="education-certification-card">
            <ListItem>
              <ListItemText
                primary="Name:"
                secondary="IT Support"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </List>

          <List className="education-certification-card">
            <ListItem>
              <ListItemText
                primary="Name:"
                secondary="Project Management"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </List>

          <List className="education-certification-card">
            <ListItem>
              <ListItemText
                primary="Name:"
                secondary="Data Analytics"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </List>

          <List className="education-certification-card">
            <ListItem>
              <ListItemText
                primary="Name:"
                secondary="Technical Support"
              />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText
                primary="Issued by:"
                secondary="Google"
              />
            </ListItem>
          </List>

        </div>
      </div>
    </div>
  );
};

export default Education;
