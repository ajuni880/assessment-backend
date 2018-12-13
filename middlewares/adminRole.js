const adminRole = (req, res, next) => {
  const roles = ['admin'];
  if (!roles.includes(req.user.role)) {
    return res.status(403).send();
  } 
  next();
}

module.exports = adminRole;