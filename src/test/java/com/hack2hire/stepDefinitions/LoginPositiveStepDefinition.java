/**
 * 
 */
package com.hack2hire.stepDefinitions;



import org.openqa.selenium.WebDriver;

import com.hack2hire.base.TestBase;
import com.hack2hire.pages.HomePage;
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
	HomePage homepage;
	String userName;
	String password;
	String homepageHeader;
	
	public LoginPositiveStepDefinition() throws FileNotFoundException, IOException, InterruptedException {
		driver = init();
		login = new LoginPage(driver);
		homepage = new HomePage(driver);
	}
	
	/************User Login scenario ********/
	@Given("^user is on the login page$")
	public void user_is_on_the_login_page() {
	   titleLoginPage = driver.getTitle();
	   logger.info("Login Page title is : "+titleLoginPage);
	   Assert.assertEquals(titleLoginPage, "HubSpot Login");
	   logger.info("Verfied Login page launch successfully");
	}

	@When("^user enters username$")
	public void user_enters_username() {
	   userName = prop.getProperty("username");
	   login.enterUserName(userName);
	   logger.info("Username is entered");
	}

	@When("^user enters password$")
	public void user_enters_password() {
		password = prop.getProperty("password");
	    login.enterPassword(password);
	    logger.info("Password is entered");
	}

	@When("^user clicks on Login button$")
	public void user_clicks_on_Login_button() throws InterruptedException {
	    login.clickOnLoginButton();
	    logger.info("Clicked on Login button");
	}

	@Then("^user should land on home page\\.$")
	public void user_should_land_on_home_page() {
	    homepageHeader = homepage.getHeading();
	    logger.info("Home Page heading is : "+homepageHeading);
	    Assert.assertEquals("Getting started with HubSpot", homepageHeading);
	    logger.info("verified homepage landing after logging in successfully");
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
