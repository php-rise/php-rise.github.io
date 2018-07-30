<?php
$scope->createScope(function ($scope) {
	$scope->prefix('/blogs');

	$scope->get('', 'App\Handlers\Blog.list');
	$scope->get('/{id}', 'App\Handlers\Blog.show');
	$scope->post('', 'App\Handlers\Blog.create');
	$scope->put('/{id}', 'App\Handlers\Blog.update');
	$scope->delete('/{id}', 'App\Handlers\Blog.delete');
});
