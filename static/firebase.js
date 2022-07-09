
// Fire base scrip

  // Initialize Firebase (ADD YOUR OWN DATA)
  var config = {
    apiKey: "AIzaSyD2dIsgvq5EBnu3PHvl1swim6D7mAKIGRg",
    authDomain: "mentalhealth-dde2f.firebaseapp.com",
    databaseURL: "https://mentalhealth-dde2f-default-rtdb.firebaseio.com",
    projectId: "mentalhealth-dde2f",
    storageBucket: "mentalhealth-dde2f.appspot.com",
    messagingSenderId: "317593597141",
    appId: "1:317593597141:web:04e6a5f45152c27b985e5c",
    measurementId: "G-NQQE11Y2R9"
  };
  firebase.initializeApp(config);

  // Reference messages collection
  var messagesRef = firebase.database().ref("UserData");

  // Listen for form submit
  document
    .getElementById("contactForm")
    .addEventListener("submit", submitForm);

  // Submit form
  function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal("name");
    var age = getInputVal("age");
    var email = getInputVal("email");
    var country = getInputVal("country");

    // Save message
    saveMessage(name, email, age, country);

    // Show alert


    // Hide alert after 3 seconds
    /*setTimeout(function () {
      document.querySelector(".alert").style.display = "none";
    }, Infinity);*/

    // Clear form
    document.getElementById("contactForm").reset();
  }

  // Function to get get form values
  function getInputVal(id) {
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, email, age, country) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      age: age,
      country: country,
    });
  }

  