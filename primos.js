function buscarPrimos(number) {
  var n = 1;
  primelist = "";
  search: while (n<number) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    // found a prime!
    primelist += " " + n;
  }
  return primelist;
}

self.onmessage = function(event) {
  console.log("He recibido " + event.data);
  salida = buscarPrimos(event.data); 
  console.log("Devuelvo " + salida);
  self.postMessage(salida)
}