<?php
$scope->use(['Rise\Middlewares\Session.run']);

$scope->get('/', 'App\Handlers\Home.index');
$scope->get('/blogs', 'App\Handlers\Blog.list');
