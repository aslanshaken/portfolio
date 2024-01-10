import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Ruby', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
  { name: 'Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg' },
  { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
];

export default function TextCarousel() {
  return (
    <Box sx={{ flexGrow: 1 }} className='p-5'>
      <h3 className="text-center mb-5">Skills</h3>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 8, sm: 8, md: 16 }}
        justifyContent="center"
      >
        {skills.map((skill, index) => (
          <Grid
            key={index}
            item
            xs={2}
            sm={2}
            md={3}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <img
              alt={skill.name}
              width='40%'
              src={`${skill.icon}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

