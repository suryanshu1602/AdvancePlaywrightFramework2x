import { Page } from '@playwright/test';

import { UtilElementLocator} from '@utils/UtilElementLocator';

import {createLogger, type Logger } from '@utils/logger' ;

export abstract class BasePage{

    protected readonly page: Page;
    protected readonly el: UtilElementLocator;
    protected readonly logger: Logger;


    protected constructor(page: Page, scope: scope){
        this.page = page;
        this.el = new UtilElementLocator(page, scope);
        this.log = createLogger(scope);

    }

    protected async goto(relativePath: string): Promise<void> {
        await this.page.goto(relativePath);
        await this.page.waitForLoadState('domcontentloaded');


    }

}
