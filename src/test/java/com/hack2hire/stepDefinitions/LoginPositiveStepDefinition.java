/**
 * 
 */
package com.hack2hire.stepDefinitions;

import com.hack2hire.base.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/**
 * @author Suhail
 *
 */
public class LoginPositiveStepDefinition extends TestBase {
	
	/************User Login scenario ********/
	@Given("^user is on the login page$")
	public void user_is_on_the_login_page() {
	   
	}

	@When("^user enters username as \"([^\"]*)\"$")
	public void user_enters_username_as(String arg1) {
	   
	}

	@When("^user enters password as \"([^\"]*)\"$")
	public void user_enters_password_as(String arg1) {
	    
	}

	@When("^user clicks on Login button$")
	public void user_clicks_on_Login_button() {
	    
	}

	@Then("^user should land on home page\\.$")
	public void user_should_land_on_home_page() {
	    
	}
      /*************Author Login scenario*****************/
	@Given("^author is on the login page$")
	public void author_is_on_the_login_page() {
	    
	}

	@When("^author enters username as \"([^\"]*)\"$")
	public void author_enters_username_as(String arg1) {
	    
	}

	@When("^author enters password as \"([^\"]*)\"$")
	public void author_enters_password_as(String arg1) {
	    
	}

	@When("^author clicks on Login button$")
	public void author_clicks_on_Login_button() {
	    
	}

	@Then("^author should land on Author's home page \\.$")
	public void author_should_land_on_Author_s_home_page() {
	    
	}
	/*****************************************************/



}
