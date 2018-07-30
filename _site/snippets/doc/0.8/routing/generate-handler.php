<?php
namespace App\Handlers;

use Rise\Response;
use Rise\Router\UrlGenerator;

class Home {
	public function index(UrlGenerator $urlGenerator, Response $response) {
		$response->redirect($urlGenerator->generate('product.show', ['id' => 1])); // Redirect to http://localhost:3000/products/1
	}
}
