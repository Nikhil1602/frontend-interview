// "var" is function-scoped and allows redeclaration, which can cause bugs.
// "let" and "const" are block-scoped and safer.
// "let" allows reassignment, while "const" does not.
// Also, "let" and "const" are hoisted but stay in the temporal dead zone, unlike "var".

// E.g. for var
//
// function test() {
//   if (true) {
//     var a = 10;
//     var a = 20; // ✅ Re-declaration allowed for var
//   }
//   console.log(a); // 20 ✅
// }


// E.g. for let, const
//
// function test() {
//   if (true) {
//     let x; // ✅ assigned "undefined"
//     const y; // ❌ Not initialized
//     let b = 20;
//     let b = 10; // ❌ Re-declaration not allowed for let and const
//     const c = 30; // ✅
//   }
//   console.log(b); // ❌ Error
//   console.log(c); // ❌ Error
// }