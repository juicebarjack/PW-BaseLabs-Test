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
        await this.page.goto('https://quotes.toscrape.com/login', {
            waitUntil: 'domcontentloaded'
        });
    }
    async fillForm(
        userName: string,
        passWord: string
    ){
        await this.userNameInput.fill(userName); 
        await this.passWordInput.fill(passWord);
    }
}