package com.hack2hire.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		  features = "./src/main/java/com/hack2hire/features", //Path to feature files
		  glue = {"com.hack2hire.stepDefinitions"}, //Path to Step definitions
		  format = {"pretty","html:TestResults/h2h.html","json:json-ouptut/cucumberresult.json","junit:junit-output/cucumberresult.xml"}, //Different reports generation
		  dryRun = false, //check feature file to step definition mapping
		  monochrome = true,
		  strict = true
		)
public class TestRunner {

	
}
