const backpack = {
  volume: 30,
  strapSize: {
    width: 11,
    height: 12,
  },
  setVolume: function (volume) {
    console.log(this);
    this.volume = volume;
  },
};

backpack.setVolume(4);
console.log(backpack.volume);
console.log("Strap size is: ", backpack.strapSize); // dot notation
console.log("Width size is:", backpack.strapSize.width); // dot notation
console.log("Strap size as bracket notation: ", backpack["strapSize"]);

const query = "volume";
console.log("volume using bracket notation: ", backpack[query]);
