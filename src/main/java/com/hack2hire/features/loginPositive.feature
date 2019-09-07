Feature: BookreviewAndRecommendation login. 

#positive scenarios#
Scenario: User logins using correct credentials
	Given user is on the login page
	When user enters username
	And user enters password
	And user clicks on Login button
	Then user should land on home page.
	
	
#Scenario: Author logins using correct credentials
#	Given author is on the login page
#	When author enters username
#	And author enters password
#	And author clicks on Login button
#	Then author should land on Author's home page .
	
	

	
	


	
	
	
