function handle_nav_bar() {
  const nav_btn= $(".nav-btn");
  const nav_bar = $(".nav-bar");
  const nav_links = $(".nav-link-default"); 
  nav_btn.click(() => {
    if (nav_bar.css("max-height") === "0px") {
      nav_bar.css("max-height", `${(2 * nav_links.length)*nav_links.height()}px`);
    } else {
      nav_bar.css("max-height", '0px');
    }
  })
}

handle_nav_bar();