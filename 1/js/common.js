$(function() {
  $('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black', "position-right"],
		navbar: {
			title: 'Creatives'
		},
		// offCanvas: 'false'
	}, {
    clone: true
  });
});
