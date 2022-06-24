class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {

      if (this.items[i].name === 'Aged Brie') {
        this.items[i] = this.isAgedBrie(this.items[i])
      }  else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i] = this.isBackstagePass(this.items[i])
      } else  if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') {
        this.isSulfuras(this.items[i])
      } else {
        this.items[i] = this.isCommonItem(this.items[i])
      }
    }
      return this.items;
  }

  isAgedBrie(item) {
    let newItem = new AgedBrieItem(item.name, item.quality, item.sellIn)
    newItem.tick()
    return newItem
  }

  isBackstagePass(item) {
    let newItem = new BackstageItem(item.name, item.quality, item.sellIn)
    newItem.tick()
    return newItem
  }

  isSulfuras(item) {
    let newItem = new SulfurasItem(item.name, item.quality, item.sellIn)
    newItem.tick()
    return newItem
  }

  isCommonItem(item) {
    let newItem = new CommonItem(item.name, item.quality, item.sellIn)
    newItem.tick()
    return newItem

  }
  
}

class AgedBrieItem {
  constructor (name, quality, sellIn) {
    this.name = name
    this.quality = quality
    this.sellIn = sellIn
  }

  tick() {
    if(this.quality < 50) {
      if (this.sellIn > 0) {
        this.quality += 1
      } else {
        this.quality += 2
      }
    }
    this.sellIn -= 1
  }
}

class BackstageItem {
  constructor (name, quality, sellIn) {
    this.name = name
    this.quality = quality
    this.sellIn = sellIn
  }

  tick() {
    if (this.quality < 50) {
      if (this.sellIn <= 10 && this.sellIn > 5) {
        this.quality += 2
      } else if (this.sellIn <= 5 && this.sellIn > 0) {
        this.quality += 3
      } else {
        this.quality += 1
      }
    }
    if (this.sellIn <= 0) {
      this.quality = 0
    }
    this.sellIn -= 1
  }
}

class CommonItem  {

  constructor(name, quality, sellIn) {
    this.name = name
    this.quality = quality
    this.sellIn = sellIn
  } 

  tick() {
    if (this.sellIn > 0) {
      this.quality -= 1
      this.sellIn -= 1
    } else {
      this.quality -= 2
      this.sellIn -= 1
    }
    if (this.quality < 0) {
      this.quality = 0
    }
  }

}

class SulfurasItem {
  constructor(name, quality, sellIn) {
    this.name = name
    this.quality = quality
    this.sellIn = sellIn
  } 

  tick() {

  }
}


module.exports = {
  Item,
  Shop,
}
