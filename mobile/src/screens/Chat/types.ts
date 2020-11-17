export interface UserProps {
  username: string;
}

export interface MessageProps {
  text: string;
  user: UserProps;
}
