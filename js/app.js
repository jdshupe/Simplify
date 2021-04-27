const items = new Items();

$(document).ready(function () {  
  
  // hide point and add to graph
  $("body").on("mouseup", ".point", function () { 
    console.log("Point over Graph")
    var position = $(this).position();
    var top = position.top;
    var left = position.left;
    items.visible.forEach(element => {
      if (element.type == "Graph") {
        var position = $("#" + element.object.canv.id).offset();
        var graphTop = position.top;
        var graphLeft = position.left;
        var graphWidth = element.object.xDim;
        var graphHeight = element.object.yDim;
        
        if ((graphTop < top && top < (graphTop + graphHeight)) && (graphLeft < left && (left < graphLeft + graphWidth))) {
          console.log("Check 2")
          $(this).hide();
          let item = items.visible.filter(obj => {
            return obj.name == $(this).attr('id');
          })
          element.object.addPointToGraph(item[0].object);          
        }
      }
    });    
  });

  $('body').on('mouseup', '.rectangle', function () {
    var position = $(this).position();
    var top = position.top;
    var left = position.left;
    items.visible.forEach(element => {
      if (element.type == "Graph") {
        var position = $("#" + element.object.canv.id).offset();
        var graphTop = position.top;
        var graphLeft = position.left;
        var graphWidth = element.object.xDim;
        var graphHeight = element.object.yDim;
        
        if ((graphTop < top && top < (graphTop + graphHeight)) && (graphLeft < left && (left < graphLeft + graphWidth))) {
          $(this).hide();
          let item = items.visible.filter(obj => {
            return obj.name == $(this).attr('id');
          })
          element.object.addRectToGraph(item[0].object);         
        }
      }
    })
  });

  $('body').on('mouseup','.data-holder', function () {
    var position = $(this).position();
    let x = position.left;
    let y = position.top;
    if (x < 0) {
      $(this).css({left: '0px'});
    }
    if (y < 0) {
      $(this).css({top: '0px'});
    }
  });

  $('body').on('mouseenter mouseleave', '.graph', function () {
    $(this).next().toggle();
  });

  $('body').on('click', '.menu-toggle-button', function () {
    $(this).next().toggle();
  });

});