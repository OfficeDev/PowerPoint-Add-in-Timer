/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

/// <reference path="../App.js" />

(function () {
    "use strict";

    // The initialize function must be run each time a new page is loaded
    Office.initialize = function (reason) {
        $(document).ready(function () {
            app.initialize();

            $("#createTimerBtn").click(function (event) {
                myVar = setInterval(createTimer, 1000);
            });
            $("#stopTimerBtn").click(function (event) {
                clearInterval(myVar);
                Office.context.document.settings.set(numberOfTimes.toString(), timeCount.toString());
                displaySettings();

                timeCount = 0;

            });
            $("#clearTimerBtn").click(function (event) {
                clearTimer();
            });
        });
    };

    // Keeps track of the time count.
    var timeCount = 0;
    
    // Keeps track of the number of times the timer was used.
    var numberOfTimes = 1;
    var myVar;
    
    // The timer string to display.
    var settingString = '';

    // Display the timer trials.
    function displaySettings() {
        settingString = settingString + 'Count ' + numberOfTimes + '- ' + Office.context.document.settings.get(numberOfTimes.toString()) + "\n";
        writeToPage(settingString);
        numberOfTimes++;
    }

    // Clear the timer trials.
    function clearTimer() {
        settingString = '';
        timeCount = 0;
        numberOfTimes = 1;
    }
    
    //Shows a timer in the notification footer
    function createTimer() {
        // var d = new Date();
        timeCount++;
        var timeInMinutes = 0;
        var timeInSeconds = 0;

        timeInSeconds = pad(timeCount % 60);
        timeInMinutes = (timeCount - timeInSeconds) / 60;

        writeToPage(timeInMinutes + ':' + timeInSeconds);
        $('#notification-message').hide();
        if ((timeCount % 10 == 0) && (timeCount > 0)) {
            app.showNotification('Alert! Your time is:', timeInMinutes + ':' + timeInSeconds);

        }

    }

    // Turns a number into a double digit number.
    function pad(number) {
        return (number < 10 ? '0' : '') + number;
    }

    // Display the text on the page.
    function writeToPage(text) {
        document.getElementById('results').innerText = text;
    }
})();
