const hasRole = (req, res, next) => {
  const roles = ['admin', 'user'];
  if (!roles.includes(req.user.role)) {
    return res.status(403).send();
  } 
  next();
}

module.exports = hasRole;