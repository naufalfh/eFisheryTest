const { Selector } = require('testcafe');

exports.elements = {
    searchPanel: function() {
        return Selector('div.search-container > div.search-box').with({ boundTestRun: testController });
    },
    searchField: function() {
        return Selector('input#input').with({ boundTestRun: testController });
    },
    chooseSong: function() {
        return Selector('div.title-column > yt-formatted-string.title > a.yt-simple-endpoint').withText('In the End').with({ boundTestRun: testController });
    },
    signInButton: function() {
        return Selector('div.right-content > a.sign-in-link').with({ boundTestRun: testController });
    },
    emailField: function() {
        return Selector('input').withAttribute('type', 'email').with({ boundTestRun: testController });
    },
    passwordField: function() {
        return Selector('input').withAttribute('type', 'password').with({ boundTestRun: testController });
    },
    userIcon: function() {
        return Selector('tp-yt-iron-icon#icon > img.style-scope').with({ boundTestRun: testController });
    },
    iconDropdownEmail: function() {
        return Selector('yt-formatted-string#email').with({ boundTestRun: testController });
    },
    exploreMenu: function() {
        return Selector('yt-formatted-string.tab-title').withText('Explore').with({ boundTestRun: testController });
    },
    chartsTab: function() {
        return Selector('yt-formatted-string.style-scope').withText('Charts').with({ boundTestRun: testController });
    },
    pageTitle: function() {
        return Selector('.ytmusic-header-renderer.title').with({ boundTestRun: testController });
    },
    newReleasesTab: function() {
        return Selector('yt-formatted-string.style-scope').withText('New releases').with({ boundTestRun: testController });
    },
    moodsAndGenresTab: function() {
        return Selector('yt-formatted-string.style-scope').withText('Moods & genres').with({ boundTestRun: testController });
    },
    chooseGenre: function() {
        return Selector('ytmusic-navigation-button-renderer:nth-of-type(22) > .style-scope').with({ boundTestRun: testController });
    },
    searchArtist: function() {
        return Selector('div#contents > ytmusic-responsive-list-item-renderer.ytmusic-shelf-renderer:nth-of-type(1) > a.ytmusic-responsive-list-item-renderer').withAttribute('aria-label', 'Linkin Park').with({ boundTestRun: testController });
    },
    artistPageTitle: function() {
        return Selector('.content-container-wrapper .gradient-container .content-container .title').with({ boundTestRun: testController });
    },
    searchAlbum: function() {
        return Selector('.ytmusic-responsive-list-item-renderer[href="browse/MPREb_t7vewLEKKPi"]').withAttribute('aria-label', 'One More Light').with({ boundTestRun: testController });
    },
    albumPageTitle: function() {
        return Selector('#header .content-container .metadata .style-scope .title').with({ boundTestRun: testController });
    }
}