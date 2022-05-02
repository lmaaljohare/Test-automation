/// <reference types="cypress-xpath" />
/// <reference path="..\..\node_modules\cypress-xpath\src\index.d.ts" />

describe('cypress-xpath', () => {
    context('Test Cases', ()=>{
    beforeEach(() =>{
        cy.visit('https://skillsmatch.mdx.ac.uk/en/')
        cy.xpath("//input[@id='username']").type('team14')
        cy.xpath("//input[@id='password']").type('team@14')
        cy.get('.btn').click()
        })

        

        const keyword1 = "software"
        const keyword2 = "java"
        const keyword3 = "Python"
        const course = "Java Programming Masterclass covering Java 11 & Java 17"
 
        require("cypress-xpath");
        
          
       
    })
})
   



