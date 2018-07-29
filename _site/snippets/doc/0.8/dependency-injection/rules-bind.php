<?php
interface Fruit {}

class Apple implements Fruit {}

$container = new Rise\Container();
$container->bind(Fruit::class, Apple::class);
$apple = $container->get(Fruit::class); // An instance of apple.
