var count = $svg = $('svg').drawsvg({
      callback: function() {
        animate();
      }
    });

function animate() {
  $svg.drawsvg('animate');  
}

animate();