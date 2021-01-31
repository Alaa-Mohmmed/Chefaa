class viewOfferPage
{
   
    viewDetails()
    { 
        
        const menu = cy.get('.toggle-list > .fa')
        menu.click({ force: true })
        cy.wait(1000)
        const myOffer= cy.get(':nth-child(2) > a')
        myOffer.click({ force: true })
        cy.wait(3000)
        const arrow=cy.get(':nth-child(1) > a > .row > .col-md-1.col-6 > .order-details-link > .fa')
        arrow.click({ force: true })
    }
    offerStatus()
    {
        if (cy.get('.offer-controls > form > .btn').title('Activate'))
        {
            cy.get('.offer-controls > form > .btn').click({ force: true }) 
             
        }
        if(cy.get('.review-btn').title('Pause offer')) 
        {
            cy.get('.review-btn').click({ force: true })
            cy.get('.warnning-controls > form > .btn').click({ force: true })   
        }
       
      //  cy.get(‘.yellow-color’).parents(‘.align-items-center’).first().click()
        

        // (cy.get('.offer-controls > form > .btn').title('Activate')) ? this.checkActivate : this.checkPause     
    }

    // checkActivate(){
    //     cy.get('.offer-controls > form > .btn').click({ force: true }) 
    // }

    // checkPause(){
    //     cy.get('.review-btn').click({ force: true })
    //     cy.get('.warnning-controls > form > .btn').click({ force: true })
    // }

}
export default viewOfferPage 
