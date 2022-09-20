let arrayRate = [];

function getValues() {
  let from = document.querySelector('.from').value;
  let to = document.querySelector('.to').value;
  transfer(from, to);
}

function transfer(from, to) {
  from = Date.parse(from);
  to = Date.parse(to);

  for (let i = from; i < to; i = i + 24 * 60 *60 * 1000){
    date = new Date(i).toISOString().substr(0, 10);  

    let newDate = date.split('-').map(n => {
      return parseInt(n)
    }).join('-')

    getData(newDate);
  }
}

function getData(newDate) {
  fetch(`https://www.nbrb.by/api/exrates/rates/145?ondate=${newDate}&periodicity=0`)
    .then((response) => response.json())
    .then((data) => {
      arrayRate.push(data.Cur_OfficialRate);

      let minValue = Math.min(...arrayRate);
      let maxValue = Math.max(...arrayRate);

      document.querySelector('.result').innerHTML = `
        <p>Минимальный курс: ${minValue}</p>
        <p>Максимальный курс: ${maxValue}</p>
      `;
    });
}