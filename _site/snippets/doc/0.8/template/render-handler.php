<?php
namespace App\Handlers;

use Rise\{Response, Template};

class Hello {
	public function someone(Response $response, Template $template) {
		$html = $template->render('hello/someone', [
			'name' => 'Rise',
		]);
        $response->asHtml()->send($html);
	}
}
