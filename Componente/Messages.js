
// Componente/Messages.js
import styles from '../styles/Componentes/Messages.module.css';
import { useState, useEffect } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/api/messages')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.messagesContainer}>
        <div className={styles.averageRating}>
            <span>⭐⭐⭐⭐</span>
            <p>4/5 sur 16 avis</p>
        </div>
        <div className={styles.messagesFlex}>
            {messages.map((message) => (
                <div key={message.id} className={styles.message}>
                    <p className={styles.author}>{message.author}</p>
                    <span className={styles.rating}>⭐ {message.rating}</span>
                    <p className={styles.content}>{message.content}</p>
                    <p className={styles.published}>{message.published}</p>
                </div>
            ))}
        </div>
        <button className={styles.button}>Voir tous les avis</button>
    </div>
  );
};

export default Messages;























