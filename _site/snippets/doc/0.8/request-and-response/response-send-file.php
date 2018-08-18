<?php
/* @var $response \Rise\Response */
$response->sendFile('/var/www/file');
// is equivalent to
$response->setMode(\Rise\Response::FILE)->send('/var/www/file');
