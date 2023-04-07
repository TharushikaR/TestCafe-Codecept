Feature('example');

Scenario('Test 1',  ({ I }) => {
    I.amOnPage("https://www.example.com/")
    I.wait(1)
    I.waitForElement("h1")
    I.see("Example")
});

Scenario('Test 2',  ({ I }) => {
    I.amOnPage("https://www.example.com/")
    I.wait(1)
    I.dontSeeElement(".login-form")
    I.seeInCurrentUrl("example.com")
});

Scenario('Test 3',  ({ I }) => {
    I.amOnPage("https://www.example.com/")
    I.wait(1)
    I.waitForElement("h1")
    I.see("Example")
    I.dontSeeElement(".login-form")
    I.seeInCurrentUrl("example.com")
});

Scenario('Full Page Screenshot',  ({ I }) => {
    I.amOnPage("https://www.example.com/")
    I.wait(1)
    I.saveScreenshot("test.png",true)
});

Scenario('Single Element Screenshot',  ({ I }) => {
    I.amOnPage("https://www.example.com/")
    I.wait(1)
    I.saveElementScreenshot("h1","element.png")
});

Scenario('AVN Login UAT05 - Success',  ({ I }) => {
    I.amOnPage("https://uat05avn.intertrav.co.uk/myavanti/signin")
    I.fillField("#username","livetesttharushiunification@gmail.com")
    I.fillField("#password","Rathnayaka@1995")
    I.click("#signInBtn")
    I.waitForElement("#header_home")
    I.click("#sidebar_signout")
});

Scenario('AVN Login UAT05 - Fail',  ({ I }) => {
    I.amOnPage("https://uat05avn.intertrav.co.uk/myavanti/signin")
    I.fillField("#username","livetesttharushiunification@gmail.com")
    I.fillField("#password","Rathnayaka#1995")
    I.click("#signInBtn")
    I.waitForText("The email/password combination you have entered does not match any of our records, please try again. 4 attempts remaining.")
});


Scenario('Extract Text', async ({ I }) => {
    I.slowTest(0.2)
    I.amOnPage("https://www.example.com/")
    I.refreshPage()
    let text=await I.grabTextFrom("h1")
    console.log("Text: "+ text)
    let value=await I.grabValueFrom("h1")
});

Scenario('Page Objects-MyAcc Login-Forgot Password', ({ I,LoginPage }) => {
    LoginPage.goto()
    LoginPage.fillForm()
    I.waitForText("Password Reset Email Sent")
});