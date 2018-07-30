<?php
$scope->get('/', 'App\Handlers\Home.index', 'root');
$scope->get('/products/{id}', 'App\Handlers\Product.show', 'product.show');
