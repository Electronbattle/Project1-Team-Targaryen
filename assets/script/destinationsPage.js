//destination title 
var locationDestination = $("#destination")
//api google places details
var beachSummary = [
    "Monkey Beach is a stunningly beautiful bay .The main beach is around 200 metres long with silky soft white sand, underwater colorful coral and exotic fish in exceptionally clear water; the whole bay is one big reef. In Maya Bay Snorkeling and diving are excellent throughout the bay, large underwater boulders are encrusted with coral and brightly colored fish are numerous. Visibility is excellent.",
    "25 km south of Khao Lak in the Thai Muang National Park is the spectacular clean sandy Turtle Beach, which stretches 14km.The water is clear and good for swimming.  It is especially famous for sea turtles, including the leatherback, come ashore to lay their eggs in the moonlight during the months from November to February.",
    "Blue Lagoon Beach has clean water, there is lots of coral and fish near the shore which makes it good for snorkeling, swimming, and taking underwater photos. The Blue Lagoon Beach is an enchanting panoramic sea.",
    "White Beach, a 4km, postcard-perfect stretch of sand lined from one end to the other. White Beach is perfect for those who love swimming, thanks to its flat, calm waters. It is considered to be one of the most popular beaches in Boracay.",
    "The mixture of shallow, clear water, golden sand, and imposing granite formations make it one of the most picturesque beaches anywhere in the world.",
    "Bingin Beach is one of Bali’s most popular surf spots, and it’s also one of the island’s hidden beaches, obscured by the rugged limestone cliffs on the southwestern Bukit peninsula. While getting to the stretch of white sand requires a difficult walk over uneven rocks, most people agree it is well worth the effort when they experience the gorgeous beachscapes and exciting waves. When you’re not surfing the sensational reef breaks, Bingin offers a treat for photographers or those simply looking for a place to relax and take in the exotic sunsets."];
var urbanJungleSummary = [
    "The largest and most populous city in Australia, Sydney is full of great tourist attractions. Visit the Sydney Opera House to take a tour or catch a performance. Take a stroll along the Sydney Harbour Bridge. Check out the Rocks Discovery Museum. Take a Sydney Harbour Coffee Cruise from the Circular Quay.",
    "Popular international destination, New York City is home to iconic sites like the Statue of Liberty and Empire State Building. See a show on Broadway. Enjoy a day in Central Park. Shop for souvenirs in Times Square. Catch an exhibit at the Museum of Modern Art.",
    "Like in New York City, there are plenty of iconic sites like the Eiffel Tower, the Louvre and Notre-Dame. If you want to avoid crowds or long lines, you might want to visit sites early in the morning or late at night — for instance seeing the Sacre-Coeur lit up at night. Check out the Moulin Rouge for a glamorous evening show. Take an afternoon break in the Tuileries Garden.",
    "There are plenty of spots in Tokyo to tour and to learn about Japan’s history. Check out the Tokyo National Museum or the Meiji Shrine. Mini-island Odaiba is a great place for entertainment, eateries and stunning architecture. Shop at Ginza and take a breather in Shinjuku Gyoen National Garden.",
    "Enjoy this beautiful city in Southern Vietnam. Get a taste of what it was like to be a soldier hiding in the jungle at the Cu Chi Tunnels. Visit the Cao Dai Temple to learn more about the Cao Dai faith, or there are many other religious sites to visit like the Notre Dame Cathedral in Paris Square. Take in the view from the top of the Bitexco Tower.",
    "Berlin is a growing, culturally-rich metropolis in the heart of Germany. Tour the famous Brandenburg Gate. Spend a day surveying the art at Museumsinsel. Hike through Tiergarten, or watch a sports game at the Olympiastadion Berlin."];
var mountainSummary = ["The Rocky Mountains stretch some 3,000 miles from British Columbia and Alberta in Canada through Idaho, Montana, Wyoming, Colorado, and down to New Mexico in the U.S. The range offers dramatic wilderness, diverse wildlife and alpine lakes. Colorado’s Rocky Mountain National Park is traversed by numerous hiking trails and the famously scenic Trail Ridge Road, a 48-mile highway that reaches a high point of 12,183ft. ",
    "The Alps are the highest and most extensive mountain range system that lies entirely in Europe, separating Southern from Central and Western Europe and stretching approximately 1,200 kilometres across eight Alpine countries: France, Switzerland, Italy, Monaco, Liechtenstein, Austria, Germany, and Slovenia. ",
    "The Carpathian Mountains form a 1,500km-long range in Central and Eastern Europe. They stretch west to eastin an arc from the Czech Republic to Romania. The Tatra range between Slovakia and Poland is a national park and has several peaks above 2,400 meters. More than half of the Carpathian range lies in Romania, where spruce forests are home to brown bears, wolves and lynxes. ",
    "El Capitan is a vertical rock formation in Yosemite National Park, located on the north side of Yosemite Valley,near its western end. The granite monolith is about 3,000 feet from base to summit along its tallest face, and is a popular objective for rock climbers. ",
    "The Himalayas, or Himalaya, form a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The Himalayan range has many of the Earth's highest peaks, including the highest, Mount Everest. ",
    "The Pyrenees mountain range separates the Iberian Peninsula from the rest of Europe, stretching more than 430km betweenSpain and France and rising higher than 3,400m in elevation. Hiking trails traverse the entire length of the range and national parks offer shorter trails, while dozens of ski resorts can be found on both sides of the Pyrenees. Andorra is a tiny sovereign state in the heart of the chain. "];

