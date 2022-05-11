// Métodos se comportarem diferente em classes filhas de um mesmo pai caracterizam um polimorfismo
// Superclass
function Conta(agencia, conta, saldo) {
   this.agencia = agencia;
   this.conta = conta;
   this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
   if(this.saldo < valor) {
      console.log(`Saldo insuficiente: R$${this.saldo}`);
      return;
   }

   this.saldo -= valor;
   this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
   this.saldo += valor;
   this.verSaldo();
};

Conta.prototype.verSaldo = function(valor) {
   console.log(
      `Ag/c: ${this.agencia}/${this.conta} | ` +
      `Saldo: R$${this.saldo.toFixed(2)}`
   );
};

const conta1 = new Conta(91, 20005, 500);
console.log(conta1); // Conta { agencia: 91, conta: 20005, saldo: 500 }
conta1.depositar(45); // Ag/c: 91/20005 | Saldo: R$545.00
conta1.sacar(85); // Ag/c: 91/20005 | Saldo: R$460.00
conta1.sacar(482); //Saldo insuficiente: R$460

console.log('----------------');

function ContaCorrente(agencia, conta, saldo, limite) {
   Conta.call(this, agencia, conta, saldo);
   this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
   if(valor > (this.saldo + this.limite)) {
      console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
      return;
   }

   this.saldo -= valor;
   this.verSaldo();
};

const cc = new ContaCorrente(12, 4002, 80, 200);

console.log(cc); // ContaCorrente { agencia: 12, conta: 4002, saldo: 80, limite: 200 }
cc.depositar(20);
cc.sacar(110);
cc.sacar(210);

console.log('----------------');

function ContaPoupança(agencia, conta, saldo) {
   Conta.call(this, agencia, conta, saldo);
}

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;

const cp = new ContaPoupança(55, 717, 50);

console.log(cp); // ContaPoupança { agencia: 55, conta: 717, saldo: 50 }
cp.verSaldo(); // Ag/c: 55/717 | Saldo: R$50.00
cp.depositar(10); // Ag/c: 55/717 | Saldo: R$60.00
cp.sacar(110); // Saldo insuficiente: R$60
