import React from 'react';
import { Box, Container } from '@mui/material';
import ChatWindow from '../components/ChatWindow';
import MessageInput from '../components/MessageInput';

const ChatPage = () => {
  return (
    <Container maxWidth="md" sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 1, overflow: 'auto', marginBottom: '16px' }}>
        <ChatWindow />
      </Box>
      <MessageInput />
    </Container>
  );
};

export default ChatPage;
