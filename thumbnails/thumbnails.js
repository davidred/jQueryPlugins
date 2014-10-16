
$.Thumbnails = function(el) {
  this.$el = $(el);
  this.activeIdx = 0;
  this.$activeImg = $('.gutter-images').children().eq(0);
  this.activate(this.$activeImg);

  that=this;

  this.$el.on('click', 'img', function(event) {
    event.preventDefault();
    var $img = $(event.currentTarget);
    $('div.active').children().eq(0).remove();

    that.activate($img);
    that.$activeImg = $img;
  });

  this.$el.on('mouseenter', 'img', function(event) {
    event.preventDefault();
    var $img = $(event.currentTarget);
    $('div.active').children().eq(0).remove();

    that.activate($img);
  });

  this.$el.on('mouseleave', 'img', function(event) {
    event.preventDefault();
    var $img = $(event.currentTarget);
    $('div.active').children().eq(0).remove();

    that.activate(that.$activeImg);

  });


};


$.Thumbnails.prototype.activate = function($img) {
  var $activeClone = $img.clone();
  $("div.active").prepend($activeClone);
};




$.fn.thumbnails = function () {
  console.log(this);
  return this.each(function () {
    new $.Thumbnails(this);
  });










};