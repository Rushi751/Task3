let obj1 = { name: "Rushi", age: 5 }; 
    let obj2 = { age: 5, name: "Rushi" };

    function compareJSON(obj1, obj2) {
  
     let jsonStr1 = JSON.stringify(obj1);
     let jsonStr2 = JSON.stringify(obj2);

  
     let sortedStr1 = jsonStr1.split('').sort().join('');
     let sortedStr2 = jsonStr2.split('').sort().join('');

  
      return sortedStr1 === sortedStr2;
}

     let Equal = compareJSON(obj1, obj2);
     console.log(Equal);