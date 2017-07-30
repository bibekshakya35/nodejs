"use strict"
var Studio = require('studio');
var request = require('request');

var YOUTUBE_KEY = 'AIzaSyCXlgs0ZYOpF4hssxse6bPFEW00zTDZ28g';
var YOUTUBE_REGEX = /https:\/\/www.youtube.com\/watch\?v=(\w*)/;

/*
Studio.module creates or retrieve a module, it is just a wrapper on your services 
to avoid name collision on big projects
*/
var youtubeModule = Studio.module('youtube');