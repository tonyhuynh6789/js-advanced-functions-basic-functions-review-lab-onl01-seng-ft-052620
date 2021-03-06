// Your code here



function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(arg = "*") {
    return function (string = "special") {
        return `You are ${arg + string + arg}!`
    }
}


const Calculator = {
    add: function(){
        return 1 + 3
    }, 
    subtract: function(){
        return 1 - 3
    }, 
    multiply: function(){
        return 1 * 3
    },
    divide: function(){
        return 10/5
    }
}


function actionApplyer(start, arr) {
    for (let i = 0; i < arr.length; i++){
       start =  arr[i](start)
    }
    return start
}