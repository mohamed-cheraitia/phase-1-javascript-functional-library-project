function myEach(collection, callback){


    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
            callback(collection[key]);
    }
}

return collection;
}


function myMap(collection, callback){
const arr = []

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            arr.push(callback(collection[i]));
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
            arr.push(callback(collection[key]))
    }
}

return arr;
}


function myFind(collection, predicate){


    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
        }
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
        if (predicate(collection[key])){
            return collection[key]
        }
    }
}

return undefined;
}



function myFilter(collection, predicate){
const arr = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                arr.push(collection[i]);
        }
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
        if (predicate(collection[key])){
            arr.push(collection[key])
        }
    }
}

return arr;
}




function mySize(collection){


    if (Array.isArray(collection)) {
    return collection.length    
        
    }else if (typeof collection === 'object') {
        
return Object.keys(collection).length
}
    
}   

function myFirst(array, n) {
    if (n === undefined) {
    return array[0];
    } else {
    return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
    return array[array.length - 1]
    } else {
    return array.slice(array.length - n);
    }
}


function myKeys(object){


    return Object.keys(object)
    

    
}   

function myValues(object){


    return Object.values(object)
    

    
}   
function myReduce(collection, callback, acc) {
    let index = 0;

    if (acc === undefined) {
    acc = collection[Object.keys(collection)[0]];
    index = 1;
    }

    if (Array.isArray(collection)) {
    for (let i = index; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
    }
    } else if (typeof collection === 'object') {
    const keys = Object.keys(collection);
    for (let i = index; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
    }
    }

    return acc;
}

//Bonus

function mySortBy(array, callback) {
return array.slice().sort((a, b) => {
  const aValue = callback(a);
  const bValue = callback(b);
  if (aValue < bValue) return -1;
  if (aValue > bValue) return 1;
  return 0;
});
}
console.log('expected => [5, 4, 6, 3, 1, 2];')
console.log(mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) }));

console.log("expected => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];")

const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

console.log(mySortBy(stooges, function(stooge){ return stooge.name }));