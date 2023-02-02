const { getCoinOwner } = require("../service/cryptoServices.js");

module.exports = () => async (req, res, next) => {
  const ids = await getCoinOwner(req.params.id);
  const { coinOwnerId, buyers } = ids;
  console.log(buyers);
  if (!req.user) {
    next();
  } else if (req.user._id === coinOwnerId) {
    console.log(`matching`);
    res.locals.user.isOwner = true;
    next();
  } else {
    res.locals.user.isOwner = false;
    if (buyers.includes(req.user._id)) {
      res.locals.user.hasBought = true;
    } else {
      res.locals.user.hasBought = false;
    }
    next();
  }
  // console.log(res.locals);
};
