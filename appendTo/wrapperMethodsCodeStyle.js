/*global $ */
$('.moveable#1')
  .appendTo('#firstTarget')
.end() // This line probably has no effect, because despite returning a new object, appendTo() seems to delete the source object immediately.
  .appendTo('#secondTarget');

$('.moveable#2')
  .appendTo('#firstTarget')
    .appendTo('#secondTarget');
