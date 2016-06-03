var _ = require("lodash");
var request = require("request");
var configuration = require([__dirname, "..", "config"].join("/"));

exports.create = function(config, fn){
    var uri = [configuration.base_uri, config.uri].join("/");
    var options = {
        uri: [uri, config.format].join("."),
        qs: config.qs || {},
        proxy: config.proxy
    }
    var callback, promise;

    if(_.isUndefined(fn) && Promise)
        promise = new Promise(function(resolve, reject){
            callback = function(err, response, body){
                if (err) return reject(err);
                resolve([body, response]);
            };
        });
    else
        callback = function(err, response, body){
            fn(err, body, response);
        };

    request.get(options, callback);

    return promise;
}
