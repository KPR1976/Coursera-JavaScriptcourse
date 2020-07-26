/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    const words = tweet.split(' ');
    var hashtags = [];
    for (var i = 0; i < words.length; i++) {
        var word = words[i]

        if (word.indexOf('#') !== -1) {
            hashtags.push(word.substr(1));
        }
    }
    return hashtags;

};
