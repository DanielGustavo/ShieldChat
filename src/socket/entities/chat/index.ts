import {
  State,
  User,
  Message,
  ObserverFunction,
  ObserverNotification,
} from './types';

class Chat {
  private state: State = {
    users: [] as User[],
    messages: [] as Message[],
  };

  private observers: ObserverFunction[] = [() => console.log(this.state)];

  private notifyAllObservers(notification: ObserverNotification): void {
    this.observers.forEach((observer) => {
      observer(notification);
    });
  }

  public subscribeObserver(observerFunction: ObserverFunction): void {
    this.observers.push(observerFunction);
  }

  public addUser(user: User): void {
    this.state.users.push(user);

    this.notifyAllObservers({
      type: 'add-user',
      user,
    });
  }

  public removeUser(socketId: string): void {
    const userIndex = this.state.users.findIndex(
      (user) => user.socketId === socketId
    );

    const user = this.state.users.splice(userIndex, 1)[0];

    this.notifyAllObservers({
      type: 'remove-user',
      user,
    });
  }

  public getUserById(socketId: string): User | undefined {
    return this.state.users.find((user) => user.socketId === socketId);
  }

  public addMessage(message: Message): void {
    this.state.messages.push(message);

    this.notifyAllObservers({
      type: 'add-message',
      message,
    });
  }

  public getUsers(): User[] {
    return this.state.users;
  }

  public getMessages(): Message[] {
    return this.state.messages;
  }
}

export default new Chat();
