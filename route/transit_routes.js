//schedule routes
'use strict';

const express = require('express');
const geocoder = require('./../lib/geocoder');
const getStops = require('./../lib/get-stops');

const transitRouter = module.exports = exports = express.Router();

transitRouter.get('/findstops/:address', geocoder, getStops, (req, res) => {
  res.json(req.stopsList);
});
