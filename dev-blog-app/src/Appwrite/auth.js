import { Client, Account, ID } from "appwrite";

import config from "../conf/config";

export class AuthService {

    client = new Client()

    account;

    constructor() {
        this.client
        .setEndpoint(config.AppwriteUrl) // Your API Endpoint
        .setProject(config.ProjectId);
        this.account = new Account(this.client);
    }



    async createAccount({ email, password, name }) {
        try {

            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //usr created and need to login s login is defined we can return it here,
                const logInData= {
                    email, 
                    password
                };
                return this.login(logInData);

            } else {

                return userAccount;
            }


        } catch (error) {
            throw error;
        }
    }



    async login({email, password}) {
        try {
            console.log("login tried fn call from auth.js", email," and  ", password)
            const userLogin = await this.account.createEmailSession(email, password);
            return userLogin;
        } catch (error) {
            throw error;
        }

    }



    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
           if(error.type ==='general_unauthorized_scope')
            console.log("User not Logged in...");
        

        }
    }


    async logout(){
        try {
                return await this.account.deleteSessions();
        } catch (error) {
            console.log("APPWRITE_SERVICE::LOGOUT ERROR ",error);
        }
    }

}

const authService = new AuthService()
export default authService 


/* 
    here class used to make code independent of platform. We can use the same code with other platform we just need 
    to set env files and other things but functions will remain same.
    client create a new client more like it tells appwrite about our project inside which users are createdd using 
    accounts. each time new obejct of Authservice is intiatated a constructor called which create an account

    creaateAccount function will create new user account it uses create which is coming from appwrite.
    Under the hood what happening no need to worry about it. It take unique id, email and password to create the user.
     Here we are building email-password auth service Appwrite provide other things also. we can use sms and other service also.

     Login function uses createEmailSession function It will create an session more like will store the < in cookie
     of browser and will make the user able to usr the service.

     Suppose we want to know about the details of current user in Home page So we will use getCurrentUser function to
     get the details of the current user and will use as there.

     Logout uses deleteSessions it will delete all session i.e. it will make the user logout from all the broewser
     

*/


// var appwrite = new Appwrite();
