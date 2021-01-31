class acceptOrderPage
{
    
    viewDetails()
    { 
        const arrow = cy.get(':nth-child(1) > .row > .col-md-1.col-6 > .order-details-link > .fa')
        arrow.click({ force: true })
        cy.wait(3000)
        cy.scrollTo(0, 500)  
    }
    acceptOrder()
    {
        const accept=  cy.get('.btns-container > div > .accept-btn')
        accept.click({force:true})
    }

}
export default acceptOrderPage