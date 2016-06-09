// ==UserScript==
// @name        Redirect scratch.mit.edu to staging.scratch.mit.edu
// @namespace   scratchtostaging
// @description On any web page it will check if the clicked links goes to scratch.mit.edu. If so, the link will be rewritten to point to staging.scratch.mit.edu
// @include     http://*.*
// @include     https://*.*
// @exclude     http://scratch.mit.edu/*
// @exclude     https://scratch.mit.edu/*
// @version     1.0
// @grant       none
// ==/UserScript==

// This will soon see if scratch is down if so it will redirect.

document.body.addEventListener('mousedown', function(e){
    var targ = e.target || e.srcElement;
    if ( targ && targ.href && targ.href.match(/https?:\/\/scratch.mit.edu/) ) {
        targ.href = targ.href.replace(/https?:\/\/scratch.mit.edu/, 'https://staging.scratch.mit.edu/');
    }
});
