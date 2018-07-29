<?php
use Rise\Response;

class Handler {
	public function showText(Response $response) {
		$response->setHeader('Content-Type', 'text/plain')
			->setBody('Some text');
	}
}
