Welcome to CHEFAA Cypress Stater Kit!
This is starter kit for cypress for chefaa QC team for building E2E testing cases

Requirements
NodeJS
NPM
NPX
Setup
$ git clone https://github.com/Chefaait/chefaa_cypress_starter
$ cd chefaa_cypress_starter
$ npm i
Folders structures
├── ...
├── cypress                    
│   |── integration.        	#  Contains all test flow  
|       |── flowName        	#  Contains all test cases 
│   		├── test1.spec.js   #  Your tast case
|			├── test2.spec.js   #  Your tast case
|			├── etc.........
└── ...
Write your test cases here

EX.

describe('Implicit Assertions', () => {
    
    it('Should found chefaa sub categories', () => {
    cy.visit('https://chefaa.com/ar/');
    cy.get('#tooltip_offer > .modal-dialog > .modal-content > .close > span').click()
    cy.get('.subcategories-section').contains('Main Categoies')
    
	})
	
})
Run Test cases
Run local for testing

$ npm run dev
Run in Production for CI/CD

$ npm run prod
test readme