
import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
describe('LogInTest POM' , () =>{
    it('LogInTest', () => {

        const HomePage = new Login();
        const Page = new Methods();

        Page.OpenBaseUrl()
        Page.Wait()

        cy.fixture('LogInData').then((data)  => {

            HomePage.VerifyUnifyLogo()
            HomePage.VerifyUnifyText()
            HomePage.VerifyUnifyWelcomeText()
            HomePage.VerifyBackgroundImg()

            //verifying with valid/invalid username and valid/invalid password

            data.forEach((userdata) => {
            HomePage.SetUserName(userdata.username)
            HomePage.SetPassword(userdata.password)
            HomePage.ClickLogIn()
            
            if(userdata.username =='aafahad' && userdata.password == '123') {
 
                Page.Wait()
                HomePage.VerifyLogIn()
                Page.Wait()
                Page.NavigateBack()
            }
            else{
                Page.Wait()
                HomePage.GetAlertMessage()
                Page.Reload()
               
            }


            

          
           
            
            
         
        })
    

            })
        })
    })       
