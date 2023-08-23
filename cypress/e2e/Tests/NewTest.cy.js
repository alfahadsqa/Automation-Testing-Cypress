
import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
describe('LogInTest POM' , () =>{
    const HomePage = new Login();
    const Page = new Methods();
   

    it('Veryfing logo"and background image', () => {
        Page.OpenBaseUrl()
       
        //Veryfing logo"and background image
        Page.Wait()
        HomePage.VerifyLogo()
        HomePage.VerifyBackgroundImg()
        HomePage.VerifyfooterText()
        Page.Wait()
    });

    it('Veryfing with balnk data', () => {
        Page.OpenBaseUrl()
         //Veryfing with balnk data
         HomePage.ClickLogIn()
         HomePage.GetAlertMessageForInvalidUsername()
         HomePage.GetAlertMessageForInvalidUPassword()
         Page.Reload()
         Page.Wait()
    });

    it('verfying with invalid username and valid password', () => {
        Page.OpenBaseUrl()
      //verfying with invalid username and valid password
      HomePage.SetUserName("abc")
      HomePage.ClickLogIn()
      HomePage.GetAlertMessageForInvalidUPassword()
      Page.Reload()
      Page.Wait()
   });

   it('verfying with valid username and invalid password', () => {
    Page.OpenBaseUrl()
    //verfying with valid username and invalid password
    HomePage.SetPassword("55555555555")
    HomePage.ClickLogIn()
    HomePage.GetAlertMessageForInvalidUsername()
    Page.Reload()
    Page.Wait()
    });

    it('verfying with valid username and valid password', () => {
    Page.OpenBaseUrl()
    cy.fixture('LogInData').then((data)  => {
            
        //verfying with valid username and valid password
        HomePage.SetUserName(data.username)
        HomePage.SetPassword(data.password);
        HomePage.ClickLogIn()
        HomePage.VerifyLogIn()
        Page.Wait()


    })
 });
        
        
    })       
