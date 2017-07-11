// ==UserScript==
// @id              fusker
// @name            fusker little helper
// @version         1.0
// @description     Make a gallery with thumbs
// @include         https://*.fusker.xxx/*
// @grant           GM_addStyle
// ==/UserScript==

(function fusker_extention()
{
    GM_addStyle(
        'p {display: inline-block;padding: 5px;}'+
        'img {max-width: 250px;display: inline-block;}'+
        '#ikonas {display: block;}'
    );
    
    document.querySelectorAll('p').forEach(function(entry) {
        if(entry.childNodes[2] != undefined){
            var a = document.createElement('a');
            a.setAttribute('href', entry.childNodes[0].nodeValue);
            a.appendChild(entry.childNodes[2]);

            entry.innerHTML = '';
            entry.appendChild(a)
        }
    });
})();