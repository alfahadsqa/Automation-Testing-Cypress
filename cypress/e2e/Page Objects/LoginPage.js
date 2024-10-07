class Login
{

    VerifyLogo() 
    {
        cy.xpath("//img[@alt='logo']").should('be.visible') //logo img
        cy.xpath("//h2[@class='mb-4']").should('have.text', 'Unify Recordkeeping') //logo text
    }

    VerifyBackgroundImg() 
    {
        cy.xpath("//div[@class='login-screen']").should('be.visible')
    }
    VerifyfooterText() 
    {
        cy.xpath("//div[@class='login-copyrights']").should('have.text', ' © 2023, July Business Services. ')
    }
    

    SetUserName(username) 
    {
        cy.xpath("//input[@placeholder='Enter username']").should('be.visible').type(username);
    }

    SetPassword(password) 
    {
        cy.xpath("//input[@placeholder='Enter password']").should('be.visible').type(password);
    }

    ClickLogIn() 
    {
        cy.xpath("//span[@class='p-button-label']").should('be.visible').click()
    }

    VerifyLogIn() 
    {
        cy.xpath("//h1[@class='page-title']").should('have.text', 'Unify RK');
    }

    GetAlertMessageForInvalidUsername()
    {
        cy.xpath("//small[normalize-space()='Email is required']").should('have.text', 'Email is required')
    }
    GetAlertMessageForInvalidUPassword()
    {
        cy.xpath("//small[normalize-space()='Password is required']").should('have.text', 'Password is required')
    }
    GetAlertMessageForBothWorng()
    {
        cy.xpath("//p[normalize-space()='Username or Password Invalid!']").should('have.text', 'Username or Password Invalid!')
    }
    Geta
    
}

export default Login