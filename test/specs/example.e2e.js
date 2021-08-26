// import LoginPage from  '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open();

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!');
//         await expect(SecurePage.flashAlert).toBeExisting();
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
// });

var expect = require('chai').expect;

describe('Simple App testing', () => {
  beforeEach(() => {
    $('~app-root').waitForDisplayed(10000, false);
  });

  it('Login test: valid case', async => {
    $('~username').setValue('codemagic');
    $('~password').setValue('nevercode');

    $('~login').click();

    $('~loginstatus').waitForDisplayed(11000);
    const status = $('~loginstatus').getText();
    expect(status).to.equal('success');
  });

  it('Login test: invalid case', async => {
    $('~username').setValue('nevercode');
    $('~password').setValue('codemagic');

    $('~login').click();

    $('~loginstatus').waitForDisplayed(11000);
    const status = $('~loginstatus').getText();
    expect(status).to.equal('fail');
  });
});
