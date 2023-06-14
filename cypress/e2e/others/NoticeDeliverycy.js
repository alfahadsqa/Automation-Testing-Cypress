describe('first project' , () =>{
    it('Notice delivery Test', () => {

        // Verifying LogIn Page
        cy.visit("http://unifytest.julyservices.local/Unify.V2.Web/login")
        cy.get(':nth-child(4) > .input-login').should('be.visible').type('aafahad')
        cy.get(':nth-child(5) > .input-login').should('be.visible').type('123')
        cy.xpath("//button[@type='submit']").should('be.visible')
        cy.xpath("//button[@type='submit']").click()

        // Verifying add notice to plan
        cy.get('.dotted-top-right-btn').click()
        cy.get('.search-fields').click()
        cy.get('.search-fields').clear()
        cy.get('.search-fields').type('notice delivery')
        cy.xpath("//li[normalize-space()='Tools / Notice Delivery']").click()
        cy.wait(3000)
        cy.get("#mat-select-value-5").click()
        cy.wait(4000)
        cy.xpath("//span[normalize-space()='Test - 008 (Annual)']").click()
        cy.wait(2000)
        cy.xpath("//i[@class='jdsi-plus-solid']").click()
        cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-4 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('#mat-radio-2 > .mat-radio-label > .mat-radio-label-content').click()
        cy.get('.search-box-wrapper > .clearfix > .jds-btn').click()
        cy.get('.search-box-wrapper > .clearfix > .jds-btn').click()
        cy.get('form.ng-untouched > .grid-between > :nth-child(2) > .jds-btn').click()
        cy.xpath("//p[@class='mb-15']").should('have.text', 'WARNING: Please Select Notice Types')
        cy.xpath("//button[@class='jds-btn btn-lg primary pl-20 pr-20']").click()
        cy.wait(2000)
        cy.get('#mat-checkbox-164 > .mat-checkbox-layout > .mat-checkbox-label').click()
        cy.get('form.ng-untouched > .grid-between > :nth-child(2) > .jds-btn').click()
        cy.wait(3000)
        cy.get('.grid.ng-star-inserted > .mat-form-field').click()
        cy.xpath("//span[normalize-space()='Notice Delivery']").click()
        cy.get('.mb-5 > .jds-btn').click()
        cy.wait(3000)
        cy.xpath("//a[@title='Plan Name Filter Menu']//span[@class='k-icon k-i-filter']").click()
        cy.xpath("//kendo-grid-string-filter-menu-input[1]//kendo-grid-filter-menu-input-wrapper[1]//input[1]").type('enrollment')
        
        cy.xpath("//button[@type='submit']").click()
        cy.wait(2000) 
        cy.get('#k-grid2-checkbox0').click()
        cy.xpath("//button[normalize-space()='Create']").click()
        cy.get('.mat-simple-snack-bar-content').should('have.text', 'Successfully Created!')
        cy.wait(3000)
        cy.get("#mat-select-value-13").click()
        cy.xpath("//span[normalize-space()='Test - 008 (Annual)']").click()


        //Verifying Global Notice configuration 
        cy.xpath("//button[@class='jds-btn btn-small outline-primary']").click()
        cy.xpath("//button[@class='jds-btn btn-lg primary pl-20 pr-20']").click()
        cy.wait(3000)
        cy.xpath("//a[@title='Plan Name Filter Menu']//span[@class='k-icon k-i-filter']").click();
        cy.xpath("//kendo-grid-string-filter-menu-input[1]//kendo-grid-filter-menu-input-wrapper[1]//input[1]").type('enroll')
        cy.xpath("//button[@type='submit']").click()
        cy.wait(3000)
        cy.xpath("//input[@id='selectAllCheckboxId']").click()
        cy.xpath("//button[@class='jds-btn btn-small outline-primary']").click()
            //verifying start date for invalid year
            cy.get(':nth-child(1) > .grid > unify-date-picker.col > .k-datepicker > .k-input-button > .k-button-icon').click()
            cy.xpath("//span[@class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title']").click()
            cy.xpath("//span[@class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title']").click()
            cy.xpath("//span[normalize-space()='2024']").click()
            cy.xpath("//span[normalize-space()='Jun']").click()
            cy.xpath("//span[normalize-space()='18']").click()
            //verifying End date for invalid year
            cy.get('.col-6.col-middle > .grid > unify-date-picker.col > .k-datepicker > .k-input-button > .k-button-icon').click()
            cy.xpath("//span[@class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title']").click()
            cy.xpath("//span[@class='k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-calendar-title']").click()
            cy.xpath("//span[normalize-space()='2024']").click()
            cy.xpath("//span[normalize-space()='Jun']").click()
            cy.xpath("//span[normalize-space()='19']").click()
            //Verifying generate button
            cy.get('.buttons-group > :nth-child(2) > .jds-btn').should('be.visible').click()
            cy.get('.mat-dialog-content > .mb-15').should('have.text', 'WARNING: You must enter Start date Year same as Notice Year')
            cy.get('.grid > .ng-star-inserted > .jds-btn').click()
            cy.get('.cdk-drag > .jds-btn').click()
            
            //verifying Notice Detail form
            cy.get('[data-kendo-grid-column-index="2"] > .ng-star-inserted').click()
            cy.wait(3000)
            cy.get(':nth-child(4) > .cdk-column-NoticeTypeName > .d-inline-block > .ng-star-inserted').click()
            cy.wait(3000)
            cy.xpath("//span[@class='k-icon k-i-upload']").attachFile('Testdata.pdf', { subjectType: 'drag-n-drop' })
            cy.wait(3000)
            cy.get('.buttons-group > :nth-child(2) > .jds-btn').click()
            cy.xpath("//p[@class='mb-15']").should('have.text', 'WARNING: File Status is missing.')
            cy.xpath("//button[@class='jds-btn btn-lg primary pl-20 pr-20']").click()
            cy.wait(3000)
            cy.get("div.clearfix div.mat-select-arrow-wrapper").click();
            cy.wait(3000)
            cy.xpath("//span[@class='mat-option-text'][normalize-space()='Active']").click();
            cy.get("mat-cell.cdk-column-StartDate svg").click();
            cy.get("tr:nth-of-type(2) > td:nth-of-type(6) div.mat-calendar-body-cell-content").click();
            cy.get("mat-cell.cdk-column-EndDate svg").click();
            cy.get("tr:nth-of-type(6) > td:nth-of-type(4) div.mat-calendar-body-cell-content").click();
            cy.xpath("//button[@class='jds-btn primary']").click();
            cy.get('.mat-simple-snack-bar-content').should('have.text','Successfully Updated.')
            cy.wait(3000)
            cy.get(':nth-child(4) > .cdk-column-NoticeTypeName > .d-inline-block > .ng-star-inserted').click()
            cy.get('.buttons-group > :nth-child(2) > .jds-btn').scrollIntoView()
            //verifing delete option in notice detail form
            cy.xpath("//i[@class='jdsi-delete text-error']").click();
            cy.xpath("//button[@class='jds-btn btn-lg primary pl-20 pr-20']").click();
           
            cy.xpath("//button[@type='button'][contains(text(),'✖')]").click();

            //reading notice file in notice detail form
            cy.get(':nth-child(4) > .cdk-column-NoticeTypeName > .d-inline-block > .ng-star-inserted').click()
            cy.wait(3000)
            cy.xpath("//span[@class='k-icon k-i-upload']").attachFile('testdata.pdf', { subjectType: 'drag-n-drop' })
            cy.wait(3000)
            cy.get("div.clearfix div.mat-select-arrow-wrapper").click();
            cy.wait(3000)
            cy.xpath("//span[@class='mat-option-text'][normalize-space()='Active']").click();
            cy.get("mat-cell.cdk-column-StartDate svg").click();
            cy.get("tr:nth-of-type(2) > td:nth-of-type(6) div.mat-calendar-body-cell-content").click();
            cy.get("mat-cell.cdk-column-EndDate svg").click();
            cy.xpath("//a[@title='Plan Name Filter Menu']//span[@class='k-icon k-i-filter']").click();
            cy.xpath("//button[@class='jds-btn primary']").click();
            cy.get('.mat-simple-snack-bar-content').should('have.text','Successfully Updated.')
            cy.wait(3000)
            cy.get(':nth-child(4) > .cdk-column-NoticeTypeName > .d-inline-block > .ng-star-inserted').click()
            cy.get('.buttons-group > :nth-child(2) > .jds-btn').scrollIntoView()
            cy.xpath("//button[@type='button'][contains(text(),'✖')]").click();

            //verifying ready to send
            cy.get('.jdsi-function').click()
            cy.get('.mt-5').click()
            cy.wait(3000)
            cy.get('.w-350px > .grid > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').click()
            cy.wait(3000)
            cy.xpath("//span[normalize-space()='Test - 008 (Annual)']").click()

            //verifying send to participants 
            cy.xpath("//div[@class='mat-form-field-infix ng-tns-c123-6']").click()
            cy.wait(3000)
            cy.xpath("//span[@class='mat-option-text'][normalize-space()='Ready to Send']").click()
            cy.xpath("//input[@id='k-grid1-checkbox4']").should('be.visible').click()
            cy.xpath("//button[@class='jds-btn btn-small outline-primary']").click()
            cy.wait(2000)
            cy.xpath("//p[@class='mb-15']").should('have.text', "WARNING: Are you sure you want to move these selected items to 'Send to Participant' stage?.")
            cy.xpath("//button[@class='jds-btn btn-lg primary pl-20 pr-20']").click()
            

            

            
            
        })
            
})