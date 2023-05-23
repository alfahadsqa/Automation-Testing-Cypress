class Login
{

    SetUserName(username) 
    {
        cy.get(':nth-child(4) > .input-login').should('be.visible').type(username);
    }

    SetPassword(password) 
    {
        cy.get(':nth-child(5) > .input-login').should('be.visible').type(password);
    }

    ClickLogIn() 
    {
        cy.xpath("//button[@type='submit']").should('be.visible').click()
    }

    VerifyLogIn() 
    {
        cy.xpath("/html/body/app-root/app-main-container-layout/div/section/app-landing-page/div/div[1]/span").should('have.text', 'Hi Abdullah Al Fahad, Welcome to Unify');
    }

    GetAlertMessage()
    {
        cy.xpath("//p[@class='massage-invalid']").should('have.text', 'Invalid User Name or Password')
    }
  
    
}

export default Login