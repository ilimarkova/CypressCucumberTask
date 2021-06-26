Feature: Login with already existing user

Scenario: Logged user can search for book
  Given user is logged in successfully 
  When search for book title "ECMAScript 6"
  Then book title "ECMAScript 6" is found successfully
