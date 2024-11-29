const myArr = []
// %DebugPrint(myArr)

/**
 * jsvu/v8/d8 engine to debug
 * 
 * #Packed_SMI_ELEMENTS
 * #HOLEY_SMI_ELEMENTS
 * 
 * continous, Holey array
 * 
 * SMI(small integer)
 *  Packed elements
 * Double(float, string, function)
 * 
 * 
 * 
 */


const Arr = [1,2,3,4,5]
//Packed SMI Elements -- most optimised

Arr.push(6.0)
// Packed_double_elements -- not revert to packed SMI elements - after downgrading not possible to revert

Arr.push('7')
// Packed_elements

Arr[10] = 11
// Holey elements -- not revert to packed elements

console.log(Arr);
console.log(Arr.length);
console.log(Arr[9]);

//bound check
// Arr[100] = 101
// hasOwnProperty(Arr, 9) - undefined - false
// hasOwnProperty(Arr.prototype, 10)
// hasOwnProperty(Object.prototype, 9)

// holes are very expensive in JS engine
// holes are not optimised in JS engine
// holes are not cache friendly
// holes are not contiguous
// holes are not predictable

const Arr1 = [1,2,3,4,5]
console.log(Arr1[2]);

// SMI > Double > PACKED - contiguous
// H_SMI > H_DOUBLE > HOLEY_PACKED

const Arr2 = new Array(10)
// just 3 holes. HOLEY_SMI_ELEMENTS
Arr2[0] = '1' // Holey_elements
Arr2[1] = '2' // Holey_elements
Arr2[2] = '3' // Holey_elements

const Arr3 = []
Arr3.push('1') // Packed_elements
Arr3.push('2') // Packed_elements
Arr3.push('3') // Packed_elements

const Arr4 = [1,2,3,4,5]

Arr4.push(NaN) // Packed_double_elements
Arr4.push(Infinity) // Packed_double_elements
Arr4.push(-Infinity) // Packed_double_elements
Arr4.push(undefined) // Packed_double_elements
Arr4.push(null) // Packed_double_elements

// for, for-of, forEach



