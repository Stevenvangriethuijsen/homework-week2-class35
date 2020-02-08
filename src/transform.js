const groupAdultsByAgeRange = function(arrayOfObjects) {
  if (arrayOfObjects.length === 0) {
    return {};
  } else {
    const filteredObject = {};

    const twentyAndYounger = arrayOfObjects.filter(
      individualObject =>
        individualObject.age >= 18 && individualObject.age <= 20
    );
    const twentyOneThirty = arrayOfObjects.filter(
      individualObject =>
        individualObject.age >= 21 && individualObject.age <= 30
    );
    const thirtyOneForty = arrayOfObjects.filter(
      individualObject =>
        individualObject.age >= 31 && individualObject.age <= 40
    );
    const fortyOneFifty = arrayOfObjects.filter(
      individualObject =>
        individualObject.age >= 41 && individualObject.age <= 50
    );
    const fiftyAndOlder = arrayOfObjects.filter(
      individualObject => individualObject.age >= 51
    );

    filteredObject["20 and younger"] = twentyAndYounger;
    filteredObject["21-30"] = twentyOneThirty;
    filteredObject["31-40"] = thirtyOneForty;
    filteredObject["41-50"] = fortyOneFifty;
    filteredObject["51 and older"] = fiftyAndOlder;

    if (filteredObject["20 and younger"].length === 0) {
      delete filteredObject["20 and younger"];
    }
    if (filteredObject["21-30"].length === 0) {
      delete filteredObject["21-30"];
    }
    if (filteredObject["31-40"].length === 0) {
      delete filteredObject["31-40"];
    }
    if (filteredObject["41-50"].length === 0) {
      delete filteredObject["41-50"];
    }
    if (filteredObject["51 and older"].length === 0) {
      delete filteredObject["51 and older"];
    }
    console.log(filteredObject);
    return filteredObject;
  }
};

module.exports = { groupAdultsByAgeRange };
