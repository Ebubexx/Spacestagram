

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

$.get("https://api.nasa.gov/planetary/apod?api_key=ghDRbGoN2ROByGuggVmgmF0nN4XSuSgJrgdoD9hF&count=2&thumbs=True", function (data) {
  console.log(typeof data); // string
  console.log(data); // HTML content of the jQuery.ajax page
  var firstPost = data[0]
  makePost(firstPost["url"], firstPost["date"], firstPost["title"], firstPost["explanation"]);
});

function makePost(imgurl, date, title, description) {
  var post = `
    <section class="section1">
      <img class="img1" src="${imgurl}" alt="${title}">
      <span class="name">${title}</span> <span class="date">${date}</span>
      <p class="p1">${description}</p>
      <button class="likebutton">Like</button>
    </section> `;
  $("main").append(post);
} 