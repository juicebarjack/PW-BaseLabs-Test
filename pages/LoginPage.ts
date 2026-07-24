import { test, Page, expect, Locator } from "@playwright/test";

export class LoginPage { 
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly passWordInput: Locator;

    constructor (page: Page) {
        this.page = page;
        this.userNameInput = page.locator('#username');
        this.passWordInput = page.locator('#password');
    }

    async goTo(){
        await this.page.goto('/login', {
            waitUntil: 'domcontentloaded'
        });
    }
    async fillForm(
        userName: string = process.env.USERNAME!,
        passWord: string = process.env.PASSWORD!
    ){
        await this.userNameInput.fill(userName); 
        await this.passWordInput.fill(passWord);
    }
}