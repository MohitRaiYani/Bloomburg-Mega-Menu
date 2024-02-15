jQuery(document).ready(function () {
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(function(item) {
        item.addEventListener('mouseover', function() {
          this.classList.add('active');
        });
    
        item.addEventListener('mouseout', function() {
          this.classList.remove('active');
        });
    });

    const items = document.querySelectorAll('article').length;
    for (let i = 1; i <= items; i++) {
      const linkRule = `
        nav.mega-menu > a:nth-of-type(${i}):focus ~ article.panel:nth-of-type(${i}),
        nav.mega-menu > a:nth-of-type(${i}):hover ~ article.panel:nth-of-type(${i}) {
          display: inline-flex;
          transform: translateX(0);
          overflow-y: auto;
        }
      `;
    
      const hideRule = `
        nav.mega-menu
          > a:hover:not(.no-panel)
          ~ a:focus:nth-of-type(${i})
          ~ article.panel:nth-of-type(${i}),
        nav.mega-menu
          > a:focus:nth-of-type(${i})
          ~ a:hover:not(.no-panel)
          ~ article.panel:nth-of-type(${i}) {
          display: none;
        }
      `;
    
      const focusRule = `
        nav.mega-menu
          > a:nth-of-type(${i}):focus
          ~ article.panel:hover
          ~ article.panel:nth-of-type(${i}) {
          display: none;
        }
      `;

        const style = document.createElement('style');
        style.appendChild(document.createTextNode(linkRule + hideRule + focusRule));
        document.head.appendChild(style);
      }
});