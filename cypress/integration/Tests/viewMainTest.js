import mainPage from '../Pages/mainPage' 
import loginPage from '../Pages/loginPage'
import loginTest from '../Tests/loginTest'

describe('Test pharmacy button actions in the main page', function() {
    
    before(() => {
       cy.restoreLocalStorageCache();
      cy.wait(3000)
     
      });
    it('test view page details' , function()
    {
        let testView = new mainPage()
        testView.viewDetails()
    })
     it('test view map' , function()
     {
       let testMap = new mainPage()
       testMap.viewMap()

     })
     
    }) 