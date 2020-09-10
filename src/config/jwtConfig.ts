import 'dotenv/config';

export default {
  secret: process.env.AUTH_SECRET || 'secret',
  options: {
    expiresIn: '2d',
  },
};
