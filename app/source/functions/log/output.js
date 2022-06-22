const Output = (Received_Object) => {
    if (typeof Received_Object === 'object' && !Array.isArray(Received_Object) && Received_Object !== null) {
        console.log("[output module] received object");
        console.log(Received_Object)
    } else {
        console.log("[output module] received a unidentified element, check below:")
        console.log(Received_Object.toString())
    }
};

module.exports = { Output };