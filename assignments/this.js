/* The for principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
*   My explanation of this and how it functions is simply that this is a stand in for the name of the object that it's housed within. If it is declared
*   in the window object, it will refer to the window object.  If it is declared inside of another object, then the other object will be what it refers to
*   unless changed through the use of a method or keyword.
*
* 1. Standard (Window) binding: this refers to the parent object at the place this is declared unless otherwise specified using "use strict";
*       this is often in the window object, because functions are declared in the global scope rather than a method.
*
* 2. Implicit Binding: window binding and Implicit binding are the same thing.  If this is declared within an object, it's parent object will be what it refers to
*       The only difference is what object this is inside of when it's declared.
*
* 3. Explicit Binding: to explicitly tell the function what the keyword this should point to instead of the object it is housed within.  Three methods can be
*       used to do this: .call() .apply() .Bind().
*
* 4. New Binding: New is a keyword that functions like .call(). By changing the this keyword reference to the name of the object
*       being constructed by the function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function() {
    console.log(this); // this will print all of the contents of the window object
}

// Principle 2

// code example for Implicit Binding
let Ninja = {
    name: "Mr.Snuggles",
    stealth: "silent",
    weapon: "Murder Mittens",
    attack: function(){
        alert(`${this.name} attacks with a ${this.weapon}!!!`);
    }
}

Ninja.attack();


// Principle 3

// code example for New Binding

function NinjaCat(name, stealth, weapon) {
    this.name = name;
    this.stealth = stealth;
    this.weapon = weapon;
}

const whiteCat = new NinjaCat("Luna", "Knocks Things Off Shelves", "Yowling");

// Principle 4

// code example for Explicit Binding

const blackCat = {
    name: "Toothless"
}

function ninjaCatAttack(weapon){
    console.log(`Without warning ${this.name} attacks by ${weapon}`);
}

let weapon = "Tripping you at night";

ninjaCatAttack.call(blackCat, weapon);
