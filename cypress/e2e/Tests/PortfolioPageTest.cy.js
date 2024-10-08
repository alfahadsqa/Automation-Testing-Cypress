import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
import InvestmentList from "../Page Objects/InvestmentListPage"
import Portfolio from "../Page Objects/PortfolioPage"


describe('Portfolio POM' , () =>{
    it.only('Portfolio Page Test', () => {
        const PortfolioPage = new Portfolio(); 
        const InvestmentListPage = new InvestmentList();
        const HomePage = new Login();
        const Page = new Methods();
        Page.OpenBaseUrl()

        cy.fixture('LogInData').then((data)  => {
            //verfying with valid username and valid password
            HomePage.SetUserName(data.username)
            HomePage.SetPassword(data.password);
            HomePage.ClickLogIn()
            HomePage.VerifyLogIn()
            Page.Wait()


            })

        InvestmentListPage.VerifyNavigation();
        Page.Wait()
        InvestmentListPage.VerifyInvestmentListBtn();
        Page.Wait()
        PortfolioPage.ClickOnPortfolio();
        PortfolioPage.VerifyProtfolio();
        PortfolioPage.VerifyProtfolioVersion();
        })
       
       

    }) 