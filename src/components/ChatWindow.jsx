import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Message from './Message';

const ChatWindow = () => {
  const messages = useSelector((state) => state.chat.messages);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <Box sx={{ padding: '16px', height: '100%', overflowY: 'auto' }}>
      {messages.map((message, index) => (
        <Message key={index} message={message} />
      ))}
      <div ref={chatEndRef}></div>
    </Box>
  );
};

export default ChatWindow;
