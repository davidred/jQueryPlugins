

$.Tabs = function(el) {
  this.$el = $(el);
  this.$contentTabs = $(this.$el.attr("data-content-tabs"));
  this.$activeTab = $(this.$contentTabs.find(".active"));
  this.$el.on('click', 'a', function(event) {
    event.preventDefault();
    $.Tabs.clickTab(event);
  });
};

$.Tabs.clickTab = function(event) {
  //this.$activeTab.removeClass("active");

  $('.tab-pane.active').addClass("transitioning");
  //$(event.currentTarget).addClass("transitionIn");
  $(event.currentTarget).addClass("active");

  $('.tab-pane.active').one('transitionend', function () {

    $('.active').removeClass("active");
    $(event.currentTarget).addClass("active");

    var $activeTab = $($('.tabs li').find(".active"));

    var activeID = $activeTab.attr("href");
    var $selectedPane = $(".tab-pane"+activeID);
    $selectedPane.addClass("transitioning")
    $selectedPane.addClass("active")



    window.setTimeout(function () {
      $('.transitioning').removeClass("transitioning");
    }
      , 0);
  })


  //wait for transition to complete
  //add active class to new target


};

$.fn.tabs = function () {
  console.log(this);
  return this.each(function () {
    new $.Tabs(this);
  });








};