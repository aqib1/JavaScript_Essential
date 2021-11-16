const backpack = {
  volume: 30,
  setVolume: (volume) => {
    console.log(this);
    this.volume = volume;
  },
};

backpack.setVolume(4);
console(backpack.volume);
