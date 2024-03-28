import { 
    invalidAgeErr, 
    invalidPasswordErr, 
    invalidTermsAgreementErr, 
    invalidUsernameErr } from '../data/constants/errors';
import { RegistrationForm } from '../src/registrationForm';

describe('Unit tests for registration form', () => {
    let registrationForm: RegistrationForm;

    beforeEach(() => {
        registrationForm = new RegistrationForm('email@icloud.com', 'Password1234', 'userName', 21, true, true);
    })
  
    test('Should be a valid email', () => {
        const email: string = "email1@gmail.com";
        expect(registrationForm.setEmail(email)).toBe(email);
    });

    test('Should be a valid email with spaces', () => {
        const email: string = "              email1@gmail.com";
        expect(registrationForm.setEmail(email)).toBe(email);
    });

    test('Should be a valid password', () => {
        const password: string = "ap0ssdAd1";
        expect(registrationForm.setPassword(password)).toBe(password);
    });

    test('Should be a valid password only numbers', () => {
        const password: string = "1234567890";
        expect(registrationForm.setPassword(password)).toBe(password);
    });

    test('Should be a valid username', () => {
        const userName: string = "urnastasss"
        expect(registrationForm.setUsername(userName)).toBe(userName);
    });

    test('Should be a valid username with spaces', () => {
        const userName: string = "   urnastasss     "
        expect(registrationForm.setUsername(userName)).toBe(userName);
    });

    test('Should be a valid username only numbers', () => {
        const userName: string = "28384752101-31"
        expect(registrationForm.setUsername(userName)).toBe(userName);
    });

    test('Should be a valid password with special characters', () => {
        const password: string = "PASSWORD$%27__xd"
        expect(registrationForm.setPassword(password)).toBe(password);
    });
    
    test('Should be a valid username with numbers', () => {
        const userName: string = "urnastasss2710282"
        expect(registrationForm.setUsername(userName)).toBe(userName);
    });
    
    test('Should be a valid email with long domain', () => {
        const email: string = "email_kjaADDOdkjnehFFFkndics81237aaaaaaaaaaaaaaaaaa@audnaid.com";
        expect(registrationForm.setEmail(email)).toBe(email);
    });

    test('Should be a valid age', () => {
        const age: number = 20;
        expect(registrationForm.setAge(age)).toBe(age);
    });

    test('Should be agree with terms', () => {
        expect(registrationForm.agreeWithTerms()).toBe(true);
    });

    test('Should be age at the lower bound', () => {
        const age: number = 1;
        expect(registrationForm.setAge(age)).toBe(age);
    });

    test('Should be age at the upper bound', () => {
        const age: number = 149;
        expect(registrationForm.setAge(age)).toBe(age);
    });

    test('Should be registration successfully', () => {
        registrationForm.setEmail("gausbs12ucjsnl3@gmail.com");
        registrationForm.setPassword("aisjaa234");
        registrationForm.setUsername("yournastsss");
        registrationForm.setAge(20);
        registrationForm.agreeWithTerms();
        expect(registrationForm.register()).toContain("successfully registered");
    });

    test('Should be invalid email consisting of only letters', () => {
        const invalidEmail: string = "asap@com";
        expect(registrationForm.setEmail(invalidEmail)).toBe(invalidEmail);
    });

    test('Should be invalid email consisting of an empty string', () => {
        const invalidEmail: string = " ";
        expect(registrationForm.setEmail(invalidEmail)).toBe(invalidEmail);
    });

    test('Should be invalid email with only numbers', () => {
        const invalidEmail: string = "@3.41";
        expect(registrationForm.setEmail(invalidEmail)).toBe(invalidEmail);
    });

    test('Should be invalid password with only numbers', () => {
        const invalidPassword: string = "12345";
        expect(registrationForm.setPassword(invalidPassword)).toBe(invalidPassword);
    });

    test('Should be invalid password with only symbols', () => {
        const invalidPassword: string = "%%%%%%%%%%%%%%%%%%%";
        expect(registrationForm.setPassword(invalidPassword)).toBe(invalidPassword);
    });

    test('Should be invalid password consisting of only letters', () => {
        const invalidPassword: string = "aisowWw";
        expect(registrationForm.setPassword(invalidPassword)).toBe(invalidPassword);
    });

    test('Should be invalid username, empty string', () => {
        const invalidUserName: string = "";
        expect(registrationForm.setUsername(invalidUserName)).toBe(invalidUserName);
    });

    test('Should be invalid username, empty string with spaces', () => {
        const invalidUserName: string = "      ";
        expect(registrationForm.setUsername(invalidUserName)).toBe(invalidUserName);
    });

    test('Should be negative age number', () => {
        const invalidAge: number = -27;
        expect(registrationForm.setAge(invalidAge)).toBe(invalidAge);
    });

    test('Should be fractional age number', () => {
        const invalidAge: number = 149.9;
        expect(registrationForm.setAge(invalidAge)).toBe(invalidAge);
    });

    test('Should be zero age number', () => {
        const invalidAge: number = 0;
        expect(registrationForm.setAge(invalidAge)).toBe(invalidAge);
    });

    test('Should be largest age number', () => {
        const invalidAge: number = 150;
        expect(registrationForm.setAge(invalidAge)).toBe(invalidAge);
    });

    test('Should be unsuccessfully registration due to invalid email', () => {
        registrationForm.setEmail("gausbs12ucjsnl3@com");
        registrationForm.setPassword("aisjaa234");
        registrationForm.setUsername("yournastsss");
        registrationForm.setAge(20);
        registrationForm.agreeWithTerms();
        expect(registrationForm.register()).toContain(" Invalid email format");
    });

    test('Should be unsuccessfully registration due to invalid password', () => {
        registrationForm.setEmail("gausbs12ucjsnl3@gmail.com");
        registrationForm.setPassword("ai 321");
        registrationForm.setUsername("yournastsss");
        registrationForm.setAge(27);
        registrationForm.agreeWithTerms();
        expect(registrationForm.register()).toContain(invalidPasswordErr);
    });

    test('Should be unsuccessfully registration due to invalid username', () => {
        registrationForm.setEmail("gausbs12ucjsnl3@gmail.com");
        registrationForm.setPassword("aisjaa234");
        registrationForm.setUsername(" ");
        registrationForm.setAge(27);
        registrationForm.agreeWithTerms();
        expect(registrationForm.register()).toContain(invalidUsernameErr);
    });

    test('Should be unsuccessfully registration due to invalid age', () => {
        registrationForm.setEmail("123dnbfhjsd@gmail.com");
        registrationForm.setPassword("nxcvbnxcv123");
        registrationForm.setUsername("user123A");
        registrationForm.setAge(277);
        registrationForm.agreeWithTerms();
        expect(registrationForm.register()).toBe(invalidAgeErr);
    });
});
