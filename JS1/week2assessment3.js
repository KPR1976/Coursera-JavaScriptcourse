// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
   var data = command.split(' ')
   var commandName = data[0]
   if (commandName == 'ADD') {
        return addPhone(data[1], data[2])
   } else if (commandName == 'SHOW') {
        return showPhones()
   }  else if (commandName == 'REMOVE_PHONE') {
      return removePhone(data[1])
   }
   }

   function addPhone(name, phone) {
      var phone = phone.split(',')
      if (phoneBook.hasOwnProperty(name)) {
         phoneBook[name] = phoneBook[name].concat(phone)
      } else {
         phoneBook[name] = phone;
        }
      return phoneBook;
   }

   function removePhone(phone) {
      Object.values(phoneBook).forEach(element => {
         if (element.indexOf(phone) == -1){
            result = false
         } else {
            element.splice(element.indexOf(phone),1)
            result = true
         }
      })
      return result
   }

   function showPhones(){
      var result = []
      var keys = Object.keys(phoneBook)
      for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var value = phoneBook[key];
      if (value.length > 0) {
         result.push(key + ": " + value.join(', '))
      } else {
         continue
      }
      }
      result = result.sort()
      return result
   }
   
