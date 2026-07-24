import { test, Page, expect, Locator } from "@playwright/test";

export class LoginPage { 
    readonly page: Page;
    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passWordInput: Locator;
    readonly submitLoginButton: Locator;
    readonly logoutButton: Locator;
    readonly loginErrorMessage:Locator;
    readonly userName: string = process.env.USERNAME!;
    readonly passWord: string = process.env.PASSWORD!;

    constructor (page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#username');
        this.passWordInput = page.locator('#password');
        this.loginButton = page.getByRole('link', { name: 'Login' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.submitLoginButton = page.getByRole('button', { name: 'Login' });
        this.loginErrorMessage = page.getByText ('Error while logging in: please, provide your username.');
    }
    async goTo(){
        await this.page.goto( process.env.BASE_URL!, {
            waitUntil: 'domcontentloaded'
        });
    }
    
    async clickLogin(){
        await this.loginButton.click();
    }

    async fillForm(){
        await this.userNameInput.fill(this.userName); 
        await this.passWordInput.fill(this.passWord);
    }

    async fillFormNoPW(){
        await this.userNameInput.fill(this.userName);
        await this.passWordInput.clear();
    }

    async fillFormNoUN(){
        await this.userNameInput.clear();
        await this.passWordInput.fill(this.passWord);
    }

    async submit() {
        await this.submitLoginButton.click();
    }

    // -------------------
    async login(){
        await this.goTo();
        await this.clickLogin();
        await this.fillForm();
        await this.submit();
    }
    async emptyLogin(){
        await this.goTo();
        await this.clickLogin();
        await this.submit();
    }
    async loginEmptyUsername(){
        await this.goTo();
        await this.clickLogin();
        await this.fillFormNoUN();
        await this.submit();
    }
    async loginEmptyPassWord(){
        await this.goTo();
        await this.clickLogin();
        await this.fillFormNoPW();
        await this.submit();
    }
}