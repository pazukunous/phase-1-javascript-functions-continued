// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`;
}

function wrapAdjective(msg){
    return function (wrap = "special") {
        return `You are ${msg}${wrap}${msg}!`;
    }
}