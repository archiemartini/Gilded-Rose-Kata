class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick() {
  
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let name = this.items[i].name
      let quality = this.items[i].quality
      let sellIn = this.items[i].sellIn

      if (name === 'Aged Brie') {
        this.items[i] = new AgedBrieItem(name, sellIn, quality)
        this.items[i].tick()
      }  else if (name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.items[i] = new BackstageItem(name, sellIn, quality)
        this.items[i].tick()
      } else  if (name === 'Sulfuras, Hand of Ragnaros') {
        this.items[i] = new Item(name, sellIn, quality)
        this.items[i].tick()
      } else if (name === 'Conjured Bastard of Healing') {
        this.items[i] = new ConjuredItem(name, sellIn, quality)
        this.items[i].tick()
      } else {
        this.items[i] = new CommonItem(name, sellIn, quality)
        this.items[i].tick()
      }
    }
      return this.items;
  }
}

class AgedBrieItem extends Item{
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
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

class BackstageItem extends Item {
  constructor (name, sellIn, quality) {
    super(name, sellIn, quality)
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

class CommonItem extends Item  {

  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  } 

  tick() {
    if (this.sellIn > 0) {
      this.quality -= 1
    } else {
      this.quality -= 2
    }
    if (this.quality < 0) {
      this.quality = 0
    }
    this.sellIn -= 1
  }
}

class ConjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  tick() {
    if (this.sellIn > 0) {
      this.quality -= 2
    } else {
      this.quality -= 4
    }
    if (this.quality < 0) {
      this.quality = 0
    }
    this.sellIn -= 1
  }
}





module.exports = {
  Item,
  Shop,
}
