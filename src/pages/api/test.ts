import User from '~/db/models/user';

export default async function handler(req, res) {
  const user = await User.create({ email: 'test@test.com' });
  res.status(200).json({ user });
}