var beachNames = ["Monkey Beach", "Turtle Beach", "Blue Lagoon", "White Beach", "Beau Vallon", "Bingin Beach"];
var beachesID = ["ChIJrSR8fNneUTARIbDO0y4IpD0", "ChIJH-zetFVQAHwRrgs8de4LyaY", "ChIJOxQ39aZAwBQRaiEfkM4sElo", "ChIJa0aowyI8pTMRsvScrmZRPkQ", "ChIJ_diqsOco4CIRYstyiHTwNUU", "ChIJuTYKlEZF0i0RlR3w5pBjotw"];
var urbanJungleNames = ["Sydney", "New York", "Paris", "Tokyo", "Saigon", "Berlin"];
var urbanJungleID = ["ChIJP3Sa8ziYEmsRUKgyFmh9AQM", "ChIJOwg_06VPwokRYv534QaPC8g", "ChIJD7fiBh9u5kcRYJSMaMOCCwQ", "ChIJ51cu8IcbXWARiRtXIothAS4", "ChIJ0T2NLikpdTERKxE8d61aX_E", "ChIJAVkDPzdOqEcRcDteW0YgIQQ"];
var mountainsRiversNames = ["Rocky Montains", "Alps", "Carpathian", "El Capitan", "Himilayas", "Pyrenees"];
var mountainsRiverID = ["ChIJXXjR62arU1MRYF83d5yj0FE", "ChIJnZfnKUYryokRrQLsM12WxFM", "ChIJXZwSdWmHSkcR5NZX6twtPR8", "ChIJvY_bJNjtloARA9SzL3bMrVc", "ChIJvTUS7-u5lTkRAQJkcHsp4To", "ChIJ1SMgIIukqBIR1iKlhWfYERc"];
var weatherLat;
var weatherLng;
var photoReferenceStorage = [];
var baseURL = "https://maps.googleapis.com/maps/api/place/details/json?";
var placeID = "placeid="
var apiKey = "&key=AIzaSyAEa3mcJXIQ3rK8EMHKHjEFCuXuw3KJT14";
var locationIDArray = [];

//weather api build vars
var baseWeatherURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial";
var weatherApiKey = "b5109c635725f518b84b24a82662c8fa"
var urlKey = "&appid=" + weatherApiKey;


// display google places photos
var baseURLPhotos = "https://maps.googleapis.com/maps/api/place/photo?";
var maxWidth = "maxwidth=400&"
var maxHeight = "maxheight=400&"

// cross page var
var locationType = window.location.hash.substring(1);

