function insSort(unsrtdList) {  
    var len = unsrtdList.length;
    for (var i = 1; i < len; i++) {
        var tmp = unsrtdList[i];
        for (var j = i - 1; j >= 0 && (unsrtdList[j] > tmp); j--) {
            unsrtdList[j + 1] = unsrtdList[j];
        }
        unsrtdList[j + 1] = tmp;
    }
}

var list = [5, 3, 1, 2, 4];  
insSort(list);  
console.log(list);
