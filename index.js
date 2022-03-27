const roller = []
function saturdayFun(roller = "roller-skate"){
    return `This Saturday, I want to ${roller}!`
}
saturdayFun("bathe my dog")

const office = []
function mondayWork(office = "go to the office"){
    return `This Monday, I will ${office}.`
}
mondayWork("work from home")

function wrapAdjective(para = ["*"]){
    const innerFunction = function (msg = "a hard worker"){
        return `You are ${para}${msg}${para}!`
    }
    return innerFunction
}