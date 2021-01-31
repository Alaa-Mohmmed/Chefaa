

class mainPage{

    viewDetails()
    {
        const arrow = cy.get(':nth-child(1) > .row > .col-md-1.col-6 > .order-details-link > .fa')
        arrow.click({ force: true })
        cy.wait(3000)
        cy.scrollTo(0, 500)   
    }
    viewMap()
    {
        const showMap =cy.get('.pull-right')
        showMap.click({ force: true })

    }

}

export default  mainPage