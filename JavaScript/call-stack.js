// Call stack is a data structure used by javascript to manage function
// execution. When a function is called, it is pushed onto the stack, and
// when it finishes execution it is popped out from stack. It follows the
// Last In First Out (LIFO) principle.


// ___                   ___
//    |                 |
//    |                 |                   function fun2() {
//    |                 |
//    |                 |                        console.log("fun2() is called...");
//    |                 |
//    |                 |                   }
//    |                 |
//    |                 |                   function fun1() {
//    |                 |
//    |                 |                         console.log("fun1() is called...");
//    +_________________+
//    |     fun2();     |                   }
//    +_________________+
//    |     fun1();     |                   fun1();
//    +_________________+                   fun2();
//
//         CALL STACK        

