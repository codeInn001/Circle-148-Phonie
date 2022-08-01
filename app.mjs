function startApp() {
    // Your entire app should not necessarily be coded inside this 
    // single function (though there's no penalty for that), 
    // so create and use/call additional functions from here
  
    // pls remove the below and make some magic in here!
 
    const navLinks = document.querySelector('.navlinks');
const showMenu = document.querySelector('.menu_bar');
showMenu.addEventListener('click',()=>{
  navLinks.classList.toggle('nav_active')
})
  

  };
  
  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //