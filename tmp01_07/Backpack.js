// creating class using class keyword
class Backpack {
  constructor(
    name,
    valume,
    color,
    pocketNum,
    strapLegthLeft,
    strapLegthRight,
    lidOpen
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
}

export default Backpack;
