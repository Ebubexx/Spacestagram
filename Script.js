

$(document).ready(function () {
  $.get("https://api.nasa.gov/planetary/apod?api_key=ghDRbGoN2ROByGuggVmgmF0nN4XSuSgJrgdoD9hF&start_date=2022-01-01&end_date=2022-02-19&thumbs=True", function (data) {
    console.log(typeof data); // string
    console.log(data); // HTML content of the jQuery.ajax page
    data.forEach(post => {
      makePost(post.url, post.date, post.title, post.explanation);
    });
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
  function makePost(imgurl, date, title, description) {
    var post = `
      <section class="section1">
        <img class="img1" src="${imgurl}" alt="${title}">
        <span class="name">${title}</span> <span class="date">${date}</span>
        <p class="p1">${description}</p>
        <button class="likebutton">Like</button>
      </section> `;
    $("main").append(post);
  };
});
