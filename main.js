// Set default content on page load
window.onload = function() {
  updateContent('Button 1', '<h2><b>3 127 765 858</b><span>+808</span></h2><p>Accounts count</p>');
};

function updateContent(buttonText, htmlContent, imagePath, clickedButton) {
  // Remove 'active' class from all buttons
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });

  // Get the content div
  var contentDiv = document.getElementById('content');

  // Update the content with the button text and HTML content
  contentDiv.innerHTML = htmlContent;



  // Highlight the clicked button
      var clickedButton = event.target;
      clickedButton.classList.add('active');
}




window.onload = function() {
  // Set default content for the first section
  

  // Set default content for the second section
  updateContent2('Button A', '<h2 class="pt-5"><b>Autonomy</b></h2><p class="py-3 px-5">The Forsage ecosystem is built around the technology of smart contracts and NFTs, which are completely autonomous and exclude the influence of the human factor.</p>', 'path/to/default-imageA.jpg', document.querySelector('.btn-group:last-child .btn'));
};

function updateContent2(buttonText, htmlContent, imagePath, clickedButton) {
  // Remove 'active' class from all buttons in the second section
  var buttons = document.querySelectorAll('.btn-group:last-child .btn');
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });

  // Highlight the clicked button in the second section
  clickedButton.classList.add('active');

  // Get the content div in the second section
  var contentDiv = document.getElementById('content2');

  // Update the content in the second section with the provided information
  contentDiv.innerHTML = htmlContent;

  
}






// Comming soon timer
// Set the date we're counting down to
var countDownDate = new Date("jan 10, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
