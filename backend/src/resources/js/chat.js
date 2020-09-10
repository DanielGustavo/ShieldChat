function Chat() {
  const state = {
    users: [],
    messages: [],
  };

  const observers = [];

  function notifyAll(notification) {
    observers.forEach((observer) => {
      observer(notification);
    });
  }

  return {
    addUser(user) {
      state.users.push(user);

      notifyAll({
        type: 'add-user',
        user,
      });
    },

    removeUser(username) {
      const userIndex = state.users.findIndex(
        (user) => user.username === username
      );

      const user = state.users.splice(userIndex, 1)[0];

      if (userIndex < 0) return;

      notifyAll({
        type: 'remove-user',
        user,
      });
    },

    addMessage(message) {
      state.messages.push(message);

      notifyAll({
        type: 'add-message',
        message,
      });
    },

    subscribe(obeserverFunction) {
      observers.push(obeserverFunction);
    },
  };
}

this.chat = new Chat();
