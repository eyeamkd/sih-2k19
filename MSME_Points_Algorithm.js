const moment  = require("moment");                                                 //Importing Moment.js for calculating number of days



//This algorithm runs when a new loan is made.

var initialPoints = (caste, rejected, cibil) => {                        		  //Taking the values for number of paid loans, total number of loans taken, 
    //CIBIL Score - 30%                                                              caste of the StartUp owner, number of rejected loans and CIBIL Score
    var cibilWt = ((((cibil-300)*100)/600)/100) * 30;                              //Calculating CIBIL Weight by taking the % and using that % to calculate weight
    //Repayment History - 40% - Default Value(When no previous cases, 40 is added)              
    var rpHistoryWt = 40;                                         				   //ratio of paid loans to total multiplied with the weight allotted
    var castes= {
        'OC' : 6,
        'SC' : 7.3,                                                                //Allotting score to individual castes
        'ST' : 8.6,
        'OBC' : 10
    }; 
    casteWt = castes[caste];                                                      //Taking it into casteWt
    var rejectedWt = ((0.75)**(rejected)) * 10;                                   //For each rejected loan, he gets 75% of previous points

    var placeHolder = 20;                                                         //Placeholder for future additions
    return (casteWt + rpHistoryWt + cibilWt + rejectedWt + placeHolder);          //Return the sum of all calculated values
};







//This algorithm is same as above but when there are no new values for placeholder (placeholder value divided equally among other weights)
var initialPointsNoNew = (caste,rejected, cibil) => {
    //CIBIL Score - 35%
    var cibilWt = ((cibil-300)/30) + 5;
    //Repayment History - 45% - Default Value(When no previous cases, 45 is added.)
    var rpHistoryWt = 45;
    var castes= {
        'OC' : 6,                                                                 //Same code without placeholder
        'SC' : 7.3,
        'ST' : 8.6,
        'OBC' : 10
    }; 
    casteWt = castes[caste] + 5;
    var rejectedWt = (((0.75)**(rejected)) * 10) + 5 ; 

    //var placeHolder = 20;
    return (casteWt + rpHistoryWt + cibilWt + rejectedWt);
};



//This algorithm is for updating the MSME Points when taking loan, NOT for the first time

var newLoanPoints = (prevMSME, paid, total, rejected, cibil) => {                  //Taking the values for number of previous MSME points, paid loans, total number of loans taken, 
    //Previous MSME points - 65%                                                     and number of rejected loans and CIBIL Score
    prevMSME *= 0.65;    

    //CIBIL Score - 15%
    var cibilWt = ((((cibil-300)*100)/600)/100) * 15;                              //Calculating CIBIL Weight by taking the % and using that % to calculate weight

    //Repayment History - 10% - Default Value(When no previous cases, )              
    var rpHistoryWt = (paid/total) * 10;

    //Rejected Loans - 10%
    var rejectedWt = ((0.75)**(rejected)) * 10;                                   //For each rejected loan, he gets 75% of previous points

    return (prevMSME + rpHistoryWt + cibilWt + rejectedWt);                       //Return the sum of all calculated values
};



//This algorithm is for updating the MSME Points whenever installments are paid and when any additional funds taken

var updatePoints = (prevMSME,                                                    //MSME score generated whenever current loan was accepted
                    paid_date,                                                        //Date current installment was paid (D/M/YYYY)   
                    taken_date,                                                       //Date loan was taken (D/M/YYYY)
                    final_date,                                                       //Final date for curent installment (D/M/YYYY)
                    initialAmt,                                                  //Initial loan amount
                    sickness,                                                    //If the debtor's company is going through sickness i.e., losses (Boolean Value)
                    additional) => {                                             //Additional funds taken, if any   

    var paidDt = moment(paid_date,'D/M/YYYY');                                        //Taking the dates and storing them in respective values
    var takenDt = moment(taken_date,'D/M/YYYY');
    var finalDt = moment(final_date,'D/M/YYYY');
    var diffDaysNumerator = paidDt.diff(takenDt, 'days');                        //Calculating Installment Paid date - Date Installment taken
    var diffDaysDenominator = Math.abs(takenDt.diff(finalDt, 'days'));           //Calculating Date Installment taken - Final date for the installment to be paid
    var dateWt = (diffDaysNumerator / diffDaysDenominator);                      //Calculating the ratio of the both values

    if(dateWt > 1){                                                              //If he is paying on a date which is exceeding final date
        dateWt *= (-20);                                                         //The value will be updated to a negative value of weight

    } else if(dateWt < 1){                                                       //If he is paying on a date which is before the final date
        dateWt *= 20;                                                            //The value will be updated to a positive value of weight
    }
    var additionalWt = 0;                                                        //Initially the additional funds weight is zero
    if(sickness){                                                                //If the company is going through sickness   
        additionalWt = (additional / initialAmt) * (-10);                        //Calculate the ratio of additional funds taken to the initial amount and multiply with the negative weight
    }

    return (Math.round((prevMSME + additionalWt + dateWt) * 1000) / 1000);       //Add all the calculated weights & add it the previous MSME points and round the value to 2 decimal places
}

console.log(initialPointsNoNew('OBC',0,900));
console.log(updatePoints(90,'20/3/2019','1/1/2019','1/4/2019',200000, 0, 0));
console.log(updatePoints(90,'20/3/2019','1/1/2019','1/4/2019',200000, 1, 100000));
console.log(updatePoints(90,'1/4/2019','1/1/2019','20/3/2019',200000, 1, 100000));