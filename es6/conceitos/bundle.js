"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

//Classes
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log('AulaClasses_3:', this.data);
    }
  }]);

  return List;
}();

var TodoList = /*#__PURE__*/function (_List) {
  _inherits(TodoList, _List);

  var _super = _createSuper(TodoList);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _super.call(this);
    _this.usuario = 'Kamila';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log('AulaClasses_2:', this.usuario);
    }
  }]);

  return TodoList;
}(List);

var minhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  minhaLista.mostraUsuario();
  minhaLista.add('novo todo');
};

var Matematica = /*#__PURE__*/function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log('AulaClasses_1 | (Pressione Adicionar):', Matematica.soma(1, 3)); //Const & let
//const, diferente de var não se pode reatribuir valor. só se pode mutar(dentro de objetos{} e vetores[]):

var usuario = {
  nome: 'Kamila'
};
usuario.nome = 'Diego';
console.log('AulaConst&Let_1:', usuario); //let, são variáveis de escopo não são visíveis fora da funcão por exemplo:

function teste(x) {
  var y = 2;

  if (x > 5) {
    console.log('AulaConst&Let_2:', x, y);
  }
}

teste(7); //console.log(y) não é possível fora da função
//Operações em vetores

var arr = [-3, 1, 3, 4, 6, 12, 56, 80];
var newArr = arr.map(function (item, index) {
  return item * 2 + index;
}); // map percorre o array

console.log('AulaOperacoesEmArray_1:', newArr);
var sum = arr.reduce(function (total, next) {
  return total + next;
}); // reduce junta os valores do array

console.log('AulaOperacoesEmArray_2:', sum);
var filter = arr.filter(function (item) {
  return item % 2 === 0;
}); // filter filtra os valores, somente por meio de operadores lógicos (booleans):

console.log('AulaOperacoesEmArray_3:', filter);
var find = arr.find(function (item) {
  return item === 4;
}); // find busca os valores, também somente por meio de operadores lógicos (booleans):

console.log('AulaOperacoesEmArray_4:', find); //Arrow Functions

var vet = [1, 3, 4, 6, 12, 16, 18];
var newVet = vet.map(function (item) {
  return item * 2;
});
console.log('AulaArrowFunctions_1:', newVet);

var testArrowFunction = function testArrowFunction() {
  return {
    nome: 'Kamila',
    idade: 22
  };
};

console.log('AulaArrowFunctions_2:', testArrowFunction()); //Valores padrão

function somar(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return a + b; //b = 3: foi definido um valor padrão
}

console.log('AulaValoresPadrao_1:', somar());
console.log('AulaValoresPadrao_2:', somar(1));
console.log('AulaValoresPadrao_3:', somar(1, 5));

var somar2 = function somar2(a, b) {
  return a + b;
};

console.log('AulaValoresPadrao_4:', somar2(2, 5)); //Desestruturação

var user = {
  nome: 'Kamila',
  idade: 22,
  endereco: {
    rua: 'av. das amebas',
    numero: 234,
    cep: '99999-99',
    cidade: 'São Paulo',
    uf: 'SP'
  }
};
console.log('AulaDesestruturacao_1:', user);
var nome = user.nome,
    uf = user.endereco.uf;
console.log('AulaDesestruturacao_2:', nome);
console.log('AulaDesestruturacao_3:', uf); //console.log('AulaDesestruturacao_4:', idade) não foi definida para desestruturação

function mostraDados(_ref) {
  var idade = _ref.idade,
      cep = _ref.endereco.cep;
  console.log('AulaDesestruturacao_4:', idade);
  console.log('AulaDesestruturacao_5:', cep);
}

mostraDados(user); //Operadores rest/spred
//Rest em objetos

var user1 = {
  name: 'Kamila',
  age: 22,
  empresa: 'Acert'
};

var name = user1.name,
    resto = _objectWithoutProperties(user1, ["name"]);

console.log('AulaOperadoresRestSpred_1:', name);
console.log('AulaOperadoresRestSpred_2:', resto); //Rest em vetores

var vetor = [1, 3, 5, 7, 9];
var a = vetor[0],
    b = vetor[1],
    c = vetor.slice(2);
console.log('AulaOperadoresRestSpred_3:', a);
console.log('AulaOperadoresRestSpred_4:', b);
console.log('AulaOperadoresRestSpred_5:', c); //Rest em parâmetros de função

function soma2(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  }); //return params; -> converte parametros de resto em array
}

console.log('AulaOperadoresRestSpred_6:', soma2(1, 2, 3, 5, 7)); //Spread em array

var vet1 = [1, 3, 5];
var vet2 = [2, 4, 6];
var vet3 = [].concat(vet1, vet2);
console.log('AulaOperadoresRestSpred_7:', vet3); //Spread em objeto

var adress = {
  avenue: "av das pampas",
  number: 23
};

var adress1 = _objectSpread(_objectSpread({}, adress), {}, {
  avenue: "av casas"
});

console.log('AulaOperadoresRestSpred_7:', adress1); //Template literals

var user2 = {
  nome1: 'Kamila',
  idade1: 22
};
var nome1 = user2.nome1,
    idade1 = user2.idade1;
console.log('AulaTemplateLiterals_1:', 'Meu nome é ' + nome1 + ' e tenho ' + idade1 + ' anos.');
console.log('AulaTemplateLiterals_2:', "Meu nome \xE9 ".concat(nome1, " e tenho ").concat(idade1, " anos.")); //Object Short Syntax

var user3 = {
  nome1: nome1,
  idade1: idade1,
  empresa1: 'Acert'
};
console.log('AulaObjectShortSyntax_1:', user3);
