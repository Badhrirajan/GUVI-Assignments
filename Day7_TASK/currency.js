fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((curr) => printData(filterData(curr)))
        .catch((error) => console.log(error));

      function filterData(curr) {
        let filterecurr = [];
        if (curr.length > 0) {
          filteredcurr = curr.filter((curr) => curr?.currencies?.USD);
        }
        return filteredcurr;
      }

      function printData(curr) {
        console.log(curr.length);
      }