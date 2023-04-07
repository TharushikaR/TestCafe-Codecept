const { I } = inject();

module.exports = {

  // insert your locators and methods here
  goto(){
    I.amOnPage("https://uat05avn.intertrav.co.uk/myavanti/signin")
  },

  fillForm(){
    I.click("Forgotten your password?")
    I.fillField("#login","livetesttharushiunification@gmail.com")
    I.click("#forgotPasswordStep1SubmitBtn")
  }
}
