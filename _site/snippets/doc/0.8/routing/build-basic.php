<?php
$scope->get('/', 'App\Handlers\Home.index', 'root');
$scope->get('/blogs', 'App\Handlers\Blog.list');
$scope->get('/blogs/{id}', 'App\Handlers\Blog.show');
$scope->post('/blogs', 'App\Handlers\Blog.create');
$scope->put('/blogs/{id}', 'App\Handlers\Blog.update');
$scope->delete('/blogs/{id}', 'App\Handlers\Blog.delete');
