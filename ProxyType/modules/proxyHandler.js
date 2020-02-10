export const proxyHandler = () => {
    return {
        set: function (obj, prop, value) {
            if (prop === 'numberOfTimes') {
                if (!Number.isInteger(value)) {
                    throw new TypeError('The numberOfTimes property is not an integer');
                }
                if (value < 0) {
                    throw new RangeError(`The property numberOfTimes can't be negative.`);
                }
            }
            // The default behavior to store the value
            obj[prop] = value;
            // Indicate success
            return true;
        },
        get: function (obj, prop) {
            return prop in obj ? obj[prop] : "Doesn't exist"
        },
        construct: function (target, args) {
            var obj = Object.create(base.prototype);
            this.apply(target, obj, args);
            return obj;
        },
        apply: function (target, that, args) {
            sup.apply(that, args);
            base.apply(that, args);
        },
        handler: () => {
            console.log("Handling proxy")
        }
    }
}