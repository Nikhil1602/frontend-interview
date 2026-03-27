// Global Scope variables are accessible everywhere,

// Local Scope vairables are accessible only inside a function,

// Block Scope variables declared with "let" or "const" are
// accessible only inside the block where they are defined. 

let a = "Global Scope";

function fun() {

    let a = "Local Scope";

    if (true) {

        let a = "Block Scope";
        console.log(a);

    }

    console.log(a);

}

fun();
console.log(a);