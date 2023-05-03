const { User } = require('~/db/models');

export default async function handler(req, res) {
  try {
    const user = User.build({});
  } catch (error) {}
}
