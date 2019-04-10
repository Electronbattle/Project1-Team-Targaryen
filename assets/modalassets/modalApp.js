
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
      "userName": $("#user-name").val(),
      "location": $("#user-location").val(),
      // experience: $("input[name='inlineRadioOptions']:checked").val(),
      "comment": $("#comment-text").val(),
        // "experience": $("#experience-data")
      }
      // dataAdded: firebase.database.ServerValue.TIMESTAMP
         
  
  
    dataRef.ref().push(newComment);
  })

  var query = firebase.database().ref("user").orderByKey();
  query.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      var childKey = childSnapshot.key;
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
    var userAvatar = '<i class="fas fa-user-circle fa-4x avatar  btn-outline-blue-grey fa-w-16" aria-hidden="true"></i>'

    var newComment = $("#commentContainer").prepend(
      '<div class="row mb-4"><div class="col-sm-2 col-12 mb-md-0 mb-2">'+ userAvatar + '</div><div class="col-sm-10 col-12"><a><h4 class="font-weight-bold">'+ userName +'</h4></a><div class="mt-2"><ul class="list-unstyled">'+ location + '   <li class="comment-date h6 font-weight-ligh"><i class="fas fa-clock"></i> Just now </li></ul></div><p class="h6 text-justify">'+ comments + '</p></div></div><hr>')

  })

  

  // Button that triggered the modal
  $('#commentModal').on('show.bs.modal', function (event) {
    newComment = $(event.relatedTarget).data(newComment),
    modal = $(this)
    // $("#beach").modal({
    //   keyboard:false,
    //   backdrop:false
     

  });
})
// })