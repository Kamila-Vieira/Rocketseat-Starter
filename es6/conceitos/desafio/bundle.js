"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Exercício 1
var Usuario = /*#__PURE__*/function () {
  function Usuario(email, senha) {
    _classCallCheck(this, Usuario);

    this.email = email;
    this.senha = senha;
    this.admin = false; //email == 'email@teste.com' && senha == 'senha123'? this.admin = false : this.admin = true;
  }

  _createClass(Usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      if (this.admin == false) {
        return false;
      } else {
        return true;
      }
    }
  }]);

  return Usuario;
}();

var Admin = /*#__PURE__*/function (_Usuario) {
  _inherits(Admin, _Usuario);

  var _super = _createSuper(Admin);

  function Admin(email, senha) {
    var _this;

    _classCallCheck(this, Admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return Admin;
}(Usuario);

var User1 = new Usuario('email@teste.com', 'senha123');
var Adm1 = new Admin('email@teste.com', 'senha123');
console.log('Exercício 1:', User1.isAdmin()); // false

console.log('Exercício 1.1:', Adm1.isAdmin()); // true
//Exercício 2

var users = [{
  name: 'Diego',
  age: 23,
  company: 'Rocketseat'
}, {
  name: 'Gabriel',
  age: 15,
  company: 'Rocketseat'
}, {
  name: 'Lucas',
  age: 30,
  company: 'Facebook'
}];
console.log('Exercício 2:', users);
/* {name: "Diego", age: 46, company: "Rocketseat"}
{name: "Gabriel", age: 30, company: "Rocketseat"}
{name: "Lucas", age: 60, company: "Facebook"} */
//2.1 Utilizando o map (Crie uma variável que contenha todas idades dos usuários)

var showAge = users.map(function (user) {
  return user.age;
});
console.log('Exercício 2.1:', showAge); //[23, 15, 30]

/* 2.2 Utilizando o filter (Crie uma variáveis que tenha apenas os usuários
 que trabalham na Rocketseat e com mais de 18 anos) */

var rocketseatWorkerAndOlder = users.filter(function (user) {
  return user.company == 'Rocketseat' && user.age >= 18;
});
console.log('Exercício 2.2:', rocketseatWorkerAndOlder); //{name: "Diego", age: 23, company: "Rocketseat"}
//2.3 Utilizando o find (Crie uma variável que procura por um usuário que trabalhe na empresa Google)

var googleWorker = users.find(function (user) {
  return user.company == 'Google';
});
console.log('Exercício 2.3:', googleWorker); //undefined

/* 2.4 Unindo operações (Multiplique a idade de todos usuários por dois e 
depois realize um filtro nos usuários que possuem no máximo 50 anos) */

var showGreaterThanFifty = users.filter(function (user) {
  user.age *= 2;
  return user.age <= 50;
});
console.log('Exercício 2.4:', showGreaterThanFifty);
/* {name: "Diego", age: 46, company: "Rocketseat"}
{name: "Gabriel", age: 30, company: "Rocketseat"} */
//Exercício 3
//Converta em arrow function
// 3.1

var arr = [1, 2, 3, 4, 5];
var arrChanged = arr.map(function (item) {
  return item + 10;
});
console.log('Exercício 3.1:', arrChanged); // [11, 12, 13, 14, 15]
// 3.2 (Dica: Utilize uma constante pra function)

var usuario = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(usuario) {
  return usuario.idade;
};

console.log('Exercício 3.2:', mostraIdade(usuario)); // 23
// 3.3 (Dica: Utilize uma constante pra function)

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log('Exercício 3.3:', mostraUsuario(nome, idade)); //{nome: "Diego", idade: 23}

console.log('Exercício 3.3.1:', mostraUsuario(nome)); //{nome: "Diego", idade: 18}
// 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

console.log('Exercício 3.4:', promise()); // Promise {<fulfilled>: undefined}
//Exercício 4
//4.1 Desestruturação simples

var empresa = {
  nome1: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome1 = empresa.nome1,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log('Exercício 4.1:', nome1 + ' em ' + cidade + '/' + estado); //Rocketseat em Rio do Sul/SC
//4.2 Desestruturação em parâmetros

function mostraInfo() {
  return "".concat(nome2, " tem ").concat(idade1, " anos.");
}

var user = {
  nome2: 'Diego',
  idade1: 23
};
var nome2 = user.nome2,
    idade1 = user.idade1;
console.log('Exercício 4.2:', mostraInfo()); //Diego tem 23 anos.
//Exercício 5
//5.1 Rest

var array = [1, 2, 3, 4, 5, 6];
var x = array[0],
    y = array.slice(1);
console.log('Exercício 5.1:', x); // 1

console.log('Exercício 5.1:', y); // [2, 3, 4, 5, 6]
//5.1.1

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log('Exercício 5.1.1:', soma(1, 2, 3, 4, 5, 6)); // 21

console.log('Exercício 5.1.1:', soma(1, 2)); // 3
//5.2 Spread

var user1 = {
  name1: 'Diego',
  age1: 23,
  adress1: {
    city1: 'Rio do Sul',
    state1: 'SC',
    country1: 'Brasil'
  }
};

var user2 = _objectSpread(_objectSpread({}, user1), {}, {
  name1: 'Gabriel'
});

var user3 = _objectSpread(_objectSpread({}, user1), {}, {
  adress1: _objectSpread(_objectSpread({}, user1.adress1), {}, {
    city1: 'Lontras'
  })
});

console.log('Exercício 5.2:', user2); //name1: "Gabriel", age1: 23, adress1: {city1: "Rio do Sul", state1: "SC", country1: "Brasil"}

console.log('Exercício 5.2:', user3); //name1: "Diego", age1: 23, adress1: {city1: "Lontras", state1: "SC", country1: "Brasil"}
//Exercício 6

var usuario2 = 'Diego';
var idade2 = 23;
console.log('Exercício 6:', "O usu\xE1rio ".concat(usuario2, " possui ").concat(idade2, " anos")); //O usuário Diego possui 23 anos
//Exercício 7

var nome3 = 'Diego';
var idade3 = 23;
var usuario3 = {
  nome3: nome3,
  idade3: idade3,
  cidade: 'Rio do Sul'
};
console.log('Exercício 7:', usuario3); //{nome: "Diego", idade: 23, cidade: "Rio do Sul"}
