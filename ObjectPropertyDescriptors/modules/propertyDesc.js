import Point from './point.js'

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
export const PropertyDescriptorsDemo = () => {
    let point = Point(5, 8)
    console.log(Object.getOwnPropertyDescriptor(point, 'x'))
    // value: 5
    // writable: true
    // enumerable: true
    // configurable: true
    console.log(Object.getOwnPropertyDescriptor(point, 'r'))
    //     get: ƒ r()
    // set: undefined
    // enumerable: true
    // configurable: true
}