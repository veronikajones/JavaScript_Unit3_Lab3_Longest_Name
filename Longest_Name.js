let name1 = "Brendan Nguyen";
let length1 = name1.length;
let name2 = "Ada Lovelace";
let length2 = name2.length;
let name3 = "Charles Garcia";
let length3 = name3.length;

if (length1>length2 & length1>length3) {console.log(name1 + " has the longest name")
}

else if (length2>length1 & length2>length3) {console.log(name2  + " has the longest name")
}

else if (length3>length2 & length3>length1) {console.log(name3 + " has the longest name")}

else if (length3===length2 & length3===length1 & length2===length1) {console.log("All three names, " + name1 + ", " + name2 + ", " + "and " + name3+ ", are the same length.")}

else if (length3===length2) {console.log (name3 + " and " +name2 + " tie for the longest name")}

else if (length2===length1) {console.log (name2 + " and " +name1 + " tie for the longest name")}

else if (length3===length1) {console.log (name3 + " and " +name1 + " tie for the longest name")}

