<?php
/* @var $response \Rise\Response */

// STRING mode
$response->setMode(\Rise\Response::STRING);
$response->send('Hello world'); // This will send "Hello world" to the browser.
$response->send('Good bye'); // This will not send anything to the browser.

// FILE mode
$response->setMode(\Rise\Response::FILE);
$response->send('/var/www/file'); // This will send the file "/var/www/file".

// STREAM mode
$response->setMode(\Rise\Response::STREAM);
$response->send('Hello');
$response->send(' world'); // It can send more than once.
