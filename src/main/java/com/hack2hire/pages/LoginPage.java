/**
 * 
 */
package com.hack2hire.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * @author Suhail
 *
 */
public class LoginPage {
	
	WebDriver driver;
	
	@FindBy(id="username")
	public WebElement txtUsername;
	
	@FindBy(id="password")
	public WebElement txtPassword;
	
	@FindBy(id="loginBtn")
	public WebElement btnLogin;
	
	public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	/**
	 * 
	 * This method enters username
	 * @param userName
	 */
	public void enterUserName(String userName) {
		txtUsername.clear();
		txtUsername.sendKeys(userName);
	}
	
	/**
	 * 
	 * This method enters password
	 * @param password
	 */
	public void enterPassword(String password) {
		txtPassword.clear();
		txtPassword.sendKeys(password);
	}
	
	/**
	 * This method clicks on Login button
	 */
	public void clickOnLoginButton() {
		btnLogin.click();
		
	}
	
	

}
