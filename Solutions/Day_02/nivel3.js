console.log('El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor.'.match(/amor/g).length);
console.log('No puedes terminar una oración con porque porque porque es una conjunción'.match(/porque/g).length);
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence.replace(/%|\$|@|&|#|;|!/g,''));

const text = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'.match(/\d+/g);
console.log(text)
console.log(parseInt(text[0])*12+ parseInt(text[1])+ parseInt(text[2])*12);