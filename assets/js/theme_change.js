function themeChange() {
  const topHeader = $('.top-header-default');
  const topHeaderMiddle = $('.top-header-middle-default');
  const navLink = $('.nav-link-default');
  const navBarContainer = $('.nav-bar-container-default');
  const themeChanger = $('#theme-change-btn');

  themeChanger.click(() => {
    const topHeaderTheme = topHeader.attr("data-theme");
    const navBarContainerTheme = navBarContainer.attr("data-theme");
    const navLinkTheme = navLink.attr("data-theme");
		const themeChangerTheme = themeChanger.attr("data-theme");

		console.log(themeChangerTheme)

    console.log(topHeaderTheme)
    console.log(navBarContainerTheme)

    topHeader.attr('data-theme', `${topHeader.attr('class')}`);
    navBarContainer.attr('data-theme', `${navBarContainer.attr('class')}`);
    navLink.attr('data-theme', `${navLink.attr('class')}`);
		themeChanger.attr('data-theme', `${themeChanger.attr('class')}`);

    topHeader.attr('class', `${topHeaderTheme}`);
    navBarContainer.attr('class', `${navBarContainerTheme}`);  
    navLink.attr('class', `${navLinkTheme}`);
		themeChanger.attr('class', `${themeChangerTheme}`)

  })
}

themeChange();