/**
 * 
 */
package com.hack2hire.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

/**
 * @author Suhail
 *
 */
public class TestBase {
	
	static {
		SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy-hh-mm-ss");
		System.setProperty("current.date.time", sdf.format(new Date()));
	}
	
	public WebDriver driver;
	public Properties prop;
	public Logger logger;
	
	public WebDriver init() throws FileNotFoundException, IOException, InterruptedException {
		initializeLogger();
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
	
	public void initializeLogger() {
		logger = Logger.getLogger(this.getClass()); 
	}

}
