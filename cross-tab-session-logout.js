/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//this function will execute when any thing will add to the localStorage ,
//then it will match key that is added to the localStorage

// transfers sessionStorage from one tab to another
var sessionStorage_transfer = function (event) {

    if (!event) {
        event = window.event;
    } // ie suq
    if (!event.newValue)
        return;          // do nothing if no value to work with
    if (event.key == 'logoutAdmin') {//

        console.log(window.location);

        sessionStorage.removeItem('SuperAdminLoggedIn');
        sessionStorage.removeItem('AdminLoggedIn');
        sessionStorage.removeItem('freight_id');
        sessionStorage.removeItem('user_details');
        sessionStorage.removeItem('api_token');
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('language_id');
        sessionStorage.removeItem('searchResults');
        sessionStorage.removeItem('postData');
        sessionStorage.removeItem('profile_pic');
        sessionStorage.removeItem('params');
        sessionStorage.removeItem('stateUrl');
        sessionStorage.removeItem('state');

        localStorage.removeItem('logoutAdmin'); // <- could do short timeout as well.

        location.href = window.location.origin + '' + window.location.pathname;

    } else if (event.key == 'logoutClient') {

        sessionStorage.removeItem('userType');
        sessionStorage.removeItem('ClientLogedIn');
        sessionStorage.removeItem('api_token');
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('subDomainparams');
        sessionStorage.removeItem('subDomainstateUrl');
        sessionStorage.removeItem('subDomainstate');
        localStorage.removeItem('searchData');

        localStorage.removeItem('logoutClient');

        location.href = window.location.origin + '' + window.location.pathname;


    } else if (event.key == 'login') { //it will execute when login sucess and set data to sessionStorage        

        var sessionData = JSON.parse(localStorage.login);
        for (var key in sessionData)
        {
            sessionStorage.setItem(key, sessionData[key]);
        }
        
        localStorage.removeItem('login');
    }
};

// listen for changes to localStorage
if (window.addEventListener) {
    window.addEventListener("storage", sessionStorage_transfer, false);
} else {
    window.attachEvent("onstorage", sessionStorage_transfer);
}
;


// Ask other tabs for session storage (this is ONLY to trigger event)
if (!sessionStorage.length) {
    localStorage.setItem('getSessionStorage', 'foobar');
    localStorage.removeItem('getSessionStorage', 'foobar');
}
;


