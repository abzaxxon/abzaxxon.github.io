// Create a variable called msg to hold a new message
var today = new Date();
var time = today.getHours();

var msg = 'Sign up to receive our newsletter for ' + time + ' % off!';



// Create a function to update the content of the element whose id attribute has a value of message
function updateMessage() {
  var el = document.getElementById('message');
  el.textContent = msg;
}

// Call the function
updateMessage();
