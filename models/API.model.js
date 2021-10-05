"use strict";

class Watch {
  constructor(watch) {
    this.title = watch.title;
    this.description = watch.description;
    this.toUSD = watch.toUSD;
    this.image_url = watch.image_url;
  }
}

module.exports = { Watch };

