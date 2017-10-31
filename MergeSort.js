function merge(list1, list2) {
  var results = [];

  while(list1.length && list2.length) {
    if (list1[0] <= list2[0]) {
      results.push(list1.shift());
    } else {
      results.push(list2.shift());
    }
  }
  return results.concat(list1, list2);
}
