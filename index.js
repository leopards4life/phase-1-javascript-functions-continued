function saturdayFun(activity) {
    if (typeof activity == "string") {
        return "This Saturday, I want to " + activity + "!"
    } else {
        return "This Saturday, I want to roller-skate!"
    }
}

let mondayWork = function (activity) {
    if (typeof activity !== "undefined") {
        return "This Monday, I will " + activity + "."
    } else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(flair) {
    return function(important) {
        if (typeof important !== "undefined") {
            return `You are ${flair}${important}${flair}!`
    } else {
        return "You are special!"
    }
    }}
