'use strict';
var express = require('express');
var router = express.Router();
router.get('/', function (req, res) {
    res.render('Home', { title: 'Prabhat Home' });
});
router.get('/about_me', function (req, res) {
    res.render('about_me', { title: 'About Me' });
});
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Comp2068 - Projects' });
});
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});
router.get('/contact_me', function (req, res) {
    res.render('contact_me', { title: 'Contact info' });
});
module.exports = router;