function populatePictures() {
    console.log("running populate pictures")
    // loop through the 6 locations 
    for (locationIndex = 0; locationIndex < locationIDArray.length; locationIndex++) {
        console.log("on loop" + locationIndex);

        //forming the URL to pass into the AJAX call
        var queryURL = baseURL + placeID + locationIDArray[locationIndex] + apiKey;


        //fetch grabbing google places api
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = queryURL; // site that doesn’t send Access-Control-*
        fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
            .then(response => response.text())
            .then(function (contents) {

                var response = JSON.parse(contents);
                console.log(response)


                var parsedPlaceID = response.result.place_id

                if (locationIDArray.includes(parsedPlaceID)) {

                    var carouselToUse = locationIDArray.indexOf(parsedPlaceID);



                    //append correct destination type to the page




                    //append correct titles to the location in HTML
                    var titleSelect = ("#header-" + carouselToUse);
                    var title = $(titleSelect);
                    var newTitle = $(title).text(locationNames[carouselToUse]);




                    // append correct summarries to the location in HTML

                    //target summary class, populate with summary array
                    var cardbodyIDselect = ("#summary-" + carouselToUse);
                    var cardbody = $(cardbodyIDselect);
                    var newSummary = $(cardbody).text(locationSummary[carouselToUse]);
                    newSummary.attr("class", "card-text");
                    newSummary.attr("id", "summary-" + carouselToUse);
                    cardbody.prepend(newSummary);






                    //append correct weather to the location in HTML




                };
                //grabbing lat and lng for weather
                var weatherLat = response.result.geometry.location.lat;
                var weatherLng = response.result.geometry.location.lng;
                var urlLat = "&lat=" + weatherLat;
                var urlLng = "&lon=" + weatherLng;


                var queryURLWeather = baseWeatherURL + urlLat + urlLng + urlKey;

                $.ajax({
                    url: queryURLWeather,
                    method: "GET"

                }).then(function (responseWeather) {

                    console.log(responseWeather);
                    //push to html weather

                    var weatherSelect = $("#weather-" + carouselToUse);
                    var weatherSelect1 = $("#weather1-" + carouselToUse);
                    var weatherSelect2 = $("#weather2-" + carouselToUse);
                    var weatherSelect3 = $("#weather3-" + carouselToUse);
                    var weatherSelect4 = $("#weather4-" + carouselToUse);
                    var weather = $(weatherSelect);
                    var weather1 = $(weatherSelect1);
                    var weather2 = $(weatherSelect2);
                    var weather3 = $(weatherSelect3);
                    var weather4 = $(weatherSelect4);
                    weather.text("Current Description: " + responseWeather.weather[0].description);
                    weather1.text("Current Temp: " + responseWeather.main.temp + " °F");
                    weather2.text("High/Low: " + responseWeather.main.temp_max + "°F" + "/" + responseWeather.main.temp_min + "°F");
                    weather3.text("Humidity: " + responseWeather.main.humidity + "%");
                    weather4.text("Wind Speed: " + responseWeather.wind.speed + " mph");
                    var iconSelect = $("#icon-" + carouselToUse);
                    var iconSrc = $(iconSelect).attr("src", "http://openweathermap.org/img/w/" + responseWeather.weather[0].icon + ".png");






                });


                for (photoReferenceIndex = 0; photoReferenceIndex < 10; photoReferenceIndex++) {



                    var photoReference = response.result.photos[photoReferenceIndex].photo_reference;
                    // append to images correct carousel in the html

                    var idToSelectForImage = ("#carousel-" + carouselToUse + "-" + photoReferenceIndex)
                    var imageSelect = $(idToSelectForImage);

                    var photoReferenceInput = "photoreference=" + photoReference;
                    var SrcURLPhoto = baseURLPhotos + maxWidth + maxHeight + photoReferenceInput + apiKey;
                    imageSelect.attr("class", "sizeDefault");
                    imageSelect.attr("src", SrcURLPhoto);








                };

            });
    };
};

// call function
$(document).ready(function () {



    switch (locationType) {


        case "beach":
            console.log("case was beach")
            locationIDArray = beachesID;
            locationSummary = beachSummary;
            locationNames = beachNames;
            locationDestination.text("Tropical Beaches");

            //append correct hotel buttons to card header
            for (cardNumber = 0; cardNumber < 5; cardNumber++) {
                // change the class names
                var beachNamesHotel = ["#monkeyBeach", "#turtleBeach", "#blueLagoon", "#boracayBeach", "#seychelles","#blueBeach"]
                var hotelButtonSelect = $("#hotelButton-" + cardNumber)
                 $(hotelButtonSelect).attr("data-target", beachNamesHotel[cardNumber]);


            };


            //code
            break;

        case "urban":
            locationIDArray = urbanJungleID;
            locationSummary = urbanJungleSummary;
            locationNames = urbanJungleNames;
            locationDestination.text("Urban Jungles");
            //code
            //append correct hotel buttons to card header
            for (cardNumber = 0; cardNumber < 5; cardNumber++) {
                // change the class names
                var urbanNamesHotel = ["#sydney", "#newYork", "#paris", "#tokyo", "#saigon","#berlin"]
                var hotelButtonSelect = $("#hotelButton-" + cardNumber)
                 $(hotelButtonSelect).attr("data-target", urbanNamesHotel[cardNumber]);


            };
            

            break;
        case "mountain":
            locationIDArray = mountainsRiverID;
            locationSummary = mountainSummary;
            locationNames = mountainsRiversNames;
            locationDestination.text("Mountain Hikes");
            //code
            //append correct hotel buttons to card header
            for (cardNumber = 0; cardNumber < 5; cardNumber++) {
                // change the class names
                var mountainNamesHotel = ["#rockyMountains", "#theAlps", "#carpathianMountains", "#elCapitan", "#himalaya","#pyrenees"]
                var hotelButtonSelect = $("#hotelButton-" + cardNumber)
                 $(hotelButtonSelect).attr("data-target", mountainNamesHotel[cardNumber]);


            };


            break;



    };
    populatePictures();

});








