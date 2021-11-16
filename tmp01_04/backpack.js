const backpack = {
  name: "Everyday backpack",
  volume: 12,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 123,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
};

export default backpack;
