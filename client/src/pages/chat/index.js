import styles from './styles.module.css';
import MessagesReceived from './messages';
import React from 'react';
import SendMessage from './send-message.js';
import RoomAndUsersColumn from './room-and-users.js';

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
      <RoomAndUsersColumn username={username} room={room} socket={socket} />
      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room}/>
      </div>
    </div>
  );
};

export default Chat;