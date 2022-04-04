export const formValidate = (e,productType) => {
    let errors = {'typeErrors':false,'emptyErrors':[]}

    setErrors(isString,e.target.sku,errors)
    setErrors(isString,e.target.name,errors)
    setErrors(isNumber,e.target.price,errors)

    switch (productType) {
        case 'dvd':
            setErrors(isNumber,e.target.size,errors)
            break
        case 'book':
            setErrors(isNumber,e.target.weight,errors)
            break
        case 'furniture':
            setErrors(isNumber,e.target.height,errors)
            setErrors(isNumber,e.target.width,errors)
            setErrors(isNumber,e.target['length'],errors)
            break
    }


    return errors


}


function setErrors(validationFunction, target, errors) {
    let validationValue = validationFunction(target.value)
    if (validationValue==='emptyError') {
        errors.emptyErrors.push(target.id)
        return errors
    } else if (validationValue!==true) {
        errors.typeErrors=true
        errors.emptyErrors.push(target.id)
    }
    return errors

}

const isString = (text) => {
    if(isBlank(text)){
        return 'emptyError'
    }
    return (typeof text) === "string"
}

const isNumber = (number) => {
    if(isBlank(number)){
        return 'emptyError'
    }
    return !isNaN(number)
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}