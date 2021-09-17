//Function for handling mobile nav bar
function handle_nav_bar() {
  const nav_btn= $(".nav-btn");
  const nav_bar = $(".nav-bar");
  const nav_links = $(".nav-link-default"); 
  nav_btn.click(() => {
    if (nav_bar.css("max-height") === "0px") {
      nav_bar.css("max-height", `${(2 * nav_links.length)*nav_links.height()}px`);//Display the nav bar
    } else {
      nav_bar.css("max-height", '0px');//Hide the nav bar
    }
  })
}

handle_nav_bar();