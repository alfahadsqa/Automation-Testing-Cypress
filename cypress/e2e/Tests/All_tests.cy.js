import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
import InvestmentList from "../Page Objects/InvestmentListPage"
import Overview from "../Page Objects/OverviewPage"
import PlanAssociation from "../Page Objects/PlanAssociationPage"
import Portfolio from "../Page Objects/PortfolioPage"
import PriceHistory from "../Page Objects/PriceHistoryPage"
import RKConfiguration from "../Page Objects/RKConfigurationPage"

describe('Investment List POM' , () =>{
    it.only('Investment List Test', () => { 

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

        InvestmentListPage.VerifyNavigation()
        Page.Wait()
        InvestmentListPage.VerifyInvestmentListBtn()
        Page.Wait()
        InvestmentListPage.VerifyTickerSearch()
        InvestmentListPage.VerifyInvesmentNameSearch()
        Page.Reload() 
        Page.Wait()
        InvestmentListPage.VerifySorting()
        InvestmentListPage.VerifyEntriesNumberDropdown()
        InvestmentListPage.VerifyNextPage()
        InvestmentListPage.VerifyRefreshBtn()
        InvestmentListPage.VerifyExcelBtn()
        Page.Wait()
        InvestmentListPage.VerifyAddBtn()   

        })
       
       

    });       

describe('LogInTest POM' , () =>{
    it.only('LogInTest', () => {
    
        const HomePage = new Login();
        const Page = new Methods();

        Page.OpenBaseUrl()

        cy.fixture('LogInData').then((data)  => {
            //Veryfing logo"and background image
            Page.Wait()
            HomePage.VerifyLogo()
            HomePage.VerifyBackgroundImg()
            HomePage.VerifyfooterText()
            //Veryfing with balnk data
            HomePage.ClickLogIn()
            HomePage.GetAlertMessageForInvalidUsername()
            HomePage.GetAlertMessageForInvalidUPassword()
            Page.Reload()
            Page.Wait()
            //verfying with invalid username and valid password
            HomePage.SetUserName("abc")
            HomePage.ClickLogIn()
            HomePage.GetAlertMessageForInvalidUPassword()
            Page.Reload()
            Page.Wait()
            //verfying with valid username and invalid password
            HomePage.SetPassword("55555555555")
            HomePage.ClickLogIn()
            HomePage.GetAlertMessageForInvalidUsername()
            Page.Reload()
            Page.Wait()
            //verfying with valid username and valid password
            HomePage.SetUserName(data.username)
            HomePage.SetPassword(data.password);
            HomePage.ClickLogIn()
            HomePage.VerifyLogIn()
            Page.Wait()


            })
        })
    });
        
describe('Overview POM' , () =>{
    it.only('Overview Page Test', () => {
        
        const OverviewPage = new Overview();
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

        InvestmentListPage.VerifyNavigation()
        Page.Wait()
        InvestmentListPage.VerifyInvestmentListBtn()
        Page.Wait()
        OverviewPage.CLickOnTicker()
        OverviewPage.VerifyGeneralInformation()
        OverviewPage.VerifyTrailingReturns()
        OverviewPage.VerifyStatus()
        OverviewPage.VerifyInvestmentIDs()
        
        })
       
       

    });


describe('Plan Association POM' , () =>{
    it.only('Plan Association Page Test', () => {
        const PlanAssociationPage = new PlanAssociation(); 
        const OverviewPage = new Overview();
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
        OverviewPage.CLickOnTicker();
        PlanAssociationPage.ClickOnPlanAssociation();
        PlanAssociationPage.VerifyPlanAssociation();

        })
       
       

    });
                
                


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
       
       

    });
        
    

describe('Price History POM' , () =>{
    it.only('Price History Page Test', () => {
        const PriceHistoryPage = new PriceHistory();
        const OverviewPage = new Overview();
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
        OverviewPage.CLickOnTicker();
        PriceHistoryPage.ClickOnPriceHistory();
        PriceHistoryPage.VerifyDividendAccrual();
        Page.Wait()
        PriceHistoryPage.VerifyChart();
        // PriceHistoryPage.VerifyAccrualRate();
        PriceHistoryPage.VerifyPriceHistory();
        PriceHistoryPage.VerifyRefreshBtn();
        PriceHistoryPage.VerifyAddBtn();
        PriceHistoryPage.VerifyExcelBtn();

        })
       
       

    });
                        
                        


describe('RK Configuration POM' , () =>{
    it.only('RK Configuration Page Test', () => {
        const RKConfigurationPage = new RKConfiguration(); 
        const PriceHistoryPage = new PriceHistory();
        const OverviewPage = new Overview();
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
        OverviewPage.CLickOnTicker();
        PriceHistoryPage.ClickOnPriceHistory();
        RKConfigurationPage.ClickOnRKConfiguration();
        RKConfigurationPage.VerifyGeneralSettings();
        RKConfigurationPage.VerifyTargetRetirement();
        RKConfigurationPage.VerifyTradeRestrictions()

        })
       
       

    });


                       
describe('TradingFees POM' , () =>{
    it.only('TradingFees Page Test', () => {
        const TradingFeesPage = new TradingFees(); 
        const OverviewPage = new Overview();
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
        OverviewPage.CLickOnTicker();
        TradingFeesPage.ClickOnTradingFees();
        // TradingFeesPage.VerifyTradingFees();
        // TradingFeesPage.VerifyFeeRules();

        })
    
    

    })


                             
                            
