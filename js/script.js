document.addEventListener("DOMContentLoaded", function(event) {


        var container = document.querySelector('#img-container');
        var msnry;

        imagesLoaded( container, function() {
          msnry = new Masonry( container, {
              columnWidth: '.item',
            itemSelector: '.item',
            gutter: 5,
            isFitWith: true
          } );
        });


 });
