const backpack = {
  volume: 30,
  sum: 0,
  strapSize: {
    width: 11,
    height: 12,
  },
  setVolume: function (volume) {
    if (volume < 0) this.volume = 300;
    else this.volume = volume;
  },
  setSum: function (val1, val2) {
    this.sum = val1 + val2;
  },
};

// backpack.setVolume(4);
// console.log(backpack.volume);
// console.log("Strap size is: ", backpack.strapSize); // dot notation
// console.log("Width size is:", backpack.strapSize.width); // dot notation
// console.log("Strap size as bracket notation: ", backpack["strapSize"]);

// const query = "volume";
// console.log("volume using bracket notation: ", backpack[query]);
backpack.setVolume(-12);
console.log(backpack.volume);
backpack.setVolume(12);
console.log(backpack.volume);

backpack.setSum(12, 12);
console.log(backpack.sum);
