#Negative scenarios#
Feature: BookreviewAndRecommendation login. 

Scenario Outline: Negative scenario for User unsuccessful login
	Given user is on login page
	When user enters "<username>" and "<password>" and user clicks on login button 	
	Then verify error message is displayed
	Examples:
	| username | password |
	| uname1   | pwd1     |
	| uname2   | pwd2     |
	
	
