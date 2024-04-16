const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];


const freelancerDisplayArry = [];


//randomly select random items in freelancers arry and add into freelancerDisplayArray
function updateFreelancerDisplayingArry () {
    const randomNum = Math.floor(Math.random() * freelancers.length);
    for (i = 0; i <= randomNum; i++) {
        const randomIndex = Math.floor(Math.random() * freelancers.length);
        const randomFreelancer = freelancers[randomIndex];
        freelancerDisplayArry.push(randomFreelancer)
    }
}

function displayFreelancers() {
    const freelancersDiv = document.getElementById("freelancers");
    freelancersDiv.innerHTML = "";
    freelancerDisplayArry.forEach((freelancer, index) => {
      const div = document.createElement("div");
      div.textContent = `${freelancer.name} ${freelancer.price} ${freelancer.occupation}`;
      freelancersDiv.appendChild(div);
    });
  }

function calculateAveragePrice() {
    let totalPrice = freelancerDisplayArry.reduce((sum, freelancer) => 
    sum + freelancer.price, 0);

    let averagePrice = totalPrice / freelancerDisplayArry.length;
    document.getElementById(
        `averageStartingPrice`
      ).textContent = `${averagePrice.toFixed(2)}`;
}

setInterval(() => {
    updateFreelancerDisplayingArry();
    displayFreelancers();
    calculateAveragePrice();
}, 1000); 




