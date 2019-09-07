package com.hack2hire.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		  features = "./src/main/java/com/hack2hire/features",
		  glue = {"com.hack2hire.stepDefinitions"},
		  format = {"pretty","html:TestResults/h2h.html","json:json-ouptut/cucumberresult.json","junit:junit-output/cucumberresult.xml"},
		  dryRun = false,
		  monochrome = true,
		  strict = true
		)
public class TestRunner {

	
}
