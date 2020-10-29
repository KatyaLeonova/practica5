var slideIndex = 0;
var currentSlideIndex = 0;
var slideArray = [];

function Slide(title, subtitle, background, link ) {
   this.title = title;
   this.subtitle = subtitle;
   this.background = background;
   this.link = link;
   this.id = "slide" + slideIndex;
   slideIndex++;
   slideArray.push(this);
}

var slide1 = new Slide(
   "Retrica",
   "Retrica - это приложение для камеры с множеством фильтров для сохранения ваших лучших моментов.",
   'public/images/retrica.jpg',
   "https://play.google.com/store/apps/details?hl=ru&id=com.venticake.retrica"
);

var slide2 = new Slide(
   "Candy Camera",
   "Корректирующие фильтры и бесшумный режим приложения Candy Camera помогут вам делать красивые селфи в любое время в любом месте!",
   "public/images/lovecamera.jpg",
   "https://play.google.com/store/apps/details?id=com.joeware.android.gpulumera&hl=ru"
);


var slide3 = new Slide(
   "Cymera",
   'Cymera — это мощный редактор и бьюти-камера "все в одном", которым пользуются 300 миллионов человек по всему миру.',
   "public/images/cymera.jpg",
   "https://play.google.com/store/apps/details?id=com.cyworld.camera"
);


function buildSlider(){
   var myHTML;
   for(var i = 0; i < slideArray.length; i++) {
       myHTML += "<div id='" + slideArray[i].id +
           "' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
           "<div class='slideOverlay'>" +
           "<h1>" + slideArray[i].title + "</h1>" +
           "<h4>" + slideArray[i].subtitle + "</h4>" +
           "<a class='slider' href='" + slideArray[i].link + "' target='_blank'>Скачать</a>" +
           "</div>" +
           "</div>";
   }

   document.getElementById("mySlider").innerHTML = myHTML;
   document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

buildSlider();

function prevSlide(){
   var nextSlideIndex;
   if (currentSlideIndex === 0 ) {
       nextSlideIndex = slideArray.length - 1;
   } else {
       nextSlideIndex = currentSlideIndex - 1;
   }

   document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
   document.getElementById("slide" + currentSlideIndex).style.left = 0;

   document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
   document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

   currentSlideIndex = nextSlideIndex;
}

function nextSlide(){
   var nextSlideIndex;
   if (currentSlideIndex === (slideArray.length - 1) ) {
       nextSlideIndex = 0;
   } else {
       nextSlideIndex = currentSlideIndex + 1;
   }

   document.getElementById("slide" + nextSlideIndex).style.left = "100%";
   document.getElementById("slide" + currentSlideIndex).style.left = 0;

   document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
   document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

   currentSlideIndex = nextSlideIndex;
}
