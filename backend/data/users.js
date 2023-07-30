import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('admin123', 10),
    isAdmin: true,
  },
  {
    name: 'Joe',
    email: 'joe@mockery.com',
    password: bcrypt.hashSync('joe123', 10),
  },
  {
    name: 'Jane',
    email: 'jane@email.com',
    password: bcrypt.hashSync('jane123', 10),
  },
];

export default users;
