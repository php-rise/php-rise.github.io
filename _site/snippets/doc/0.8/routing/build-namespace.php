<?php
$scope->namespace('App\Handlers');

$scope->get('/', 'Home.index');
$scope->get('/blogs', 'Blog.list');
