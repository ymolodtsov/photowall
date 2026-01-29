(function() {
  var script = document.createElement('script');
  script.src = 'https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js';
  script.onload = function() {
    var grid = document.querySelector('.photo-grid');
    if (!grid) return;

    grid.style.columnCount = 'unset';

    var gutter = 16;
    function getColumnCount() {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      return 2;
    }

    function getColumnWidth() {
      var cols = getColumnCount();
      var gridWidth = grid.offsetWidth;
      return (gridWidth - (gutter * (cols - 1))) / cols;
    }

    var cards = grid.querySelectorAll('.photo-card');
    cards.forEach(function(card) {
      card.style.width = getColumnWidth() + 'px';
    });

    var msnry = new Masonry(grid, {
      itemSelector: '.photo-card',
      columnWidth: '.photo-card',
      percentPosition: false,
      gutter: gutter
    });

    var resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function() {
        cards.forEach(function(card) {
          card.style.width = getColumnWidth() + 'px';
        });
        msnry.layout();
      }, 100);
    });
  };
  document.head.appendChild(script);
})();
