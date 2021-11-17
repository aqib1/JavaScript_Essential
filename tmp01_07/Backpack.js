// creating class using class keyword
class Backpack {
  constructor(
    name,
    valume,
    color,
    pocketNum,
    strapLegthLeft,
    strapLegthRight,
    lidOpen,
    dateAcquired
  ) {
    this.name = name;
    this.valume = valume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLegthLeft,
      right: strapLegthRight,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
  }

  toggleLid = function (lidOpen) {
    this.lidOpen = lidOpen;
  };
  setColor = function (color) {
    this.color = color;
  };
  setPocketNum(pocketNum) {
    this.pocketNum = pocketNum;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let daysElapsed = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysElapsed;
  }
}

export default Backpack;
