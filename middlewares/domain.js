export default (req, res, next) => {
  req.domain = `${req.protocol}://${req.get('host')}`;

  next();
};
