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
	},
	{
		gif: "img/bronson.gif",
		name: "Bronson",
		imdb:"http://www.imdb.com/title/tt1172570/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/imperium.gif",
		name: "Imperium",
		imdb:"http://www.imdb.com/title/tt4781612/?ref_=fn_al_tt_2"
	},
	{
		gif: "img/kisskissbangbang.gif",
		name: "Kiss Kiss Bang Bang",
		imdb:"http://www.imdb.com/title/tt0373469/?ref_=nv_sr_1"
	},
	{
		gif: "img/memento.gif",
		name: "Memento",
		imdb:"http://www.imdb.com/title/tt0209144/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/lahaine.gif",
		name: "La haine",
		imdb:"http://www.imdb.com/title/tt0113247/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/nightcrawler.gif",
		name: "Nightcrawler",
		imdb:"http://www.imdb.com/title/tt2872718/?ref_=nv_sr_1"
	},
	{
		gif: "img/moon.gif",
		name: "Moon",
		imdb:"http://www.imdb.com/title/tt1182345/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/themanfromnowere.gif",
		name: "The Man from Nowhere",
		imdb:"http://www.imdb.com/title/tt1527788/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/21grams.gif",
		name: "21 Grams",
		imdb:"http://www.imdb.com/title/tt0315733/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/funnygame.gif",
		name: "Funny Game",
		imdb:"http://www.imdb.com/title/tt0119167/?ref_=fn_al_tt_2"
	},
	{
		gif: "img/therulesofattraction.gif",
		name: "The Rules Of Attraction",
		imdb:"http://www.imdb.com/title/tt0292644/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/cityofgod.gif",
		name: "City of God",
		imdb:"http://www.imdb.com/title/tt0317248/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/elephant.gif",
		name: "Elephant",
		imdb:"http://www.imdb.com/title/tt1242599/?ref_=fn_al_tt_1"
	},
	{
		gif: "img/bellflower.gif",
		name: "Bellflower",
		imdb:"http://www.imdb.com/title/tt1242599/?ref_=fn_al_tt_1"
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
