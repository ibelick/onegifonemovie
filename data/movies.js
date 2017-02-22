var data = [
	{
    gif:"img/springbreaker.gif",
    name:"Spring Breaker",
    imdb:"http://www.imdb.com/title/tt2101441/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/theplacebeyondthepines.gif",
		name: "The Place Beyond The Pines",
    imdb:"http://www.imdb.com/title/tt1817273/?ref_=nv_sr_1"
	}
];

function randomMovie() {
  $(".wrapper-movie").empty();
  var nbMovie = Math.floor(Math.random()*data.length);
  var gifMovie = data[nbMovie].gif;
  var nameMovie = data[nbMovie].name;
  var imdbMovie = data[nbMovie].imdb;
  $(".wrapper-movie").append("<a href="+imdbMovie+" target='_blank'><img class='movie-img' src="+gifMovie+" alt='theplacebeyondthepines' /></a>");
  $(".wrapper-movie").append("<figcaption><a href="+imdbMovie+" target='_blank'>"+nameMovie+"</a></figcaption>");
}

$(".btn-random").click(function() {
  randomMovie();
});

randomMovie();
