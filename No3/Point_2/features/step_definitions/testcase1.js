const testcase1 = require('../support/pages/testcase1');
const {Given, When, Then} = require('@cucumber/cucumber');
const { Selector } = require('testcafe');

require('dotenv').config();

Given('Navigate to Youtube music Web', async () => {
    await testController.navigateTo(process.env.MAIN_URL);
});

Given('Navigate to Sign In page', async () => {
    await testController.navigateTo(process.env.SIGN_IN);
});

When('User click search panel on top of page', async () => {
    const searchButton = testcase1.elements.searchPanel();
    await testController.click(searchButton);
});

When('User input the {string} keyword', async (string) => {
    const searchField = testcase1.elements.searchField();
    await testController.typeText(searchField, string);
    await testController.pressKey('enter');
});

Then('User choose the song from the search result', async () => {
    const song = testcase1.elements.chooseSong();
    await testController.click(song);
});

When('User click on Sign In button', async () => {
    const signIn = testcase1.elements.signInButton();
    await testController.click(signIn);
});

When('User input {string} into email field', async (string) => {
    const email = testcase1.elements.emailField();
    await testController.typeText(email, string);
    await testController.pressKey('enter');
});

When('User input {string} into password field', async (string) => {
    const password = testcase1.elements.passwordField();
    await testController.typeText(password, string);
    await testController.pressKey('enter');
});

Then('User successfully Sign In into account with {string} email', async (string) => {
    const icon = testcase1.elements.userIcon();
    const expectAccount = testcase1.elements.iconDropdownEmail();
    await testController.click(icon);
    await testController.expect(expectAccount).contains(string);
});

When('User click on Explore menu', async () => {
    const explore = testcase1.elements.exploreMenu();
    await testController.click(explore);
});

When('User click Charts tab', async () => {
    const charts = testcase1.elements.chartsTab();
    await testController.click(charts);
});

Then('User can see all current top musics in {string} page', async (string) => {
    const chartsPage = testcase1.elements.pageTitle();
    await testController.expect(chartsPage.innerText).contains(string);
});

When('User click on New Releases tab', async () => {
    const newReleases = testcase1.elements.newReleasesTab();
    await testController.click(newReleases);
});

Then('User can see new musics in {string} page', async (string) => {
    const newReleasesPage = testcase1.elements.pageTitle();
    await testController.expect(newReleasesPage.innerText).contains(string);
});

When('User click on Moods & genres tab', async () => {
    const moodsAndGenres = testcase1.elements.moodsAndGenresTab();
    await testController.click(moodsAndGenres);
});

When('User choose the Rock genre', async () => {
    const genre = testcase1.elements.chooseGenre();
    await testController.click(genre);
});

Then('User can see all musics in the {string} genre page', async (string) => {
    const genrePage = testcase1.elements.pageTitle();
    await testController.expect(genrePage.innerText).contains(string);
});

When('User click the artist from search result', async () => {
    const artistResult = testcase1.elements.searchArtist();
    await testController.click(artistResult);
});

Then('User will be directed to the {string} page', async (string) => {
    const artistPage = testcase1.elements.artistPageTitle();
    await testController.expect(artistPage.innerText).contains(string);
});

When('User click the album from the search result', async () => {
    const albumResult = testcase1.elements.searchAlbum();
    await testController.click(albumResult);
});

Then('User will be directed to the {string} album page', async (string) => {
    const albumPage = testcase1.elements.albumPageTitle();
    await testController.expect(albumPage.innerText).contains(string);
})