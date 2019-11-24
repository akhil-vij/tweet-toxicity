const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const Twit = require("twit");

console.log("Test");

const T = new Twit({
  consumer_key: "2olSFrH7rBC9XPhDDcMCuJZb2",
  consumer_secret: "57zNtafC4AGCaf3JUFcPbsJsdon8kYBe9Rihz6DaxFfR2DOrXp",
  access_token: "1198557421855096833-xnnKupt08nVF548jG8QFBAzNHqUNXf",
  access_token_secret: "judNLvWWfsswwjp8O1lQ662DfKlWworKbBt0kHBXfdwSg",
  timeout_ms: 60 * 1000
});

app.use(express.static(__dirname + "/dist"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.route("/search").get(function(req, res) {
  T.get("search/tweets", { q: "stupid since:2018-07-11", count: 1 }, function(
    err,
    data,
    response
  ) {
    if (err) {
      console.log(err);
    } else {
      res.send(JSON.stringify(data, null, 2));
    }
  });
});

var port = process.env.PORT || process.env.VCAP_APP_PORT || 3012;
app.listen(port);

const forceSSL = function() {
  return function(req, res, next) {
    if (req.headers["x-forwarded-proto"] !== "https") {
      return res.redirect(["http://", req.get("Host"), req.url].join(""));
    }
    next();
  };
};
app.use(forceSSL());
const path = require("path");
// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
