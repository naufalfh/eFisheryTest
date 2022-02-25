const { Selector } = require('testcafe');

exports.elements = {
    searchPanel: function() {
        return Selector('div.search-container > div.search-box');
    },
    searchField: function() {
        return Selector('input#input');
    },
    chooseSong: function() {
        return Selector('div.title-column > yt-formatted-string.title > a.yt-simple-endpoint').withText('In the End');
    },
    signInButton: function() {
        return Selector('div.right-content > a.sign-in-link');
    },
    emailField: function() {
        return Selector('input').withAttribute('type', 'email');
    },
    passwordField: function() {
        return Selector('input').withAttribute('type', 'password');
    },
    userIcon: function() {
        return Selector('tp-yt-iron-icon#icon > img.style-scope');
    },
    iconDropdownEmail: function() {
        return Selector('yt-formatted-string#email');
    }
}