// // db.js
// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const Message = sequelize.define('Message', {
//   content: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   approved: {
//     type: Sequelize.BOOLEAN,
//     allowNull: true,
//   },
//   author: {
//     type: Sequelize.STRING,
//     allowNull: true,
//   },
//   rating: {
//     type: Sequelize.INTEGER,
//     allowNull: true,
//   },
//   published: {
//     type: Sequelize.DATE,
//     allowNull: true,
//   },
// });

// Message.sync();

// const getMessagesFromDB = async () => {
//   return await Message.findAll();
// }

// const addMessageToDB = async (newMessage) => {
//   return await Message.create(newMessage);
// }

// const updateMessageInDB = async (updatedMessage) => {
//   const message = await Message.findOne({ where: { id: updatedMessage.id } });
//   if (message) {
//     return await message.update(updatedMessage);
//   }
//   throw new Error('Message not found');
// }

// const deleteMessageFromDB = async (id) => {
//   const message = await Message.findOne({ where: { id } });
//   if (message) {
//     await message.destroy();
//     return;
//   }
//   throw new Error('Message not found');
// }

// export { getMessagesFromDB, addMessageToDB, updateMessageInDB, deleteMessageFromDB };
