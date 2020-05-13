
var express = require('express');
var router = express.Router();
var fs = require('fs');
var xml2js = require('xml2js');
const util = require('util')
const parseString = require('xml2js').parseString;
var parser = new xml2js.Parser();

var xmlfile = __dirname + "/../public/xmlfiles/arquivo.xml";


/* GET home page. */
router.get('/', function (req, res, next) {
    fs.readFile(xmlfile, function (err, data) {
        parseString(data, function (err, result) {
            var empresa = result['AuditFile']['Header'];
            console.log(empresa)
            if (err) {
                console.log(err)
            } else {
                res.render('index', { title: 'Parse XML using NodeJS', empresa: empresa });
            }
        });
    });
});

module.exports = router;