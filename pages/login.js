exports.LoginPage = class LoginPage {

    // This class represents the login page and contains methods to interact with it
    // It uses Playwright's page object model to encapsulate the login functionality
    constructor(page) {
        this.page = page;
        this.username_textbox = page.getByRole('textbox', { name: 'Username' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: ' Login' });
    }

    // This method navigates to the login page
    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    /*This is an alternative way to implement the login functionality
    enterUsername(username) {
        return this.username_textbox.fill(username);
    }
    enterPassword(password) {
        return this.password_textbox.fill(password);
    }
    clickLoginButton() {
        return this.login_button.click();
    }*/

    // This is the preferred way to implement the login functionality
    async loginInfo(username, password) {
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}