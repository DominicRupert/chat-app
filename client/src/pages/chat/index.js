import styles from './styles.module.css';
import MessagesReceived from './messages';
import React from 'react';
import SendMessage from './send-message.js';

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room}/>
      </div>
    </div>
  );
};

export default Chat;