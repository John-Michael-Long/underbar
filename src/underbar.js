(function() {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument
  _.identity = function(val) {
    return val;
  };

  // Return an array of the first n elements of an array. 
  // If n is undefined, return just the first element.
  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  // Like first, but for the last elements. 
  // If n is undefined, return just the last element.
  _.last = function(array, n) {

    if (n === 0) {
      return [];
    }
    if (n > array.length - 1) {
      return array;
    }
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(n - 1);
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {

    if (Array.isArray(collection)) {

      for (let i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {

      let keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, 
  // or -1 if value is not present in the array.
  _.indexOf = function(array, target){
  
    let result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

    let result = [];

    _.each(collection, function(value) {      
      test(value) && result.push(value);
    });

    return result;
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {

    return _.filter(collection, function(value) {
      return !test(value);
    });

  };

  // Produce a duplicate-free version of the array.

  _.uniq = function(array, iterator) {

    var hash = {};

    iterator = iterator || _.identity;

    _.each(array, function(val) {

      let transformed = iterator(val);
      if (hash[transformed] === undefined) {
        hash[transformed] = val;
      }
    });

    return _.map(hash, function(value) {
      return value;
    });

  };


  // Return the results of applying an iterator to each element.
  // map() is a useful primitive iteration function that works a lot
  // like each(), but in addition to running the operation on all
  // the members, it also maintains an array of results.
  _.map = function(collection, iterator) {

    let result = [];

    _.each(collection, function(value) {
      result.push(iterator(value));
    });

    return result;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. 
  _.pluck = function(collection, key) {
 
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. 

  _.reduce = function(collection, iterator, accumulator) {

    let acc = accumulator === undefined ? collection[0] : accumulator;

    _.each(collection, function(value) {

      if (accumulator === undefined) {
        accumulator = true;
      } else {        
        acc = iterator(acc, value);        
      }

    });

    return acc;
  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {

    iterator = iterator || _.identity;

    return !!_.reduce(collection, function(acc, value) {
      return acc && iterator(value);
    }, true);
    
  };

  // Determine whether any of the elements pass a truth test. 
  // If no iterator is provided, provide a default one
  _.some = function(collection, iterator) {
    
    iterator = iterator || _.identity;

    return !_.every(collection, function(item) {
      return !iterator(item);
    });
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {
    
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
  _.defaults = function(obj) {
  };


  /**
   * FUNCTIONS
   * =========
   *
   * Now we're getting into function decorators, which take in any function
   * and return out a new version of the function that works somewhat differently
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
    // TIP: These variables are stored in a "closure scope" (worth researching),
    // so that they'll remain available to the newly-generated function every
    // time it's called.
    var alreadyCalled = false;
    var result;

    // TIP: We'll return a new function that delegates to the old one, but only
    // if it hasn't been called before.
    return function() {
      if (!alreadyCalled) {
        // TIP: .apply(this, arguments) is the standard way to pass on all of the
        // infromation from one function call to another.
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      // The new function always returns the originally computed result.
      return result;
    };
  };

  // Memorize an expensive function's results by storing them. You may assume
  // that the function only takes primitives as arguments.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };


  /**
   * ADVANCED COLLECTION OPERATIONS
   * ==============================
   */

  // Randomizes the order of an array's contents.
  //
  // TIP: This function's test suite will ask that you not modify the original
  // input array. For a tip on how to make a copy of an array, see:
  // http://mdn.io/Array.prototype.slice
  _.shuffle = function(array) {
  };


  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());


//REFERENCE

// (function() {
//   'use strict';

//   window._ = {};

//   // Returns whatever value is passed as the argument. This function doesn't
//   // seem very useful, but remember it--if a function needs to provide an
//   // iterator when the user does not pass one in, this will be handy.
//   _.identity = function(val) {

//     return val;
//       };

//   /**
//    * COLLECTIONS
//    * ===========
//    *
//    * In this section, we'll have a look at functions that operate on collections
//    * of values; in JavaScript, a 'collection' is something that can contain a
//    * number of values--either an array or an object.
//    *
//    *
//    * IMPORTANT NOTE!
//    * ===========
//    *
//    * The .first function is implemented for you, to help guide you toward success
//    * in your work on the following functions. Whenever you see a portion of the
//    * assignment pre-completed, be sure to read and understand it fully before
//    * you proceed. Skipping this step will lead to considerably more difficulty
//    * implementing the sections you are responsible for.
//    */

//   // Return an array of the first n elements of an array. If n is undefined,
//   // return just the first element.
//   _.first = function(array, n) {
//     return n === undefined ? array[0] : array.slice(0, n);
//   };

//   // Like first, but for the last elements. If n is undefined, return just the
//   // last element.
//   _.last = function(array, n) {

//     // When the input n not is provided, we return a single value from the array,
//     // rather than an array of values
//     if (n === undefined) {
//       return array[array.length - 1];
//     }
//     return array.slice(Math.max(0, array.length - n));
//       };

//   // Call iterator(value, key, collection) for each element of collection.
//   // Accepts both arrays and objects.
//   //
//   // Note: _.each does not have a return value, but rather simply runs the
//   // iterator function over each item in the input collection.
//   _.each = function(collection, iterator) {

//     if (Array.isArray(collection)) {
//       for (var i = 0; i < collection.length; i++) {
//         iterator(collection[i], i, collection);
//       }
//     } else {
//       for (var prop in collection) {
//         iterator(collection[prop], prop, collection);
//       }
//     }
//       };

//   // Returns the index at which value can be found in the array, or -1 if value
//   // is not present in the array.
//   _.indexOf = function(array, target){
//     // TIP: Here's an example of a function that needs to iterate, which we've
//     // implemented for you. Instead of using a standard `for` loop, though,
//     // it uses the iteration helper `each`, which you will need to write.
//     var result = -1;

//     _.each(array, function(item, index) {
//       if (item === target && result === -1) {
//         result = index;
//       }
//     });

//     return result;
//   };

//   // Return all elements of an array that pass a truth test.
//   _.filter = function(collection, test) {

//     var result = [];

//     _.each(collection, function(val) {
//       test(val) && result.push(val);
//     });

//     return result;
//       };

//   // Return all elements of an array that don't pass a truth test.
//   _.reject = function(collection, test) {
//     // TIP: see if you can re-use _.filter() here, without simply
//     // copying code in and modifying it

//     return _.filter(collection, function(val) {
//       return !test(val);
//     });
//       };

//   // Produce a duplicate-free version of the array.
//   _.uniq = function(array, isSorted, iterator) {

//     var hash = {};

//     iterator = (isSorted && iterator) || _.identity;

//     _.each(array, function(val) {
//       var transformed = iterator(val);
//       if (hash[transformed] === undefined) {
//         hash[transformed] = val;
//       }
//     });

//     return _.map(hash, function(value) {
//       return value;
//     });
//       };


//   // Return the results of applying an iterator to each element.
//   _.map = function(collection, iterator) {
//     // map() is a useful primitive iteration function that works a lot
//     // like each(), but in addition to running the operation on all
//     // the members, it also maintains an array of results.

//     var results = [];

//     _.each(collection, function(item, index, collection) {
//       results.push(iterator(item, index, collection));
//     });

//     return results;
//       };

//   /*
//    * TIP: map is really handy when you want to transform an array of
//    * values into a new array of values. _.pluck() is solved for you
//    * as an example of this.
//    */

//   // Takes an array of objects and returns and array of the values of
//   // a certain property in it. E.g. take an array of people and return
//   // an array of just their ages
//   _.pluck = function(collection, key) {
//     // TIP: map is really handy when you want to transform an array of
//     // values into a new array of values. _.pluck() is solved for you
//     // as an example of this.
//     return _.map(collection, function(item){
//       return item[key];
//     });
//   };

//   // Reduces an array or object to a single value by repetitively calling
//   // iterator(accumulator, item) for each item. accumulator should be
//   // the return value of the previous iterator call.
//   //  
//   // You can pass in a starting value for the accumulator as the third argument
//   // to reduce. If no starting value is passed, the first element is used as
//   // the accumulator, and is never passed to the iterator. In other words, in
//   // the case where a starting value is not passed, the iterator is not invoked
//   // until the second element, with the first element as its second argument.
//   //  
//   // Example:
//   //   var numbers = [1,2,3];
//   //   var sum = _.reduce(numbers, function(total, number){
//   //     return total + number;
//   //   }, 0); // should be 6
//   //  
//   //   var identity = _.reduce([5], function(total, number){
//   //     return total + number * number;
//   //   }); // should be 5, regardless of the iterator function passed in
//   //          No accumulator is given so the first element is used.
//   _.reduce = function(collection, iterator, accumulator) {

//     var initializing = arguments.length === 2;

//     _.each(collection, function(val) {
//       if (initializing) {
//         initializing = false;
//         accumulator = val;
//       } else {
//         accumulator = iterator(accumulator, val);
//       }
//     });

//     return accumulator;
//       };

//   // Determine if the array or object contains a given value (using `===`).
//   _.contains = function(collection, target) {
//     // TIP: Many iteration problems can be most easily expressed in
//     // terms of reduce(). Here's a freebie to demonstrate!
//     return _.reduce(collection, function(wasFound, item) {
//       if (wasFound) {
//         return true;
//       }
//       return item === target;
//     }, false);
//   };


//   // Determine whether all of the elements match a truth test.
//   _.every = function(collection, iterator) {
//     // TIP: Try re-using reduce() here.

//     iterator = iterator || _.identity;

//     return !!_.reduce(collection, function(allPassed, val) {
//       return allPassed && iterator(val);
//     }, true);
//       };

//   // Determine whether any of the elements pass a truth test. If no iterator is
//   // provided, provide a default one
//   _.some = function(collection, iterator) {
//     // TIP: There's a very clever way to re-use every() here.

//     iterator = iterator || _.identity;

//     return !_.every(collection, function(item) {
//       return !iterator(item);
//     });
//       };


//   /**
//    * OBJECTS
//    * =======
//    *
//    * In this section, we'll look at a couple of helpers for merging objects.
//    */

//   // Extend a given object with all the properties of the passed in
//   // object(s).
//   //
//   // Example:
//   //   var obj1 = {key1: "something"};
//   //   _.extend(obj1, {
//   //     key2: "something new",
//   //     key3: "something else new"
//   //   }, {
//   //     bla: "even more stuff"
//   //   }); // obj1 now contains key1, key2, key3 and bla
//   _.extend = function(obj) {

//     _.each(Array.prototype.slice.call(arguments, 1), function(object) {
//       _.each(object, function(prop, key) {
//         obj[key] = prop;
//       });
//     });

//     return obj;
//       };

//   // Like extend, but doesn't ever overwrite a key that already
//   // exists in obj
//   _.defaults = function(obj) {

//     _.each(Array.prototype.slice.call(arguments, 1), function(object) {
//       _.each(object, function(prop, key) {
//         obj[key] === undefined && (obj[key] = prop);
//       });
//     });

//     return obj;
//       };


//   /**
//    * FUNCTIONS
//    * =========
//    *
//    * Now we're getting into function decorators, which take in any function
//    * and return out a new version of the function that works somewhat differently
//    */

//   // Return a function that can be called at most one time. Subsequent calls
//   // should return the previously returned value.
//   _.once = function(func) {
//     // TIP: These variables are stored in a "closure scope" (worth researching),
//     // so that they'll remain available to the newly-generated function every
//     // time it's called.
//     var alreadyCalled = false;
//     var result;

//     // TIP: We'll return a new function that delegates to the old one, but only
//     // if it hasn't been called before.
//     return function() {
//       if (!alreadyCalled) {
//         // TIP: .apply(this, arguments) is the standard way to pass on all of the
//         // infromation from one function call to another.
//         result = func.apply(this, arguments);
//         alreadyCalled = true;
//       }
//       // The new function always returns the originally computed result.
//       return result;
//     };
//   };

//   // Memorize an expensive function's results by storing them. You may assume
//   // that the function only takes primitives as arguments.
//   // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
//   // same thing as once, but based on many sets of unique arguments.
//   //
//   // _.memoize should return a function that, when called, will check if it has
//   // already computed the result for the given argument and return that value
//   // instead if possible.
//   _.memoize = function(func) {

//     var memos = {};
//     return function() {
//       var serialization = JSON.stringify(arguments);
//       return memos[serialization] = memos[serialization] || func.apply(this, arguments);
//     };
//       };

//   // Delays a function for the given number of milliseconds, and then calls
//   // it with the arguments supplied.
//   //
//   // The arguments for the original function are passed after the wait
//   // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
//   // call someFunction('a', 'b') after 500ms
//   _.delay = function(func, wait) {

//     var args = Array.prototype.slice.call(arguments, 2);
//     setTimeout(function() {
//       return func.apply(null, args);
//     }, wait);
//       };


//   /**
//    * ADVANCED COLLECTION OPERATIONS
//    * ==============================
//    */

//   // Randomizes the order of an array's contents.
//   //
//   // TIP: This function's test suite will ask that you not modify the original
//   // input array. For a tip on how to make a copy of an array, see:
//   // http://mdn.io/Array.prototype.slice
//   _.shuffle = function(array) {

//     // See http://bost.ocks.org/mike/shuffle/ for an in-depth explanation of the
//     // Fisher-Yates Shuffle

//     // Make a copy of the original array
//     var out = array.slice();
//     var temp;
//     var currentIx = array.length - 1;
//     var swapIx;

//     while (currentIx) {
//       swapIx = Math.floor(Math.random() * currentIx);

//       currentIx -= 1;

//       temp = out[currentIx];
//       out[currentIx] = out[swapIx];
//       out[swapIx] = temp;
//     }

//     return out;
//       };


//   /**
//    * ADVANCED
//    * =================
//    *
//    * Note: This is the end of the pre-course curriculum. Feel free to continue,
//    * but nothing beyond here is required.
//    */

//   // Calls the method named by functionOrKey on each value in the list.
//   // Note: You will need to learn a bit about .apply to complete this.
//   _.invoke = function(collection, functionOrKey, args) {

//     return _.map(collection, function(item) {
//       var method = typeof functionOrKey === 'string' ? item[functionOrKey] : functionOrKey;

//       return method.apply(item, args);
//     });
//       };

//   // Sort the object's values by a criterion produced by an iterator.
//   // If iterator is a string, sort objects by that property with the name
//   // of that string. For example, _.sortBy(people, 'name') should sort
//   // an array of people by their name.
//   _.sortBy = function(collection, iterator) {

//     if (!collection.length) {
//       throw new TypeError('Collection must be an array.');
//     }

//     if (Object.prototype.toString.call(iterator) === '[object String]') {
//       var iter = iterator;
//       iterator = function(item) {
//         return item[iter];
//       };
//     }

//     return collection.sort(function(a, b) {
//       return iterator(a) - iterator(b);
//     });
//       };

//   // Zip together two or more arrays with elements of the same index
//   // going together.
//   //
//   // Example:
//   // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
//   _.zip = function() {

//     var max = 0;
//     var result = new Array(max);

//     _.each(arguments, function(arg) {
//       max = Math.max(arg.length, max);
//     });

//     for (var i = 0; i < max; i++) {
//       result[i] = _.pluck(arguments, i);
//     }

//     return result;
//       };

//   // Takes a multidimensional array and converts it to a one-dimensional array.
//   // The new array should contain all elements of the multidimensional array.
//   //
//   // Hint: Use Array.isArray to check if something is an array
//   _.flatten = function(nestedArray, result) {

//     return _.reduce(nestedArray, function(memo, val){
//       return memo.concat(Array.isArray(val) ? _.flatten(val) : [val]);
//     }, []);
//       };

//   // Takes an arbitrary number of arrays and produces an array that contains
//   // every item shared between all the passed-in arrays.
//   _.intersection = function() {

//     // Get a copy of all the other arrays. We'll use the array at arguments[0]
//     // as our baseline; we only need to check the values in arguments[0] since
//     // if another array contains a value not contained within our first array,
//     // it's not a valid value.
//     var others = Array.prototype.slice.call(arguments, 1);

//     // Now, let's get a copy of arguments[0] that doesn't contain duplicates and
//     // see if each value appears as an indexOf every single other array.
//     return _.filter(_.uniq(arguments[0]), function(item) {
//       return _.every(others, function(array) {
//         return _.indexOf(array, item) > -1;
//       });
//     });
//       };

//   // Take the difference between one array and a number of other arrays.
//   // Only the elements present in just the first array will remain.
//   _.difference = function(array) {

//     // Get a flattened version of all other input arrays
//     var others = _.flatten(Array.prototype.slice.call(arguments, 1));

//     // Extract only the items that aren't contained within the flattened
//     // `others` array
//     return _.filter(array, function(item) {
//       return !_.contains(others, item);
//     });
//       };

//   // Returns a function, that, when invoked, will only be triggered at most once
//   // during a given window of time.  See the Underbar readme for extra details
//   // on this function.
//   //
//   // Note: This is difficult! It may take a while to implement.
//   _.throttle = function(func, wait) {

//     var flag = false;

//     return function() {
//       if (flag !== true) {
//         flag = true;
//         func.apply(Array.prototype.slice.apply(arguments));

//         setTimeout(function() {
//           flag = false;
//         }, wait);
//       }
//     };
//       };
// }());








// (function() {
//   'use strict';

//   window._ = {};

//   // Returns whatever value is passed as the argument. This function doesn't
//   // seem very useful, but remember it--if a function needs to provide an
//   // iterator when the user does not pass one in, this will be handy.
//   _.identity = function(val) {
//     return val;
//   };

//   /**
//    * COLLECTIONS
//    * ===========
//    *
//    * In this section, we'll have a look at functions that operate on collections
//    * of values; in JavaScript, a 'collection' is something that can contain a
//    * number of values--either an array or an object.
//    *
//    *
//    * IMPORTANT NOTE!
//    * ===========
//    *
//    * The .first function is implemented for you, to help guide you toward success
//    * in your work on the following functions. Whenever you see a portion of the
//    * assignment pre-completed, be sure to read and understand it fully before
//    * you proceed. Skipping this step will lead to considerably more difficulty
//    * implementing the sections you are responsible for.
//    */

//   // Return an array of the first n elements of an array. If n is undefined,
//   // return just the first element.
//   _.first = function(array, n) {
//     return n === undefined ? array[0] : array.slice(0, n);
//   };

//   // Like first, but for the last elements. If n is undefined, return just the
//   // last element.
//   _.last = function(array, n) {

//     if (n === undefined){
//       return array[array.length - 1];
//     }else if (n === 0){
//       return [];
//     }else{
//       return array.slice(-1*n);
//     }
//   };

//   // Call iterator(value, key, collection) for each element of collection.
//   // Accepts both arrays and objects.
//   //
//   // Note: _.each does not have a return value, but rather simply runs the
//   // iterator function over each item in the input collection.
//   _.each = function(collection, iterator) {
//     if (Array.isArray(collection)){
//       for(var i = 0; i < collection.length; i++){
//         iterator(collection[i], i, collection);
//       }
//     }else{
//       for(var key in collection){
//         iterator(collection[key], key, collection)
//       }
//     }
//   };

//   // Returns the index at which value can be found in the array, or -1 if value
//   // is not present in the array.
//   _.indexOf = function(array, target){
//     // TIP: Here's an example of a function that needs to iterate, which we've
//     // implemented for you. Instead of using a standard `for` loop, though,
//     // it uses the iteration helper `each`, which you will need to write.
//     var result = -1;

//     _.each(array, function(item, index) {
//       if (item === target && result === -1) {
//         result = index;
//       }
//     });

//     return result;
//   };

//   // Return all elements of an array that pass a truth test.
//   _.filter = function(collection, test) {
//     var passedTest = [];

//     _.each(collection, function(item){
//       if(test(item)){
//         passedTest.push(item);
//       }
//     })
//     return passedTest;
//   };

//   // Return all elements of an array that don't pass a truth test.
//   _.reject = function(collection, test) {
//     // TIP: see if you can re-use _.filter() here, without simply
//     // copying code in and modifying it
//     var failedTest = [];
//     _.each(collection, function(item){
//       if(!test(item)){
//         failedTest.push(item);
//       }
//     })
//     return failedTest;
//   };

//   // Produce a duplicate-free version of the array.
//   _.uniq = function(array, isSorted, iterator) {
    
//     var uniqArray = [];
//     var mapArray = [];
//     var uniqMapArray = [];

//     if(isSorted !== undefined){

//       _.each(array, function(element, index, array){
//         mapArray.push(isSorted(element));
//       })

//       _.each(mapArray, function(element, index, mapArray){

//         if(uniqMapArray.indexOf(element) === -1){
//           uniqMapArray.push(mapArray[index]);
//           uniqArray.push(array[index]);
//         }
//       })
//     }else{
//       _.each(array, function(element, index, array){

//         if(uniqArray.indexOf(element) === -1){
//           uniqArray.push(element)
//         }
//       })
//     }
//     return uniqArray;
//   };


//   // Return the results of applying an iterator to each element.
//   _.map = function(collection, iterator) {
//     // map() is a useful primitive iteration function that works a lot
//     // like each(), but in addition to running the operation on all
//     // the members, it also maintains an array of results.
//     var resultsArray = [];

//     // for(var i = 0; i < collection.length; i++){
//     //   resultsArray.push(iterator(collection[i]));
//     // }
//     _.each(collection, function(element, index){
//       resultsArray.push(iterator(collection[index]));
//     })

//     return resultsArray;
//   };

//   /*
//    * TIP: map is really handy when you want to transform an array of
//    * values into a new array of values. _.pluck() is solved for you
//    * as an example of this.
//    */

//   // Takes an array of objects and returns and array of the values of
//   // a certain property in it. E.g. take an array of people and return
//   // an array of just their ages
//   _.pluck = function(collection, key) {
//     // TIP: map is really handy when you want to transform an array of
//     // values into a new array of values. _.pluck() is solved for you
//     // as an example of this.
//     return _.map(collection, function(item){
//       return item[key];
//     });
//   };

//   // Reduces an array or object to a single value by repetitively calling
//   // iterator(accumulator, item) for each item. accumulator should be
//   // the return value of the previous iterator call.
//   //  
//   // You can pass in a starting value for the accumulator as the third argument
//   // to reduce. If no starting value is passed, the first element is used as
//   // the accumulator, and is never passed to the iterator. In other words, in
//   // the case where a starting value is not passed, the iterator is not invoked
//   // until the second element, with the first element as its second argument.
//   //  
//   // Example:
//   //   var numbers = [1,2,3];
//   //   var sum = _.reduce(numbers, function(total, number){
//   //     return total + number;
//   //   }, 0); // should be 6
//   //  
//   //   var identity = _.reduce([5], function(total, number){
//   //     return total + number * number;
//   //   }); // should be 5, regardless of the iterator function passed in
//   //          No accumulator is given so the first element is used.
//   _.reduce = function(collection, iterator, accumulator) {
//     var acc;
//     if(accumulator !== undefined){
//       acc = accumulator;
//     }else{
//       acc = collection[0]
//     }

//     _.each(collection, function(element, index){

//       if(accumulator !== undefined || index !== 0){
//         acc = iterator(acc, element)
//       }
//     })
//     return acc;
//   };

//   // Determine if the array or object contains a given value (using `===`).
//   _.contains = function(collection, target) {
//     // TIP: Many iteration problems can be most easily expressed in
//     // terms of reduce(). Here's a freebie to demonstrate!
//     return _.reduce(collection, function(wasFound, item) {
//       if (wasFound) {
//         return true;
//       }
//       return item === target;
//     }, false);
//   };


//   // Determine whether all of the elements match a truth test.
//   _.every = function(collection, iterator) {
//     // TIP: Try re-using reduce() here.
//     //var startingVal = arguments[2] === undefined ? true : 


//     return _.reduce(collection, function(acc, element){
//       if (iterator === undefined){
//         return acc && _.identity(element);
//       }else if (iterator(element)){
//         return acc && true;
//       }
//       return acc && false;
//       },true);

//   };

//   // Determine whether any of the elements pass a truth test. If no iterator is
//   // provided, provide a default one
//   _.some = function(collection, iterator) {
//     // TIP: There's a very clever way to re-use every() here.

//         // pass in a 3rd value to every???

//     if(collection == ""){
//       return false;
//     }
//    return _.reduce(collection, function(acc, element){
//     if(iterator === undefined){
//       return acc || _.identity(element)
//     }else if (iterator(element)){
//       return acc || true;
//     }
//     return acc || false;
//    }, false);
    
//   };


//   /**
//    * OBJECTS
//    * =======
//    *
//    * In this section, we'll look at a couple of helpers for merging objects.
//    */

//   // Extend a given object with all the properties of the passed in
//   // object(s).
//   //
//   // Example:
//   //   var obj1 = {key1: "something"};
//   //   _.extend(obj1, {
//   //     key2: "something new",
//   //     key3: "something else new"
//   //   }, {
//   //     bla: "even more stuff"
//   //   }); // obj1 now contains key1, key2, key3 and bla
//   _.extend = function(obj) {  
//     //store main object
//     //add other objects to main
//     //  cycle though each obj in arguments array
//     //  cycle though each key in each obj and add to main obj

//     var mainObj = arguments[0];

//     _.each(arguments,function(element, index){
//       var newObj = element;

//       if(index !== 0){
//         for(var key in newObj){
//           mainObj[key] = newObj[key];
//         }
//       }
//     })
//     return mainObj;
//   };

//   // Like extend, but doesn't ever overwrite a key that already
//   // exists in obj
//   _.defaults = function(obj) {
//     var mainObj = arguments[0];

//     _.each(arguments,function(element, index){
//       var newObj = element;

//       if(index !== 0){
//         for(var key in newObj){
//           if(mainObj[key] === undefined){
//             mainObj[key] = newObj[key];
//           }
//         }
//       }
//     })
//     return mainObj;
//   };
//   /**
//    * FUNCTIONS
//    * =========
//    *
//    * Now we're getting into function decorators, which take in any function
//    * and return out a new version of the function that works somewhat differently
//    */
//   // Return a function that can be called at most one time. Subsequent calls
//   // should return the previously returned value.


//   _.once = function(func) {
//     // TIP: These variables are stored in a "closure scope" (worth researching),
//     // so that they'll remain available to the newly-generated function every
//     // time it's called.
//     var alreadyCalled = false;
//     var result;
//     // TIP: We'll return a new function that delegates to the old one, but only
//     // if it hasn't been called before.
//     return function() {
//       if (!alreadyCalled) {

//         // TIP: .apply(this, arguments) is the standard way to pass on all of the
//         // infromation from one function call to another.
//         result = func.apply(this, arguments);
//         alreadyCalled = true;
//       }
//       // The new function always returns the originally computed result.
//       return result;
//     };
//   };

//   // Memorize an expensive function's results by storing them. You may assume
//   // that the function only takes primitives as arguments.
//   // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
//   // same thing as once, but based on many sets of unique arguments.
//   //
//   // _.memoize should return a function that, when called, will check if it has
//   // already computed the result for the given argument and return that value
//   // instead if possible.
//   _.memoize = function(func) {
//     var resultObj = {};

//     return function(){
//       var argStrings = JSON.stringify(arguments);
//       if (!(argStrings in resultObj)){
//         resultObj[argStrings] = func.apply(this, arguments)
//       }
//       return resultObj[argStrings];
//     }
//   };

//   // Delays a function for the given number of milliseconds, and then calls
//   // it with the arguments supplied.
//   //
//   // The arguments for the original function are passed after the wait
//   // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
//   // call someFunction('a', 'b') after 500ms
//   _.delay = function(func, wait) {
//     //assign remaining args to array using for-loop
//     //use func.apply(thisValue,[parameter array])
//     var argsArray = [];
//     for(var i = 2; i < arguments.length; i++){
//       argsArray.push(arguments[i])
//     }
//     window.setTimeout(function(){
//       return func.apply(null, argsArray);
//     }, wait)
    
//   };


//   /**
//    * ADVANCED COLLECTION OPERATIONS
//    * ==============================
//    */

//   // Randomizes the order of an array's contents.
//   //
//   // TIP: This function's test suite will ask that you not modify the original
//   // input array. For a tip on how to make a copy of an array, see:
//   // http://mdn.io/Array.prototype.slice
//   _.shuffle = function(array) {
//     var copyArray = array.slice();
//     //loop through array backwards
//     //  using random()* index will generate number from 0 to index
//     //  swap current element with random generator index
//     //
//     var randoIndex;
//     var temp;

//     for(var i = array.length - 1; i >= 0; i--){
//       randoIndex = Math.floor(Math.random()*i);
//       temp = copyArray[i];  
//       copyArray[i] = copyArray[randoIndex];
//       copyArray[randoIndex] = temp;
//     }
//     return copyArray;
//   };


//   /**
//    * ADVANCED
//    * =================
//    *
//    * Note: This is the end of the pre-course curriculum. Feel free to continue,
//    * but nothing beyond here is required.
//    */

//   // Calls the method named by functionOrKey on each value in the list.
//   // Note: You will need to learn a bit about .apply to complete this.
//   _.invoke = function(collection, functionOrKey, args) {
//   };

//   // Sort the object's values by a criterion produced by an iterator.
//   // If iterator is a string, sort objects by that property with the name
//   // of that string. For example, _.sortBy(people, 'name') should sort
//   // an array of people by their name.
//   _.sortBy = function(collection, iterator) {
//   };

//   // Zip together two or more arrays with elements of the same index
//   // going together.
//   //
//   // Example:
//   // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
//   _.zip = function() {
//   };

//   // Takes a multidimensional array and converts it to a one-dimensional array.
//   // The new array should contain all elements of the multidimensional array.
//   //
//   // Hint: Use Array.isArray to check if something is an array
//   _.flatten = function(nestedArray, result) {
//   };

//   // Takes an arbitrary number of arrays and produces an array that contains
//   // every item shared between all the passed-in arrays.
//   _.intersection = function() {
//   };

//   // Take the difference between one array and a number of other arrays.
//   // Only the elements present in just the first array will remain.
//   _.difference = function(array) {
//   };

//   // Returns a function, that, when invoked, will only be triggered at most once
//   // during a given window of time.  See the Underbar readme for extra details
//   // on this function.
//   //
//   // Note: This is difficult! It may take a while to implement.
//   _.throttle = function(func, wait) {
//   };
// }());
