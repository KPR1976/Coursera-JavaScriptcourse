module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */

    subscribers : [],

    on: function (event, subscriber, handler) {
        this.subscribers.push({
            eventName: event,
            subscriber: subscriber,
            handler:handler
        })
        return this
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        for (element of this.subscribers) {
            if (element.eventName === event && element.subscriber == subscriber){
                i = this.subscribers.indexOf(element)

                this.subscribers.splice(i, 1)
                return this.off(event, subscriber)
            }


        }        
        return this 
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        this.subscribers.forEach(function(element){
            if (element.eventName === event) {
                element.handler.call(element.subscriber)
            }
           
        })
        return this
    }
};
