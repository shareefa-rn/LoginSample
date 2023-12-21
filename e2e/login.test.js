import {by, device, element, expect} from 'detox';

describe('Login Screen Test Suit', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should display the welcome message', async () => {
    await expect(element(by.text('Welcome to Login Screen'))).toBeVisible();
    await expect(element(by.id('email_input'))).toBeVisible();
    await expect(element(by.id('password_input'))).toBeVisible();
    await expect(element(by.text('Login'))).toBeVisible();
    await expect(element(by.id('signup_button'))).toBeVisible();
  });

  it('should navigate to signup screen when signup button is pressed', async () => {
    await element(by.id('signup_button')).tap();
    await expect(element(by.text('Welcome to Signup Screen'))).toBeVisible();
  });

  it('should show login failure alert for incorrect credentials', async () => {
    await element(by.id('email_input')).typeText('incorrect@example.com');
    await element(by.id('password_input')).typeText('incorrectpassword');
    await element(by.id('login_button')).tap();

    // You may need to adjust the following expectations based on your actual logic and UI
    await expect(element(by.text('Login Failed'))).toBeVisible();
  });

  it('should enter email and password and login successfully', async () => {
    await element(by.id('email_input')).typeText('test@gmail.com');
    await element(by.id('password_input')).typeText('1234');
    await element(by.id('login_button')).tap();

    // You may need to adjust the following expectations based on your actual logic and UI
    await expect(element(by.text('Login Success.'))).toBeVisible();
  });
});
