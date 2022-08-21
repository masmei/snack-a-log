const confirmHealth = (snack) => {
    let { fiber, protein, added_sugar } = snack;
    
    if(typeof fiber !== 'number' || typeof protein !== 'number' || typeof added_sugar !== 'number') {
      return null
    } else {
      if(added_sugar < 5){
        if(protein >= 5 || fiber >=5){
            return true
        } else {
          return false
        }
    } else {
        return false
    }
    }
  };

module.exports = confirmHealth;