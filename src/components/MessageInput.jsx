import React, { useState } from 'react';
import { Box, Avatar, Typography, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from '../redux/chatSlice';
import SendIcon from '@mui/icons-material/Send';  // Import Send icon

// Chat header with profile picture, name, and status
const ChatHeader = ({ profilePic, name, isActive }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        borderBottom: '1px solid #ccc',
        backgroundColor: '#f5f5f5',
        position: 'fixed', // Fix the header to the top
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000, // Ensure it stays on top of other elements
        height: '60px',
      }}
    >
      <Avatar alt={name} src={profilePic} sx={{ width: 48, height: 48, marginRight: '16px' }} />
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography
          variant="body2"
          sx={{
            color: isActive ? 'green' : 'red', // Dynamic color for active/inactive status
            fontWeight: isActive ? 'bold' : 'normal',
          }}
        >
          {isActive ? 'Active' : 'Inactive'}
        </Typography>
      </Box>
    </Box>
  );
};

// Input section for typing and sending messages
const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (text.trim() === '') return;

    dispatch(sendMessage({ text, timestamp: Date.now() }));

    // Simulate bot response
    setTimeout(() => {
      dispatch(receiveMessage({ text: 'This is an automated reply.', timestamp: Date.now() }));
    }, 1000);

    setText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '8px',
        borderTop: '1px solid #ccc',
        position: 'fixed', // Fix the input to the bottom
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
        multiline
        rows={1}
        sx={{
          borderRadius: '16px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSend}
        sx={{
          marginLeft: '8px',
          borderRadius: '16px',
          minWidth: '60px',
          padding: '8px 16px',
        }}
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
};

// Chat messages display component
const ChatMessages = ({ messages }) => {
  return (
    <Box
      sx={{
        flex: 1, // Take available space between the header and input
        overflowY: 'auto', // Enable scrolling
        padding: '16px',
        marginTop: '60px', // Make space for fixed header
        marginBottom: '80px', // Make space for fixed input
        // backgroundColor: '#f9f9f9',
      }}
    >
      {messages.map((message, index) => (
        <Box key={index} sx={{ marginBottom: '16px' }}>
          <Typography variant="body1" color="textPrimary">
            {message.sender}: {message.text}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {new Date(message.timestamp).toLocaleTimeString()}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const ChatInterface = () => {
  const messages = useSelector((state) => state.chat.messages);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Chat Header with profile picture, name, and status */}
      <ChatHeader
        profilePic="https://i.pinimg.com/736x/fc/bb/3e/fcbb3ebae34725e76ab4df836fa15836.jpg" // Replace with actual profile picture URL
        name="Ritik Shroff"
        isActive={true} // Dynamically control active status
      />

      {/* Chat Messages will be scrollable */}
      <ChatMessages messages={messages} />

      {/* Message Input */}
      <MessageInput />
    </Box>
  );
};

export default ChatInterface;
