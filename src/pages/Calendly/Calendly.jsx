import * as React from 'react';
import Box from '@mui/material/Box';

const calendlyStyle = {
  padding: '20px',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default function Calendly() {
  return (
    <Box style={calendlyStyle}>
      {/* Calendly inline widget */}
      <h3 className="text-center">Schedule a call</h3>
      <div className="calendly-inline-widget" data-url="https://calendly.com/aslanshaken/30min" style={{ minWidth: '320px', height: '700px' }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </Box>
  );
}
