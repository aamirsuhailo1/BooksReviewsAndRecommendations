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
	
	public WebDriver driver;
	public Properties prop;
	
	public WebDriver init() throws FileNotFoundException, IOException, InterruptedException {
		 initPropertyFiles();
		 System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver.exe");
		 driver = new ChromeDriver();
		 driver.manage().window().maximize();
		 driver.get(prop.getProperty("url"));
		 Thread.sleep(5000);
		 return driver;
	}
	
	public void initPropertyFiles() throws FileNotFoundException, IOException {
		prop = new Properties();
		prop.load(new FileInputStream("./src/main/java/com/hack2hire/config/setup.properties"));
		
	}

}
