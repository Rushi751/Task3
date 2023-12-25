fetch('https://restcountries.com/v3.1/all')
   .then(response => response.json())
   .then(data => {
  
    data.forEach(country => {
      if (country.flags) {
        console.log(country.flags.svg);
      }
    });
  })
  .catch(error => console.error('Error fetching data:', error));
