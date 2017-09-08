var fs = require('fs');
var jobObj = JSON.parse(fs.readFileSync('./app/routes/job1.json', 'utf8'));


module.exports = function(app, db) {
};


function clone(a) {
    return JSON.parse(JSON.stringify(a));
}

module.exports = function(app, db) {
    app.get('/users/:id', (req, res) => {
        const id = req.params.id;
        var jobRet = clone(jobObj);
        var joblist = jobRet["hits"]["hits"];
        joblist.forEach(function(job){
            job["_id"] = id + "-" + job["_id"];
        });
        res.send(jobRet);
    });

    app.post('/users', (req, res) => {
        // You'll create your note here.
        console.log(req.body);
        res.send('Hello')
});
};