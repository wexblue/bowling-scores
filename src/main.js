/*
Copyright [2018] [Matthew B White]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

/* global Image */

// Bring in the CSS for the formatting, and the animation library
require('bulma/css/bulma.css');
require('animate.css/animate.css');

// any additional styling should go into this file
require('./style.css');


/* global Image */
console.log('hellow world')
// Bring in the CSS for the formatting, and the animation library
require('bulma/css/bulma.css');
require('animate.css/animate.css');

// any additional styling should go into this file
require('./style.css');


function addEvent(el, type, handler) {
  if (el.attachEvent) el.attachEvent('on' + type, handler);
  else el.addEventListener(type, handler);
}

function removeEvent(el, type, handler) {
  if (el.detachEvent) el.detachEvent('on' + type, handler);
  else el.removeEventListener(type, handler);
}

document.addEventListener('DOMContentLoaded', function() {
  // do something
  var el = document.querySelector('#enterbutton');
  var regplayername = document.querySelector('#Playername');
  var Enteredname = document.querySelector('#Name');
  // attach anonymous function to click event
  addEvent(el, 'click', function(event) {
    console.log(Enteredname.value);
    regplayername.innerHTML = Enteredname.value

  })
  console.log('hellow world')

  var scorebutton = document.querySelector('#scorebutton')
  addEvent(scorebutton, 'click', function(event) {
    var scores = []
    var totalscore = 0
    for (var i = 1; i < 21; i++) {
      var elementid = "#tb" + i
      var el = document.querySelector(elementid);

      var n = parseInt(el.value, 10)
      if (!isNaN(n)) {
        scores.push(n)
      }

    }
    var total = document.querySelector('#tb21')

    for (let i = 0; i < scores.length; i++) {

      let tempScore = scores[i];

      if (tempScore === 10) {

        if (scores.length === (i + 1)) {

          console.log('..need more scores')

          break;
        }
        totalscore += scores[i];
        totalscore += scores[i + 1];
        totalscore += scores[i + 2];
      } else {
        totalscore += scores[i]

      }



    }
    total.value = totalscore
  });


});



