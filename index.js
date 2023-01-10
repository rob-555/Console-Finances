var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

 
// 1) Console log total number of months = OK
// 2) Sum net P/L over period =  OK
// 3) Averages of (monthly) CHANGES in P/L for period
//      - array of monthly CHANGES
//      - sum array to a Total
//      - divide Total by months-1 = OK
// 4) Greatest increase: month, amount = OK
// 5) Greatest decrease: month, amount = OK
// 6) Print analysis to the console  = OK
// Hints: concat string+var; print to 100th in JS

var totMonths = finances.length

var currentP = 0; // initialize current month's profit
var nextP = 0; // initialize next month's profit

var chgProfit = 0; // initialize difference (tbc)
var accumProfit = 0;  // initialize accumulated difference (tbc)

var greatestInc = 0
var greatestDec = 0
var greatIncDate
var greatDecDate
// declare variables to be used in a loop
// want to calculate and accumulate the difference on each loop

var sum = finances[0][1];
for (var i = 1; i < finances.length; i++) {
  sum += finances[i][1];

  prevProfit = finances[i-1][1]; // second item from i-1 month
  nowProfit = finances [i][1]; // second item from next month i
  chgProfit = nowProfit - prevProfit; // calc change in profit 
  accumProfit += chgProfit; // calc accumulated change in profit
  // code to calculate the total accumulated change in profits (for avg)


  if (chgProfit >= 0 && chgProfit > greatestInc)
  {greatestInc = chgProfit; 
      greatIncDate = finances[i][0];
  }
  // accumulator tests for whether positive chgProfit in new month is greater than previous, and if so, updates the greatestInc variable
  // greatIncDate is set at that month (first item at that index on the loop)
  // (4) greatest changes - increase
  
  else if (chgProfit < 0 && chgProfit < greatestDec)
  {greatestDec = chgProfit;
    greatDecDate = finances[i][0];
  }
  // similar accumulator/set for decreases
  // (5) greatest changes - decreases

}
// for loop used to sum all the second elements in the finances array
// += notation adds value to variable and assigns result to that variable
 
 var avgChgProfit = accumProfit/(finances.length-1)
 // calculate average of monthly changes in profit
 // divide total accumulated profit by months-1

console.log("Financial Analysis\n"+
"----------------------------\n"+
"Total Months: " + totMonths + "\n"+
"Total: $" + sum + "\n" +
"Average  Change: $" + avgChgProfit + "\n" +
"Greatest Increase in Profits: " + greatIncDate + " ($" + greatestInc + ")\n" +
"Greatest Decrease in Profits: " + greatDecDate + " ($" + greatestDec + ")");
 
// final console log modified from class provided code




// ----------------------------------------------------

// RW Learning NOTES - checking results in console

//  console.log ("total months .... : ", totMonths)
//  (1) console's number of months
 
//  console.log("total: ",sum); 
//  (2) output is 38382578 
 
//  console.log("accumProfit = ", accumProfit)
//  output is -196875
 
//  console.log("average = ", avgChgProfit)
//  (3) ouput is -2315.11
 
//  console.log("greatest monthly increase: ", greatestInc)
//  console.log("date of", greatIncDate)
//  (4)
 
//  console.log("greatest monthly decrease: ", greatestDec)
//  console.log("date of", greatDecDate)
//  (5)
