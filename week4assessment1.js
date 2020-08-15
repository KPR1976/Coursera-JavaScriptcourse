/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var command = [].slice.call(arguments)
    if (arguments.length == 1) {
        return arguments[0]
    }
    let copy = collection.slice()

    command.forEach(function(item){
        if (item[0] == 'filter') {
           copy =  filterCol(copy, item[1])
        }
    })
    
    command.forEach(function(item){
        if (item[0] == 'select') {
           copy = selectCol(copy, item[1])
        }
    })

    return copy
}

/**
 * @params {String[]}
 */
function select() {
    return ['select', [].slice.call(arguments)]
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return ['filter', [].slice.call(arguments)]
}

function filterCol(collection, filters){
    var property = filters[0]
    var values = filters[1]
    newCopy = []
    collection.forEach(function(item){
        if (values.indexOf(item[property]) != -1){
        newCopy.push(item)
        }
        })
    return newCopy
}

function selectCol(collection, fields){
    newCopy = []
    collection.forEach(function(item){
        let newobject = {}
        Object.keys(item).forEach(function(element){
            if (fields.includes(element)) {
                newobject[element] = item[element];
              }
        })
        newCopy.push(newobject)
    })
    return newCopy
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
