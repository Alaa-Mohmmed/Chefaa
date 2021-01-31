class loginPage{

    visit()
    {
        cy.visit("https://pharmacy.chefaa.com/login")
    }

     setEmail(value)
   {
       const email= cy.get('#pharmacy-id')
       email.clear
       email.type(value)
       return this
   }
   setPassword(value)
   {
       const password= cy.get('#pharmacy-password')
       password.clear
       password.type(value)
       return this
   }
   
   submitBtn()
   {
    const btn= cy.get('.btn')
    btn.click({force:true})

   }

}
export default loginPage


