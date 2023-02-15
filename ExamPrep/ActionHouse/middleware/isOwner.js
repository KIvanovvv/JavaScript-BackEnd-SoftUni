const { getActionOwner } = require("../service/actionServices.js");
//TODO CAHNGE DATA
module.exports = () => async (req, res, next) => {
  const ids = await getActionOwner(req.params.id);
  const { author, bidder } = ids;

  if (!req.user) {
    next();
  } else if (req.user._id === author) {
    res.locals.user.isOwner = true;
    res.locals.user.canBid = false;
    if (bidder.length > 0) {
      res.locals.user.hasBid = true;
    } else {
      res.locals.user.hasBid = false;
    }
    next();
  } else {
    // console.log(`From req.user>>>${req.user._id}`);
    // console.log(`From author>>>${author}`);
    res.locals.user.isOwner = false;
    res.locals.user.canBid = false;
    res.locals.user.isWinning = false;
    if (bidder[0] !== req.user._id) {
      res.locals.user.canBid = true;
    }
    if (bidder[0] === req.user._id) {
      res.locals.user.isWinning = true;
    }

    if (bidder.length > 0) {
      res.locals.user.hasBid = true;
    } else {
      res.locals.user.hasBid = false;
    }
    next();
  }
  // console.log(res.locals);
};
