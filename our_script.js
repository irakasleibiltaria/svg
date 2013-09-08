window.onload = function(){
  // Each of the following examples create a canvas
  // that is 320px wide by 200px high.
  // Canvas is created at the viewport’s 10,50 coordinate.
  // var paper = Raphael(10, 50, 320, 200);
  // Canvas is created at the top left corner of the #canvas_container element
  // (or its top right corner in dir="rtl" elements)
  // var paper = Raphael(document.getElementById("canvas_container"), 320, 200);
  // Same as above
  // var paper = Raphael("canvas_container", 320, 200);
  var paper = Raphael("canvas_container");
  // Image dump
  var rects = Array();
  var w = 5;
  var h = 5;
  var cols = 50;
  var rows = 30;
  var top = 150;
  var left = 150;
  for (var j=0; j<rows; j++) {
    for (var i=0; i<cols; i++) {
      var c = paper.rect(i*w+left, j*h+top, w, h);
      c.attr({'fill':'#9cf', 'fill-opacity':0.2, 'stroke-width':0.1, 'stroke-opacity':0.2});
      // c.transform("r45");
    }
  }

  //
  paper.getById('0').attr({'fill-opacity':0.8});
  paper.getById('5').attr({'fill-opacity':0.8, 'fill':'red'});
  paper.getById('56').attr({'fill-opacity':0.8});
  paper.getById('100').attr({'fill-opacity':0.8});
  // var paper = Raphael(["canvas_container", 320, 200, {
  //     type: "rect",
  //     x: 10,
  //     y: 10,
  //     width: 25,
  //     height: 25,
  //     stroke: "#f00"
  // }, {
  //     type: "text",
  //     x: 30,
  //     y: 40,
  //     text: "Dump"
  // }, {
  //     type: "rect",
  //     x: 35,
  //     y: 10,
  //     width: 25,
  //     height: 25,
  //     stroke: "#f00"
  // }]);

  // paper.attr({'fill':'#9cf', 'fill-opacity':0.2});

  //

  // paper.forEach(function (el) {
  //     console.log(el.id);
  // });

}
