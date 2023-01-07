
module.exports = getDate();

function getDate(){
let today = new Date();
var options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
};

return today.toLocaleDateString("en-us", options);

}

function getDay(){
    let today = new Date();
    var options = {
        weekday: "long"
    };
    
   return today.toLocaleDateString("en-us", options);
 
    }

