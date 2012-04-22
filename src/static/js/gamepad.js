var GamePad = function() {
  var isChrome = navigator.webkitGamepads !== undefined;
  var controller;
  var gp = {};

  if (isChrome) {
    controller = navigator.webkitGamepads[0];
  }

  gp.getButtons = function() {
    return navigator && navigator.webkitGamepads && navigator.webkitGamepads[0] && navigator.webkitGamepads[0].buttons;
  }

  gp.getAxes = function() {
    return navigator && navigator.webkitGamepads && navigator.webkitGamepads[0] && navigator.webkitGamepads[0].axes;
  }

  return gp;
}