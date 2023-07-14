import { v4 } from "uuid";

export const CHATROOM_DEFAULT_VALUES = {
    chatroomId: v4(),
    chatRoomCreation: Date.now(),
    chatRoomLastRegistration: Date.now(),
}