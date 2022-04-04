export const makeDescription = (type, e) => {
    if (type==='dvd') {
        const value1 = e.target.size.value
        return `Size: ${value1} MB`
    } else if (type==='book') {
        const value1 = e.target.weight.value
        return `Weight: ${value1} KG`
    } else {
        const value1 = e.target.height.value
        const value2 = e.target.width.value
        const value3 = e.target['length'].value
        return `Dimension: ${value1}x${value2}x${value3}`
    }
}