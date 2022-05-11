function recursiva(max) {
   console.log(max);
   if (max === 5) return; // Se for 10, não retorna nada
   max++;
   recursiva(max);
}

recursiva(0);

console.log('%%%%%%%%%%%');

recursiva2 = (num) => {
   console.log(num);
   if (num > 10) return;
   num *= 2;
   recursiva2(num);
}

recursiva2(1);