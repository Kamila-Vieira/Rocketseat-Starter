"use strict";

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

mostraDados(user);
