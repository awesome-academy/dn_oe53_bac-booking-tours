import consumer from "./consumer"

consumer.subscriptions.create("NotificationsChannel", {
  connected() {
  },

  disconnected() {
  },

  received(data) {
    $("#notifications-list").prepend(data.layout);
    var counter = parseInt($(".count-noti").text());
    if(!counter){
      $(".count-noti").show();
      $(".count-noti").html("<p>1</p>");
    }else if(counter >= 99){
      $(".count-noti").html("<p>" + 99 + "</p>");
    } else {
      $(".count-noti").html("<p>" + (counter + 1) + "</p>");
    }
  }
});
