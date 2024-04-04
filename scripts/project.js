document.getElementById("change-color").addEventListener("click", function() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });





  const section = document.querySelector('section');

  const jesusChristItems = ['Is the Son of God who atoned for our sins and resurrected so we all can resurrect"', 'Savior', 'Redeemer'];
const jesusChristList = document.getElementById('Jesus-Christ');

jesusChristItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    jesusChristList.appendChild(li);
});

const templeItems = ['House of God', 'A place where ordinances are performed', 'Sacred Space'];
const templeList = document.getElementById('temple');

templeItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    templeList.appendChild(li);
});

const prophetDetails = {
    'Moses': 'Led Israelites out of Egypt',
    'Isaiah': 'Foretold coming of Messiah',
    'Jeremiah': 'Prophesied destruction of Jerusalem',
    'Joseph Smith': 'Restored the gospel of Jesus Chrst'
};

const prophetDescriptionList = document.getElementById('prophet');

for (const [key, value] of Object.entries(prophetDetails)) {
    const dt = document.createElement('dt');
    dt.textContent = key;
    
    const dd = document.createElement('dd');
    dd.textContent = value;
    
    prophetDescriptionList.appendChild(dt);
    prophetDescriptionList.appendChild(dd);
}
  