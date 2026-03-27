// Scope chain is the mechanism Javascript uses to resolve variables.
// When a variable is accessed, Javascript first looks in the
// current scope, if it's not found, it moves to the parent scope
// and continue until reaches to global scope. If it's still not
// found it will throw a reference error.

let employee = "Nikhil";    // Global Scope

function organization(has_offer_letter) {

    let org_name = "RazorPay";      // Local or Function Scope

    if (has_offer_letter) {

        let role = "Software Developer";    // Block Scope

        console.log(employee + " works at " + org_name + " as a " + role);

    }

}

organization(true);

// Lexical Environment is a structure in javascript that stores
// variables and functions along with a reference to its outer
// environment. It helps javascript resolve variables using the
// scope chain.

//                    Outer environment
//                            ^
//                            |
//                            |
// +--------------------------|----+
// |  variables, functions, <ref>  |   <- Structure
// +-------------------------------+
//
//  |_________________________________________________|
//                            |
//                            |
//                            V
//                  Lexical Environment
//