module.exports = (req, res, next) => {
  if (!req.user) {
    return res.state(403).send({ error: 'You must login!' });
  }

  next();
};
