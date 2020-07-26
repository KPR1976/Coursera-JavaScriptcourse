/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    
    var newHashtags = []
    for (var i = 0; i < hashtags.length; i++ ) {
        var hashtag = hashtags[i].toLowerCase()

        if (newHashtags.indexOf(hashtag) === -1) {
            newHashtags.push(hashtag)
        }

        // mentor's solution
        // var tagsMap = {};
        // if (!tagsMap.hasOwnProperty(hashtag)) {
        //     tagsMap[hashtag] = true;
        //     newHashtags.push(hashtag);
        // }
    }
   return newHashtags.join(', ')
    
};
