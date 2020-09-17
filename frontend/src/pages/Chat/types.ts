export interface UserProps {
  username: string;
}

export interface MessageProps {
  text: string;
  user: UserProps;
}

export interface SetupNotification {
  users: UserProps[];
  messages: MessageProps[];
}

export interface AddUserNotification {
  user: UserProps;
}

export interface RemoveUserNotification {
  user: UserProps;
}

export interface AddMessageNotification {
  message: MessageProps;
}

export interface UsersConnections {
  [username: string]: number;
}
