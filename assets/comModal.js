
$(document).ready(function () {
  // Initialize Firebase for Comment Storage
  var config = {
    apiKey: "AIzaSyA-eur7YJhWxzn9YyxEEOsoZvlvjFDwnmY",
    authDomain: "project-1-comments.firebaseapp.com",
    databaseURL: "https://project-1-comments.firebaseio.com",
    projectId: "project-1-comments",
    storageBucket: "project-1-comments.appspot.com",

  };
  firebase.initializeApp(config);


  var dataRef = firebase.database();

  var userName = "";
  var location = "";
  var experience = "";
  var comment = "";


  $("#postComment").on("click", function (event) {
    event.preventDefault();

    // New Comment Added

    var newComment = {
      userName: $("#user-name").val(),
      location: $("#user-location").val(),
      // experience: $("input[name='inlineRadioOptions']:checked").val(),
      comment: $("#comment-text").val(),
      // dataAdded: firebase.database.ServerValue.TIMESTAMP
    }

    dataRef.ref().push(newComment);

  })
  var query = firebase.database().ref("userName").orderByKey();
  query.on("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {

      var key = childSnapshot.key;
      var childData = childSnapshot.val();
    });
  }, function (error) {
    console.error(error);
    console.log(childSnapshot.key)
  });



  dataRef.ref().on("child_added", function (childSnapshot) {

    console.log(childSnapshot.val().userName);
    console.log(childSnapshot.val().location);
    // console.log(childSnapshot.val().experience);
    console.log(childSnapshot.val().comment);

    var userName = childSnapshot.val().userName
    var location = childSnapshot.val().location
    var comments = childSnapshot.val().comment
    var userAvatar = '<a class="avatar" href= "#"><i class="fas fa-user-circle fa-5x"></i></a>'

    var newComment = $("#commentContainer").append(
      '<ul class= "card-body comment-section"><li class="comment user-comment"><div class="userName"><a href ="#">' + userName + '</a><h3 class="userLocation">' + location + '</h3><span>Just Now</span></div>' + userAvatar + '<p class="userComment">' + comments + '</p></li></ul>')
  })

  // Button that triggered the modal
  $('#commentModal').on('show.bs.modal', function (event) {
    //get data-id attribute of the clicked element
    var newComment = $(event.relatedTarget).data(newComment)
    var modal = $(this)


  });
})
