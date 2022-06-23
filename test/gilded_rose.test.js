const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {

  it("quality of an item never goes below 0", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 45), new Item("Elixir of Mongoose", 4, 10), new Item("+5 Dexterity Vest", 3, 6)])
    for (let i = 0; i < 10; i++) {
      items = gildedRose.updateQuality()
    }
    expect(items[0].quality).toBe(0)
    expect(items[1].quality).toBe(0)
    expect(items[2].quality).toBe(0)

  })

  it("quality of an item never goes over 50", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 17, 45), new Item("Aged Brie", 13, 40)])
    for (let i = 0; i < 10; i++) {
      items = gildedRose.updateQuality()
    }
    expect(items[0].quality).toBe(50)
    expect(items[0].quality).toBe(50)
  })
 
  it("NEVER depreciates the quality/sellIn value of Sulfurus, Hand of Ragnaros", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80)
    expect(items[0].sellIn).toBe(0)
  });
  it("Aged Brie only ever increases in Quality the older it gets", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 3, 0)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1)
    expect(items[0].sellIn).toBe(2)
  })
  it("Aged Brie/'s quality then goes up by 2 when sellIn reaches 0 and below", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 0)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2)
    expect(items[0].sellIn).toBe(-1)
  })
  it("BACKSTAGE passes quality increases by 2 when event is less than 10 days away", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 47)])
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(48) //increases only by 1
    expect(items[0].sellIn).toBe(10)
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(50)
    items = gildedRose.updateQuality()    
    expect(items[0].quality).toBe(50) //quality does not go over 50 for BACKSTAGE passes
  })
  it('BACKSTAGE passes quality increases by 3 when 5 or less days until concert', () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 45)])
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(47)
    expect(items[0].sellIn).toBe(5)
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(50)
  })
  it("BACKSTAGE passes quality goes to 0 once sellIn is below 0/event has passed", () => {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 45)])
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(48)
    expect(items[0].sellIn).toBe(0)
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0)
    expect(items[0].sellIn).toBe(-1)
  })
  it("Any COMMON item goes down in quality by 1 every update", () => { //COMMON not Brie, Sulfuras, BACKSTAGE, or Conjured
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 3, 6), new Item("Elixir of Mongoose", 3, 6)])
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5)
    expect(items[1].quality).toBe(5)
  })
  it("Any COMMON item/'s quality goes down by 2 once sellIn is zero or below", () => {
    const gildedRose = new Shop([new Item("+5 Dexterity Vest", 1, 4)])
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3)
    expect(items[0].sellIn).toBe(0)
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1)
    expect(items[0].sellIn).toBe(-1)
    items = gildedRose.updateQuality()
    expect(items[0].quality).toBe(0) // quality of all items never goes below 0
    expect(items[0].sellIn).toBe(-2)
  })
});
