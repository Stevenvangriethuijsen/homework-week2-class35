const groupAdultsByAgeRange = function(arrayOfObjects) {
  if (arrayOfObjects.length === 0) {
    return {};
  } else {
    const newArray = arrayOfObjects.filter(
      individualObject => individualObject.age >= 19
    );
    return {};
  }
};

module.exports = { groupAdultsByAgeRange };
