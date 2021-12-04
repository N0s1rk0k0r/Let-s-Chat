const firebaseConfig = {
    apiKey: "AIzaSyClMVqwZstlgO7eB2zqWy1aVhp2ojcPOjk",
    authDomain: "kwitter-8e26c.firebaseapp.com",
    databaseURL: "https://kwitter-8e26c-default-rtdb.firebaseio.com",
    projectId: "kwitter-8e26c",
    storageBucket: "kwitter-8e26c.appspot.com",
    messagingSenderId: "69703821156",
    appId: "1:69703821156:web:29c2648de2a0de6026fc71",
    measurementId: "G-TMYG8993MF"
  };

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);