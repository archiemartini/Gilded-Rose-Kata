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
        this.isAgedBrie(this.items[i])
      }  else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
        this.isBackstagePass(this.items[i])
      } else {
        this.isCommonItem(this.items[i])
      }
      
    }
      return this.items;
  }

  isAgedBrie(item) {
    if(item.quality < 50) {
      if (item.sellIn > 0) {
        item.quality += 1
      } else {
        item.quality += 2
      }
    }
    item.sellIn -= 1
  }

  isBackstagePass(item) {
    if (item.quality < 50) {
      if (item.sellIn <= 10 && item.sellIn > 5) {
        item.quality += 2
      } else if (item.sellIn <= 5 && item.sellIn > 0) {
        item.quality += 3
      } else {
        item.quality += 1
      }
    }
    if (item.sellIn <= 0) {
      item.quality = 0
    }
    item.sellIn -= 1
  }

  isCommonItem(item) {
    if (item.name !== 'Sulfuras, Hand of Ragnaros') {
      if (item.sellIn > 0) {
        item.quality -= 1
        item.sellIn -= 1
      } else {
        item.quality -= 2
        item.sellIn -= 1
      }
    }
    if (item.quality < 0) {
      item.quality = 0
    }
  }
  
}



module.exports = {
  Item,
  Shop,
}
