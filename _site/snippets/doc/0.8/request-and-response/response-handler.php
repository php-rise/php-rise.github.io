<?php
namespace App\Handlers;

use Rise\Response;

class Home {
	public function index(Response $response) {
		$response->send('Hello world');
	}
}
