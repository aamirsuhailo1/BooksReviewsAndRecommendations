/**
 * 
 */
package com.hack2hire.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * @author Suhail
 *
 */
public class TestBase {
	
	WebDriver driver;
	Properties prop;
	
	public void init() {
		System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get("https://classic.crmpro.com/index.html?e=2");
	}
	
	public void initPropertyFiles() throws FileNotFoundException, IOException {
		prop = new Properties();
		prop.load(new FileInputStream("./src/main/java/com/hack2hire/config/setup.properties"));
		
	}

}
