const isLeapYear = require('check-leap-year');
const date = require('date-and-time')
 
// Creating object of current date and time 
// by using Date() method
const now  =  new Date();
  
now.setFullYear(1904)
  
// Checking the year leap or not
// by using date.isLeapYear() api
const value = date.isLeapYear(now.getFullYear());
  
// Display the result
if(value)
    console.log("1904, 1908, 1912, 1916, 1920, 1924, 1928, 1932, 1936, 1940, 1944, 1948, 1952, 1956, 1960, 1964, 1968, 1972, 1976, 1980, 1984, 1988, 1992, 1996, 2000, 2004, 2008, 2012, 2016, 2020")
else
    console.log("This is not a leap year")
