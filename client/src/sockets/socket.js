import { io } from 'socket.io-client';

const chatSocket = io.connect('http://localhost:4001');
export default chatSocket;