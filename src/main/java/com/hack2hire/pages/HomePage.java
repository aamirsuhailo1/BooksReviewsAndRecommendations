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
public class HomePage {
	
	WebDriver driver;
	
	@FindBy(xpath="//h1")
	public WebElement homepageHeading;
	
	public HomePage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	public String getHeading(){
		  return homepageHeading.getText();
	}

}
