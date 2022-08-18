const checkName = (req, res, next) => {
  if (req.body.name) {
    console.log("name is ok");
    next();
  } else {
    res.status(400).json({ error: "Name is required" });
  }
};

const validateURL = (req, res, next) => {
  if (
    req.body.url.substring(0, 7) === "http://" ||
    req.body.url.substring(0, 8) === "https://"
  ) {
    return next();
  } else {
    res
      .status(400)
      .json({ error: `You forgot to start your url with http:// or https://` });
  }
};

const confirmHealth = (req, res, next) => {
  if(req.body.added_sugar < 5){
      if(req.body.protein >= 5 || req.body.fiber >=5){
          req.body.is_healthy = true
      } else {
        req.body.is_healthy = false
      }
  } else {
      req.body.is_healthy = false
  }
  next();
};


module.exports = { checkName, validateURL, confirmHealth };
