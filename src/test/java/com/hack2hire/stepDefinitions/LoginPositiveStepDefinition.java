/**
 * 
 */
package com.hack2hire.stepDefinitions;



import org.openqa.selenium.WebDriver;

import com.hack2hire.base.TestBase;
import com.hack2hire.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.junit.Assert;

/**
 * @author Suhail
 *
 */

public class LoginPositiveStepDefinition extends TestBase {
	
	WebDriver driver;
	String titleLoginPage;
	LoginPage login;
	String userName;
	String password;
	
	public LoginPositiveStepDefinition() throws FileNotFoundException, IOException, InterruptedException {
		driver = init();
		login = new LoginPage(driver);
	}
	
	/************User Login scenario ********/
	@Given("^user is on the login page$")
	public void user_is_on_the_login_page() {
	   titleLoginPage = driver.getTitle();
	  // System.out.println(titleLoginPage);
	   Assert.assertEquals(titleLoginPage, "HubSpot Login");
	}

	@When("^user enters username$")
	public void user_enters_username() {
	   userName = prop.getProperty("username");
	   login.enterUserName(userName);
	}

	@When("^user enters password$")
	public void user_enters_password() {
		password = prop.getProperty("password");
	    login.enterPassword(password);
	}

	@When("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
	    login.clickOnLoginButton();
	    driver.close();
	}

	@Then("^user should land on home page\\.$")
	public void user_should_land_on_home_page() {
	    
	}
   /*   *//*************Author Login scenario*****************//*
	@Given("^author is on the login page$")
	public void author_is_on_the_login_page() {
	    
	}

	@When("^author enters username $")
	public void author_enters_username_as(String arg1) {
	    
	}

	@When("^author enters password $")
	public void author_enters_password_as(String arg1) {
	    
	}

	@When("^author clicks on Login button$")
	public void author_clicks_on_Login_button() {
	    
	}

	@Then("^author should land on Author's home page \\.$")
	public void author_should_land_on_Author_s_home_page() {
	    
	}
	*//*****************************************************//*
*/


}
