
$.Carousel = function(el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.setLeftRight();

  $('.items').children().eq(this.activeIdx).addClass("active");
  $('.items').children().eq(this.leftIdx).addClass("left");
  $('.items').children().eq(this.rightIdx).addClass("right");

  var that = this;

  this.$el.on('click', 'a', function(event) {
    event.preventDefault();
    var dir = $(event.currentTarget).attr("class").slice(6);
    if (dir === 'left') { that.slideLeft(); }
    if (dir === 'right') { that.slideRight(); }
  });
};

$.Carousel.prototype.setLeftRight = function() {
  var itemsLength = $('.items').children().length;
  this.leftIdx = (this.activeIdx - 1 + itemsLength) % itemsLength;
  this.rightIdx = (this.activeIdx + 1 + itemsLength) % itemsLength;
};

$.Carousel.prototype.slideLeft = function() {
  this.slide(this.leftIdx);
};

$.Carousel.prototype.slideRight = function() {
  this.slide(this.rightIdx);
};

$.Carousel.prototype.slide = function(newIdx) {
  $(".active").removeClass("active");
  $(".left").removeClass("left");
  $(".right").removeClass("right");
  this.activeIdx = newIdx;
  this.setLeftRight();
  var activeIdx = this.activeIdx
  $('.items').children().eq(activeIdx).addClass("active");
  $('.items').children().eq(this.leftIdx).addClass("left");
  $('.items').children().eq(this.rightIdx).addClass("right");
};

$.fn.carousel = function () {
  console.log(this);
  return this.each(function () {
    new $.Carousel(this);
  });








};