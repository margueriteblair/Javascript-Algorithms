function booWho(bool) {
    if (typeof(bool) === "boolean") {
      return true;
    } else return false;
  }
  booWho(null);
  

function booWho2(bool) {
    return typeof(bool) === "boolean" ? true : false;
  }
booWho2(null);