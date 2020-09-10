export interface User {
  username: string;
  socketId: string;
}

export interface Message {
  user: User;
  text: string;
}

export interface ObserverNotification {
  type: string;
  user?: User;
  message?: Message;
}

export interface State {
  users: User[];
  messages: Message[];
}

export type ObserverFunction = (notification: ObserverNotification) => void;
