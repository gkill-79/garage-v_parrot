
// pages/api/messages.js
import { NextApiRequest, NextApiResponse } from 'next'
import { getMessagesFromDB, addMessageToDB, updateMessageInDB, deleteMessageFromDB } from './db';

const getMessages = async (req, res) => {
  try {
    const messages = await getMessagesFromDB();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Unable to fetch messages.' });
  }
}

const postMessage = async (req, res) => {
  const newMessage = req.body;
  try {
    const addedMessage = await addMessageToDB(newMessage);
    res.status(201).json(addedMessage);
  } catch (error) {
    res.status(500).json({ message: 'Unable to add message.' });
  }
}

const updateMessage = async (req, res) => {
  const updatedMessage = req.body;
  try {
    const updated = await updateMessageInDB(updatedMessage);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Unable to update message.' });
  }
}

const deleteMessage = async (req, res) => {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: 'ID is required.' });
    return;
  }

  try {
    await deleteMessageFromDB(id);
    res.status(200).json({ message: 'Message successfully deleted.' });
  } catch (error) {
    res.status(500).json({ message: 'Unable to delete message.' });
  }
}

const handler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      return getMessages(req, res);
    case 'POST':
      return postMessage(req, res);
    case 'PUT':
      return updateMessage(req, res);
    case 'DELETE':
      return deleteMessage(req, res);
    default:
      return res.status(405).json({ message: 'Method not allowed.' });
  }
}

export default handler;

















