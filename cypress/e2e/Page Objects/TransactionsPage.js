class transactions 
{

    ClickOnTransactionsBtn()
    {
        cy.get(':nth-child(7) > .ng-star-inserted > span').click({force: true});  //Transactions btn
        

        
    }

    ClickOnAddTransactionsBtn() 
    {
        cy.xpath("//button[normalize-space()='Add Transaction']").should('be.visible').click({force: true});  //AddTransactions btn
        
    }

    ClickOnAddStockSplitBtn()
    {
        cy.get(':nth-child(3) > .border-bottom-none > span').click();  //StockSplit btn
        
    }

    TestStockSplitProcess() {

        cy.wait(1000);
        cy.get('.flex-order-0 > :nth-child(1) > .input-area > .search-button > .dp-search-1').click() //Plan field
        cy.wait(2000);
        cy.get("form > div > div > input").type("Test Plan For Payroll Contribution- Sharley"); //Search field
        cy.xpath("//span[@class='p-button-label']").click(); ////Search button
        cy.wait(1000);
        cy.get("td.text-center span").click(); //plan name
        cy.get("div.flex-order-0 > div:nth-of-type(2) input").click(); //Effective date
        cy.get("button.p-datepicker-prev svg").click();
        cy.get("tr:nth-of-type(5) > td:nth-of-type(2) > span").click();
        cy.get("div.flex-order-0 > div:nth-of-type(3) input").click();
        cy.get("div.flex-order-0 > div:nth-of-type(3) svg").click();
        cy.get("div.flex-order-0 > div:nth-of-type(3) svg").click();
        cy.get("button.p-datepicker-prev svg").click(); //Record date
        cy.get("tr:nth-of-type(5) > td:nth-of-type(2)").click();
        cy.get("tr:nth-of-type(5) > td:nth-of-type(2) > span").click();
        cy.get("div.flex-order-1 > div:nth-of-type(2) > div:nth-of-type(1) span").click();
        cy.get("#pn_id_5_10").click();
        cy.get("div.flex-order-1 > div:nth-of-type(3) > div:nth-of-type(1) span").click();//Select investment
        cy.get("div.flex-order-1 > div:nth-of-type(3) > div:nth-of-type(1) span").click();
        cy.get("#stockSplitRatioNumerator").type("10"); //Ratio
        cy.get("#stockSplitRatioDenominator").type("1"); //For
        cy.get("form > div.flex").click(); //save button
        cy.get("p-button:nth-of-type(2) span.p-button-label").click(); // ready to post button
        cy.wait(1500);
        cy.get("div.page-sub-title > div > div > div button").click();// post button
        cy.wait(1500);
        cy.get("div.flex-grow-1 span.dp-tick").click(); 
        cy.reload();
        cy.reload();
        cy.wait(2000);
        cy.get(':nth-child(4) > a').click(); //processing deatails 
        cy.xpath("//span[@class='ml-5 max-w-30rem mt-1'][normalize-space()='31101.93']").should('have.text','31101.93'); //allocation amount




    }

}
export default transactions