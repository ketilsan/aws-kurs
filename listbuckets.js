var AWS = require("aws-sdk");
var s3 = new AWS.S3();

s3.listBuckets(function (err, data) {
  if(err) {
    consle.log("Error:", err);
  } else {
    for(var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name , " : ", bucket.CreationDate);
    }
  }
});
