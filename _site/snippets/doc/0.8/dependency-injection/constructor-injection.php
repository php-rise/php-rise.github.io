<?php
class Bike {
	private $distance = 0;

	public function move($distance) {
		$this->distance += $distance;
	}
}

class Person {
	public function __construct(Bike $bike) {
		$this->bike = $bike;
	}

	public function ride($distance) {
		$this->bike->move($distance);
	}
}

$container = new Rise\Container();
$person = $container->get(Person::class);
$person->ride(100);
