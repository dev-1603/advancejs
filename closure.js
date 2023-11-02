function outer() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    inner()
}

// 1st call 
outer()  // output: 1

// 2st call but the  output will be same
outer() // output: 1

//  varient 2


function outer2() {
    let counter = 0
    function inner() {
        counter++
        console.log(counter)
    }
    return inner
}


const fn = outer2()
// calling 1st time
fn() // output :1

// calling 2st time
fn() // output: 2

/**
 * in this function insatead of calling inner function  we are returning the function declaration.
 * here the output changed because when we saved the funtion in fn variable the value of counter was saved in memory.
 * when we call the funtion 1st time the value of counter was updated to 1 & when we call it 2nd time counter value again gets updated by 1.
 */

