import styles from './styles.module.css';
import MessagesReceived from './messages';
import React from 'react';

const Chat = ({ socket }) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <MessagesReceived socket={socket} />
      </div>
    </div>
  );
};

export default Chat;