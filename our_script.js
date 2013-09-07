window.onload = function(){
  // Each of the following examples create a canvas
  // that is 320px wide by 200px high.
  // Canvas is created at the viewport’s 10,50 coordinate.
  var paper = Raphael(10, 50, 320, 200);
  // Canvas is created at the top left corner of the #canvas_container element
  // (or its top right corner in dir="rtl" elements)
  var paper = Raphael(document.getElementById("canvas_container"), 320, 200);
  // Same as above
  var paper = Raphael("canvas_container", 320, 200);
  // Image dump
  var paper = Raphael(["canvas_container", 320, 200, {
      type: "rect",
      x: 10,
      y: 10,
      width: 25,
      height: 25,
      stroke: "#f00"
  }, {
      type: "text",
      x: 30,
      y: 40,
      text: "Dump"
  }, {
      type: "rect",
      x: 35,
      y: 10,
      width: 25,
      height: 25,
      stroke: "#f00"
  }]);

  paper.attr({'fill':'#9cf', 'fill-opacity':0.2});

  //

  paper.forEach(function (el) {
      console.log(el.id);
  });

}
