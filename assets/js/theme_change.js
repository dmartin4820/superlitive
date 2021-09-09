function themeChange() {
  // const topHeader = $('.top-header-default');
  // const topHeaderMiddle = $('.top-header-middle-default');
  const navLink = $('.nav-link-default');
  const navBarContainer = $('.nav-bar-container-default');
  const themeChanger = $('#theme-change-btn');
  const superlitiveLogo = $('.superlitive-logo');
  const blackText = $('.black');
  const footer = $('.footer-content');

  themeChanger.click(() => {
    const navBarContainerTheme = navBarContainer.attr("data-theme");
    const navLinkTheme = navLink.attr("data-theme");
		const themeChangerTheme = themeChanger.attr("data-theme");
    const superlitiveLogoImg = superlitiveLogo.attr("data-img");
    const footerTheme = footer.attr("data-theme");

    footer.attr('data-theme', `${footer.attr('class')}`);
    navBarContainer.attr('data-theme', `${navBarContainer.attr('class')}`);
    navLink.attr('data-theme', `${navLink.attr('class')}`);
		themeChanger.attr('data-theme', `${themeChanger.attr('class')}`);
    superlitiveLogo.attr('data-img', `${superlitiveLogo.attr('src')}`);

    footer.attr('class', `${footerTheme}`);
    navBarContainer.attr('class', `${navBarContainerTheme}`);  
    navLink.attr('class', `${navLinkTheme}`);
		themeChanger.attr('class', `${themeChangerTheme}`);
    superlitiveLogo.attr('src', `${superlitiveLogoImg}`);

    for (let key in blackText) {
      const el = blackText[key];
      const dataTheme = el.attributes['data-theme'].nodeValue;
      el.attributes['data-theme'].nodeValue = `${el.attributes.class.nodeValue}`;
      el.attributes.class.nodeValue = `${dataTheme}`;
    }
  })
}

themeChange();