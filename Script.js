

$(document).ready(function () {
  $(".likebutton").click(function () {
    var $this = $(this);
    console.log($this.text());
    var text = $this.text();
    if (text == "Like") {
      $this.text('Unlike');
    } else {
      $this.text("Like");
    }
  });
});