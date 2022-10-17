let name1 = "Brendan Nuyi";
let length1 = name1.length;
let name2 = "Ada Lovelace";
let length2 = name2.length;
let name3 = "Charles Myib";
let length3 = name3.length;

if (length1>length2 & length1>length3) {console.log(name1 + " is the longest name")
}

else if (length2>length1 & length2>length3) {console.log(name2  + " is the longest name")
}

else if (length3>length2 & length3>length1) {console.log(name3 + " is the longest name")}

else {console.log("All three names, " + name1 + ", " + name2 + ", " + "and " + name3+ ", are the same length.")}