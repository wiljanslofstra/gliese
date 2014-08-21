/**
 * App
 * @constructor
 * @return {void} init - Starting the application
 */

define(['jquery', 'velocityUI'], function ($) {
    'use strict';

    var init = function () {
        var $headingEl = $('.animated-heading'),
            headingString = $headingEl.text(),
            spannedString = "",
            i;

        for (i = 0; i < headingString.length; i++) {
            var tempString = "";
            if (headingString[i] === ' ') {
                tempString = "&nbsp;";
            } else {
                tempString = headingString[i];
            }
            spannedString += "<div>" + tempString + "</div>";
        }

        $headingEl.html(spannedString)
            .css('opacity', '1')
            .find('div')
                .velocity("transition.slideUpIn", { 
                    stagger: 80, 
                    drag: true, 
                    display: "inline-block" 
                });
    };

    /** Define public functions */
    return {
        init: init
    };
});