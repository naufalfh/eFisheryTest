const testcase1 = require('../support/pages/testcase1');
const {Given, When, Then} = require('@cucumber/cucumber');
const { Selector } = require('testcafe');

require('dotenv').config();

Given('Navigate to Youtube music Web', async () => {
    await testController.navigateTo(process.env.MAIN_URL);
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