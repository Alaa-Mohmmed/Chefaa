import loginPage from '../Pages/loginPage'
//import 'cypress-file-upload';

describe('Test pharmacy dashboard', function() {
  
    it('test login pass' , function()
    {
        const lp = new loginPage()
        lp.visit()
        lp.setEmail('01015708282')
        lp.setPassword('123456')
        lp.submitBtn()
        cy.saveLocalStorage()

    })

    afterEach(() => {
      cy.restoreLocalStorageCache();
    });

    

    })
    
