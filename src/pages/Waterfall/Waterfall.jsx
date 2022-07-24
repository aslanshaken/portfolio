import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

export default function Waterfall() {
  return (
    <Timeline position="alternate" style={{backgroundColor: '#F6F6F6', padding:"10% 5% 10% 5%" }}>
      <h3 class="text-center mb-5">Education</h3>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Borough of Manhattan Community College - 
          C.S. Networking and Telecommunications
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="error" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        Technical Support Fundamentals by Google
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
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          NY City College of Technology - 
          Computer Systems (Software Development)
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success"  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Foundations: Data, Data, Everywhere
          by Google
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
        </TimelineSeparator>
        <TimelineContent>
          Ask Questions to Make Data-Driven Decisions
          by Google
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
