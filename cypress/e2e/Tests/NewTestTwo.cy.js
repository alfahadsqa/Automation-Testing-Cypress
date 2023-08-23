import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
import InvestmentList from "../Page Objects/InvestmentListPage"
import Overview from "../Page Objects/OverviewPage"
describe('Overview POM' , () =>{

        const OverviewPage = new Overview();
        const InvestmentListPage = new InvestmentList();
        const HomePage = new Login();
        const Page = new Methods();
        beforeEach(() => {
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
                Page.Wait()
          })
               
                it('verfying General Information', () => {
                
                    OverviewPage.VerifyGeneralInformation()
                    Page.Wait()
                });
                
                it('verfying Trailing Returns', () => {
                
                    OverviewPage.VerifyTrailingReturns()
                });
            
         });

       
         


        
        
        
        
       
       

  