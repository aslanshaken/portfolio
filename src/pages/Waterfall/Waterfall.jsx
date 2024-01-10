import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Waterfall() {
  return (
    <Timeline position="alternate" style={{backgroundColor: '#F6F6F6', padding:"5%" }}>
      <h3 className="text-center mb-5">Education</h3>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          BMCC (A.A.) - 
          Computer Networking Tech
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          NYC College of Tech (B.A.) - 
          Software Development
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          General Assembly - Coding bootcamp
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
         Google Data Analytics Certification
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Google IT Support Certification  
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        Google Project Management Certification
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>
          Saylor Academy - Software Engineer
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
