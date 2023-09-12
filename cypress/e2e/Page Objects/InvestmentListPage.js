class InvestmentList
{
    VerifyNavigation() 
    {
        cy.xpath("//i[@class='pi pi-bars']").should('be.visible').click()
        
    }
    VerifyInvestmentListBtn() 

    {
        cy.xpath("//span[normalize-space()='Investment']").should('have.text', 'Investment')
        cy.xpath("//a[@href='/investment-app/investment-list']//i[@class='jdsi-palette mb-2']").click({force: true})
        
    }
    VerifyInvestmentListText() 
    {
        cy.xpath("//span[normalize-space()='Investment']").should('have.text', 'Investment List')
        
    }

    VerifyTickerSearch() 
    {
        cy.wait(2000);
        cy.xpath("//span[@id='pr_id_1_label']").should('be.visible').click()  //ticker bar
        cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Ticker']").should('be.visible').click()  //selecting ticker from the dropdown list
        cy.xpath("//input[@placeholder='Search keyword']").should('be.visible') //search field

        //verifing with ivalid data and blank data
        cy.xpath("//input[@placeholder='Search keyword']").type('##@&') //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.xpath("//input[@placeholder='Search keyword']").clear() //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.wait(2000)
        //verifing with valid data 
        cy.xpath("//input[@placeholder='Search keyword']").type('Test') //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.xpath("//input[@placeholder='Search keyword']").clear() //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.wait(2000) 


    }

    VerifyInvesmentNameSearch() 
    {
        cy.xpath("//span[@id='pr_id_1_label']").should('be.visible').click()  //ticker bar
        cy.xpath("//span[normalize-space()='Investment Name']").should('be.visible').click()  //selecting investment name from the dropdown list
        cy.xpath("//input[@placeholder='Search keyword']").should('be.visible') //search field

        //verifing with ivalid data and blank data
        cy.xpath("//input[@placeholder='Search keyword']").type('##@&') //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.xpath("//input[@placeholder='Search keyword']").clear() //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.wait(2000)
        //verifing with valid data 
        cy.xpath("//input[@placeholder='Search keyword']").type('Test') //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.xpath("//input[@placeholder='Search keyword']").clear() //search field
        cy.xpath("//span[normalize-space()='Search']").should('be.visible').click()  //search button
        cy.wait(2000)


    }
    VerifySorting() 
    {
        //Ticker sorting 
        cy.xpath("//p-sorticon[@field='ticker']").click()
        cy.xpath("//p-sorticon[@field='ticker']").click()
    }
    VerifyNextPage()
    {
        cy.xpath("//button[normalize-space()='2']").should('be.visible').click() //page 2
        cy.wait(2000)
        cy.xpath("//button[normalize-space()='1']").should('be.visible').click() //page 1

    }
    VerifyEntriesNumberDropdown()
    {
        
            cy.xpath("//div[@class='p-dropdown-trigger ng-tns-c69-8']").as('dropdown');
        
            // Open the dropdown
            cy.xpath("//div[@class='p-dropdown-trigger ng-tns-c69-8']").click();
            cy.wait(2000)
        
            // Verify the options
            cy.xpath("/html/body/app-root/lib-main-layout/div/app-app-layout/app-investment-list/div[2]/lib-table-footer/div/p-paginator/div/p-dropdown").click()
            cy.xpath("//div[@class='p-dropdown-trigger ng-tns-c69-8']").click();
            cy.xpath("//li[@aria-label='25']").should('contain', '25').click();
            cy.wait(2000)
            cy.xpath("//div[@class='p-dropdown-trigger ng-tns-c69-8']").click();
            cy.xpath("//li[@aria-label='50']").should('contain', '50').click();
            
            
                
    }
    VerifyRefreshBtn()
    {
        cy.xpath("//span[@class='p-button-icon pi pi-refresh']").should('be.visible').click() 
        cy.wait(2000)

    }
    VerifyExcelBtn()
    {
        cy.xpath("//span[@class='p-button-icon pi pi-file-excel']").should('be.visible').click()
        cy.wait(2000)

    }
    VerifyAddBtn()
    {
        cy.xpath("//button[@title='Add']").should('be.visible').click() //add button
        cy.xpath("//h1[@class='modal-title ng-star-inserted']").should('be.visible') //h1 text

        //verifying fields name
        cy.xpath("//label[@for='ticker']").should('contain', 'Ticker ')
        cy.xpath("//label[@for='cusip']").should('contain', 'CUSIP ')
        cy.xpath("//label[@for='investmentName']").should('contain', 'Investment Name ')
        cy.xpath("//label[@for='legalName']").should('contain', 'Legal Name ')
        cy.xpath("//label[@for='investmentType']").should('contain', 'Investment Type ')

        //verifying with blank data
        cy.xpath("//span[normalize-space()='Save']").should('be.visible').click()

        //verifying with only one mandetory data
        cy.get(':nth-child(1) > .col > .input-area > .p-inputtext').type('test')
        cy.xpath("//span[normalize-space()='Save']").click()

        //verifying with blank space 
        cy.get(':nth-child(1) > .col > .input-area > .p-inputtext').clear() //ticker
        cy.get(':nth-child(1) > .col > .input-area > .p-inputtext').type(' ') //ticker
        cy.xpath("//input[@formcontrolname='cusip']").type(' ') //cusip
        cy.xpath("//input[@formcontrolname='investmentName']").type(' ') //Investment name
        cy.xpath("//input[@formcontrolname='legalName']").type(' ')  //legal name
        cy.xpath("/html/body/app-root/lib-main-layout/div/app-app-layout/app-investment-list/p-dialog/div/div/div[3]/app-investment-edit/div/form/div[5]/div/div/p-dropdown/div/span").click() //investment type
        cy.wait(2000)
        cy.xpath("//li[@aria-label='Mutual Fund']").click() //mutual fund
        cy.xpath("//span[normalize-space()='Save']").click()
        cy.wait(2000)
        cy.xpath("/html/body/app-root/lib-main-layout/p-toast/div/p-toastitem[1]/div/div/div/div[2]").should('have.text', 'One or more validation errors occurred.')
        cy.xpath("/html/body/app-root/lib-main-layout/p-toast/div/p-toastitem[2]/div/div/div/div[2]").should('have.text', 'Investment Name can not be empty')
       
        //verifying with valid data
        cy.get(':nth-child(1) > .col > .input-area > .p-inputtext').clear().type('Test 8')  //ticker
        cy.xpath("//input[@formcontrolname='cusip']").clear().type('Test 8') //cusip
        cy.xpath("//input[@formcontrolname='investmentName']").clear().type('Test 8') //Investment name
        cy.xpath("//input[@formcontrolname='legalName']").clear().type('Test 8')  //legal name
        cy.xpath("//span[normalize-space()='Save']").click()
        cy.wait(2000)
        cy.get('.ng-tns-c56-16.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-toast-message-text > .p-toast-detail').should('have.text','Ticker already exists.')
        cy.get('.ng-tns-c56-17.ng-trigger-toastAnimation > .ng-trigger > .p-toast-message-content > .p-toast-message-text > .p-toast-detail').should('have.text','CUSIP already exists.')


    }


}

export default InvestmentList