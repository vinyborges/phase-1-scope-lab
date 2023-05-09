
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'Mike';


function upperCaseCustomerName(){

    return customerName = customerName.toUpperCase();

}

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;

}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'Carl';
}


