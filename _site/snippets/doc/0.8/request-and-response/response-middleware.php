<?php
use Closure;

class Middleware {
	public function doNothing(Closure $next) {
		$next();
	}
}
