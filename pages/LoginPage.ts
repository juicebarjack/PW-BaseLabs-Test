import { test, Page, expect, Locator } from "@playwright/test";

export class LoginPage { 
    readonly page: Page;
    readonly loginButton: Locator;
    readonly userNameInput: Locator;
    readonly passWordInput: Locator;
    readonly submitLoginButton: Locator;
    readonly logoutButton: Locator;

    constructor (page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#username');
        this.passWordInput = page.locator('#password');
        this.loginButton = page.getByRole('link', { name: 'Login' });
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
        this.submitLoginButton = page.getByRole('button', { name: 'Login' });
    }

    async goTo(){
        await this.page.goto( process.env.BASE_URL!, {
            waitUntil: 'domcontentloaded'
        });
    }
    
    async login(){
        await this.loginButton.click();
    }

    async fillForm(
        userName: string = process.env.USERNAME!,
        passWord: string = process.env.PASSWORD!
    ){
        await this.userNameInput.fill(userName); 
        await this.passWordInput.fill(passWord);
    }

    async submit() {
        await this.submitLoginButton.click();
    }
}