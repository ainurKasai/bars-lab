﻿/**
 * Задание 1. Реализовать конструктор класса Warrior, который в качестве параметров
 * принимает имя и уровень воина. У созданного при помощи этого конструктора объекта
 * должны имя и уровень должны быть доступны в качестве полей экземпляра.
 * Если задание выполнено правильно, то код:
 * <code>
 *   var warrior = new Warrior("Joda", 100);
 *   warrior.name; // == "Joda"
 *   warrior.level; // == 100
 * </code>
 * выполнится без ошибок.
 */

/**
 * Создает экземпляр воина
 * @param {String} name Имя воина.
 * @param {Number} level Уровень воина.
 */
function Warrior(name, level){
  this.name = name;
  this.level = level;
  this.getCode = function(){
  return "Кодекс воина";
  }
}


/**
 * Задание 2. Добавить метод attack нашему воину.
 * Метод возвращает уровень воина умноженный на коэффициент 0.1.
 * Подсказка: используйте prototype.
 */

/**
 * Метод атаки воина.
 * @example
 * warrior.attack(); // Воин атакует.
 * @name Warrior.attack
 * @return {Number} Урон, наносимой атакой.
 */
Warrior.prototype.attack = function() {
return this.level * 0.1;
};

/**
 * Задание 3. Создать наследников класса Warrior: Jedi, Sith.
 * Конструкторы Jedi и Sith так же принимают имя и уровень.
 * Добавить к каждому из классов поле sideOfForce со значениями "light" и "dark", соответственно.
 * Классу Warrior добавить метод getCode, возвращающий кодекс воина.
 * Кодекс джедая: "Нет волнения — есть покой...".
 * Кодекс ситха: "Спокойствие — ложь, есть только страсть..."
 */

/**
 * Создает экземпляр джедая
 * @param {String} name Имя джедая.
 * @param {Number} level Уровень джедая.
 */
 
 Jedi.prototype = new Warrior();
 
function Jedi (name, level) {
  this.level = level;
  this.name = name;
  this.sideOfForce = "light";
   this.getCode = function(){
  return "Нет волнения — есть покой...";
  }
   this.toLightSide = function(sith){
  if(sith instanceof Sith)
  {
  if(this.level > sith.level)
  {
  sith.sideOfForce = "light";
  }
  else
  {
  sith.toDarkSide(this);
  }
  }
  else
  {
  throw Error("Invalid argument");
  }
 
  }
}

/**
 * Создает экземпляр ситха
 * @param {String} name Имя ситха.
 * @param {Number} level Уровень ситха.
 */
Sith.prototype = new Warrior();

function Sith(name, level){
this.level = level;
this.name = name;
this.sideOfForce = "dark";
this.getCode = function(){
  return "Спокойствие — ложь, есть только страсть...";
  }
  
 this.toDarkSide = function(jedi)
 {
 if(jedi instanceof Jedi)
 {
 if(this.level > jedi.level){
 jedi.sideOfForce = "dark";
 }
 else{
 jedi.toLightSide(this);
 }
 }
 else{
 throw Error("Invalid argument");
 }
 }
  
}

/**
 * Метод произнесения кодекса.
 * @example
 * warrior.getCode(); // Воин произносит кодекс.
 * @name Warrior.getCode
 * @return {String} Кодекс воина.
 */
// Ваш код здесь...


/**
 * Задание 4. Добавить метод toLightSide классу Jedi.
 * Метод в качестве параметра принимает экземпляр класса Sith.
 * Если тип передаваемого аргумента не Sith, то выбрасывается исключение.
 * Если уровень джедая выше чем уровень ситха, то ситх переходит
 * на светлую сторону (значение поля sideOfForce у ситха становится "light"), 
 * иначе джедай переходит на темную.
 */

/**
 * Метод призыва на светлую сторону.
 * @example 
 * joda.toLightSide(darth); // Мастер Йода на светлую сторону силы призывает.
 *
 * @name Jedi.toLightSide
 *
 * @param {Sith} sith Ситх, призываемый на светлую сторону
 *
 * @throws Error("Invalid argument")
 * Если призываемый объект не является ситхом, выкидывается исключение.
 */

 


/**
 * Задание 5. Добавить метод toDarkSide классу Sith.
 * Метод в качестве параметра принимает экземпляр класса Jedi.
 * Если тип передаваемого аргумента не Jedi, то выбрасывается исключение.
 * Если уровень ситха выше чем уровень джедая, то джедай переходит
 * на светлую сторону (значение поля sideOfForce у джедая становится "dark"), 
 * иначе ситх переходит на светлую.
 */

 /**
 * Метод призыва на темную сторону.
 * @example 
 * palpatine.toDarkSide(anakin); // Не поддавайся темной силе ты.
 * @name Sith.toDarkSide
 * @param {Jedi} jedi Джедай, призываемый на темную сторону
 * @throws Error("Invalid argument")
 * Если призываемый объект не является джедаем, выкидывается исключение.
 */
// Ваш код здесь...