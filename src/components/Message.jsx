import React from 'react';
import { Box, Typography } from '@mui/material';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginBottom: '8px' }}>
      <Typography variant="caption" color="textSecondary">{sender}</Typography>
      <Box sx={{ backgroundColor: '#f5f5f5', padding: '8px', borderRadius: '8px' }}>
        <Typography>{text}</Typography>
      </Box>
      <Typography variant="caption" color="textSecondary" align="right">{new Date(timestamp).toLocaleTimeString()}</Typography>
    </Box>
  );
};

export default Message;
