function imprimirPares() {
    let nums = { dos: 2, seis: 6, ocho: 8, tres:3, cien: 100, sesenta: 60 };
    for (let key in nums) {
      if (nums[key] % 2 === 0) {
        console.log(`Propiedad: ${key}: ${nums[key]}`);
      }
    }
  }

  function recorrerArreglo() {
    let arr =  { numeros: [45, 78, 22, 89, 8] }
    for (let key in arr) {
        for(let i=0;i<arr[key].length;i++){
            console.log("Valor: "+i+": "+arr[key][i]);
        }
    }
  }
  function recorrerArreglo1() {
    let arr =  { 3: "tres", 60: "sesenta", 10: "diez" }
    for (let key in arr) {
        for(let i=0;i<arr[key].length;i++){
            if(arr[key]==60){
                
            }
        }
    }
  }

   