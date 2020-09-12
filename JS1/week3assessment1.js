/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var date = new Date(date)
    return {
        add: function(num, units) {
            unitsDict = ['years', 'months', 'days', 'hours', 'minutes']
            if (num < 0 || unitsDict.indexOf(units) ==-1) {
                throw new TypeError
            } else {
                switch(units){
                case 'years':
                    date.setYear(date.getFullYear() + num)
                    break
                case 'months':
                    date.setMonth(date.getMonth() + num)
                    break
                case 'days':
                    date.setDate(date.getDate() + num)
                    break
                case 'hours':
                    date.setHours(date.getHours() + num)
                    break
                case 'minutes':
                    date.setMinutes(date.getMinutes() + num)
                }
            }
        return this
        },
        subtract: function(num, units) {
            unitsDict = ['years', 'months', 'days', 'hours', 'minutes']
            if (num < 0 || unitsDict.indexOf(units) ==-1) {
                throw new TypeError
            } else {
                switch(units){
                    case 'years':
                        date.setYear(date.getFullYear() - num)
                        break
                    case 'months':
                        date.setMonth(date.getMonth() - num)
                        break
                    case 'days':
                        date.setDate(date.getDate() - num)
                        break
                    case 'hours':
                        date.setHours(date.getHours() - num)
                        break
                    case 'minutes':
                        date.setMinutes(date.getMinutes() - num)
                    }
                }
        return this
        },
        get value() {
            var year = String(date.getFullYear())
            var month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1):date.getMonth() + 1
            var day = date.getDate() < 10 ? '0' + date.getDate():date.getDate()
            var hours = date.getHours() < 10 ? '0' + date.getHours():date.getHours()
            var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes():date.getMinutes()                  
            
        return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
        }
    }    
};
