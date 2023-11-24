/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
const openNav = () => {
    document.getElementById("mySidebar").style.width = "25rem";
    document.getElementById("main").style.marginLeft = "25rem";
    document.getElementById("open").style.display = "none";
  }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("open").style.display = "block";
  }