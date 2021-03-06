[![Run Tests](https://github.com/LaszloFeher-XP/XP-Farm_Double_Every_Other/actions/workflows/test.yml/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Double_Every_Other/actions/workflows/test.yml/badge.svg) 
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=bugs)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=LaszloFeher-XP_XP-Farm_Double_Every_Other&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=LaszloFeher-XP_XP-Farm_Double_Every_Other) 
[![Open Issues](https://img.shields.io/github/issues/LaszloFeher-XP/XP-Farm_Double_Every_Other/badge.svg)](https://github.com/LaszloFeher-XP/XP-Farm_Double_Every_Other/issues) 

[![Build Status](coverage/badge-branches.svg)](coverage/badge-branches.svg) 
[![Build Status](coverage/badge-functions.svg)](coverage/badge-functions.svg) 
[![Build Status](coverage/badge-lines.svg)](coverage/badge-lines.svg) 
[![Build Status](coverage/badge-statements.svg)](coverage/badge-statements.svg) 
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) 

[Metrics report](metrics.md) 
[Complexity report](complexity-report.md) 

# Double Every Other

https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript

## Instructions 

Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :
```sh
[1,2,3,4]
```
the function should return :
```sh
[1,4,3,8]
```

## User Stories 

### 1. First story 
As a user
I want to double every second integer in a list
So that create the logic

#### Scenarios 

#### 1. 
Given [1,2,3,4]
When logic
Then returns [1,4,3,8]

#### 2. 
Given [2,4,6,8]
When logic
Then returns [2,8,6,16]

# Setting up the environment 

## To install dependencies 

To install dependencies, run the following: 

```npm install``` 

## To run the tests 

To run the tests, there is a script in the project root called test. It calculates code coverage, incorporates watch mode, and prints in verbose mode, so all test file's test report will be visible. Alternatively, you can achieve the same with the command the script contains: 

```npm test -- --watchAll --collect-coverage --verbose```  

