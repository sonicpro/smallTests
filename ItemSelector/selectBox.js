/*global jQuery, $ */

var data = [
    {
        label: 'Apple',
        id: 0
    },
    {
        label: 'Orange',
        id: 1
    },
    {
        label: 'Grape',
        id: 2
    },
    {
        label: 'Watermelon',
        id: 3
    }
];


(function($) {
    $.fn.selectBox = function(data) {

        // defines a structure that holds the state of each selectable element
        var elements = {};

        for (var x = 0; x < data.length; x++) {
            elements['itemId' + x] = {
                label: data[x].label,
                highlighted: 0
            };
        }

        var $ul = $('ul', '.fieldsBox#availableFieldsBox');

        for (var key in elements) {
            var $li = $('<li>');
            $li.append(elements[key].label);
            $li.attr('itemId', key);
            $ul.append($li);
        };

        $(this).find('li').each(function() {
            $(this).click(function() {
                // handles click for each item in list
                var $t = $(this);
                if ($t.hasClass('selected')) {
                    $t.removeClass('selected');
                    elements[$t.attr('itemId')].highlighted = 0;
                }
                else {
                    $t.addClass('selected');
                    elements[$t.attr('itemId')].highlighted = 1;
                }
            });
        });

        $(this).find('.left').click(function() {
            var alreadySelected = $.map($.makeArray($('li', '.fieldsBox#selectedFieldsBox>ul')),
                                        function (li) {
                                            return $(li).attr('itemId');
                                        });

            var toMoveArray = [];
            for (var item in elements) {
                if (~($.inArray(item, alreadySelected)) && elements[item].highlighted === 1) {
                    toMoveArray.push(item);
                }
            }

            // Remove highlighting in the data structure first.
            for (var i = 0, len = alreadySelected.length; i < len; i++) {
                elements[alreadySelected[i]].highlighted= 0;
            }
            applySelection('.fieldsBox#selectedFieldsBox');
            move('.fieldsBox#selectedFieldsBox', '.fieldsBox#availableFieldsBox', toMoveArray);
        });

        $(this).find('.right').click(function() {
            var available = $.map($.makeArray($('li', '.fieldsBox#availableFieldsBox>ul')),
                                        function (li) {
                                            return $(li).attr('itemId');
                                        });

            var toMoveArray = [];
            for (var item in elements) {
                if (~($.inArray(item, available)) && elements[item].highlighted === 1) {
                    toMoveArray.push(item);
                }
            }

            // Remove highlighting in the data structure first.
            for (var i = 0, len = available.length; i < len; i++) {
                elements[available[i]].highlighted= 0;
            }
            applySelection('.fieldsBox#availableFieldsBox');
            move('.fieldsBox#availableFieldsBox', '.fieldsBox#selectedFieldsBox', toMoveArray);
        });

        var applySelection = function (boxSelector) {
            var $ul = $('ul', boxSelector);
            for (var key in elements) {
                $('li[itemId=' + key + ']', $ul).toggleClass('selected', elements[key].highlighted === 1);
            };
        };

        var move = function (fromBoxSelector, toBoxSelector, toMoveArray) {
            var $ul = $('ul', fromBoxSelector);

            $('li', $ul).filter(function () {
                return ~($.inArray($(this).attr('itemId'), toMoveArray));
            })
                .appendTo($('ul', toBoxSelector));
        };

        return this;
    };
})(jQuery);

$('.parentSelectorBox').selectBox(data);
