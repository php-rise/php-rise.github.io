<?php
interface Fruit {}

class Apple implements Fruit {}

class Blackberry implements Fruit {}

class Alan {
	public function __construct(Fruit $fruit) {
		$this->fruit = $fruit;
	}
}

class Bosco {
	public function __construct(Fruit $fruit) {
		$this->fruit = $fruit;
	}
}

$container = new Rise\Container();

// When constructing an instance of Alan, resolve an instance of
// Apple as the constructor argument.
$container->configClass(Alan::class, [
	Fruit::class => Apple::class
]);

// When constructing an instance of Bosco, resolve an instance of
// Blackberry as the constructor argument.
$container->configClass(Bosco::class, [
	Fruit::class => Blackberry::class
]);
