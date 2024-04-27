/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
window.onload = function () {
    dropDown()
    let sidebarCloseButton = document.querySelector("#closeBtn");
    let sidebarOpenButton = document.querySelector("#openBtn");
    let linkedinButton = document.querySelector("#linkedin_link");
    let githubButton = document.querySelector("#github_link");

    sidebarOpenButton.addEventListener("click", openNav);
    sidebarCloseButton.addEventListener("click", closeNav);
    linkedinButton.addEventListener("click", linkedinButtonFunc)
    githubButton.addEventListener("click", githubButtonFunc)
};

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function dropDown() {
  var dropdown = document.getElementsByClassName("dropdown-btn");
  var i;
  
  for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
      } else {
        dropdownContent.style.display = "block";
      }
    });
  }
}
function linkedinButtonFunc() {
  window.location.href = 'https://www.linkedin.com/in/gabriel-martell-8a0a04252/'
}

function githubButtonFunc() {
  window.location.href = 'https://github.com/gabrielmartell'
}

