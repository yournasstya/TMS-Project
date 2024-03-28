import { 
    invalidAgeErr, 
    invalidEmailErr, 
    invalidPasswordErr, 
    invalidTermsAgreementErr, 
    invalidUsernameErr 
} from "../data/constants/errors";
import { emailRegex, passwordRegex } from "../data/constants/regExp";

export class RegistrationForm {
    protected email: string;
    protected password: string;
    protected username: string;
    protected age: number;
    protected termsAgreement: boolean = false;
    protected registered: boolean = false;

    constructor(email: string, password: string, username: string, age: number, termsAgreement: boolean, registered: boolean) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.age = age;
        this.termsAgreement = termsAgreement;
        this.registered = registered;
    } 

    setEmail(email: string) {
        if (!emailRegex.test(email.trim())) {
          throw new Error('Invalid email format');
        }
        return this.email = email;
    }

    setPassword(password: string) {
        if (!passwordRegex.test(password)) {
            throw new Error('Invalid password format');
        }
        return this.password = password;
    }

    setUsername(username: string) {
        if (username.trim() === '') {
            throw new Error('Invalid username format');
        }
        return this.username = username;
    }

    setAge(age: number) {
        if (age % 1 !== 0) {
            throw new Error('Age must be a whole number');
        } else if (age > 0 && age < 150) {
            return this.age = age;
        } else {
            throw new Error('Invalid age format');
        }
    }

    agreeWithTerms() {
        return this.termsAgreement = true;
    }

    register() {
        switch (true) {
            case !this.email:
              return invalidEmailErr;
            case !this.password:
              return invalidPasswordErr;
            case !this.username:
              return invalidUsernameErr;
            case !this.age:
              return invalidAgeErr;
            case !this.termsAgreement:
              return invalidTermsAgreementErr;
            default:
            this.registered = true;
            const registrationDate = new Date().toLocaleString();
            return `User ${this.username} successfully registered at ${registrationDate}`;
        }
    }
}
