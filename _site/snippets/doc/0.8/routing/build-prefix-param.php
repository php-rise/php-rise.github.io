<?php
$scope->createScope(function ($scope) {
	$scope->prefix('/blogs');

	$scope->get('', 'App\Handlers\Blog.list');
	$scope->post('', 'App\Handlers\Blog.create');

	$scope->createScope(function ($scope) {
		$scope->prefix('/{id}');

		$scope->get('', 'App\Handlers\Blog.show');
		$scope->put('', 'App\Handlers\Blog.update');
		$scope->delete('', 'App\Handlers\Blog.delete');
	});
});
