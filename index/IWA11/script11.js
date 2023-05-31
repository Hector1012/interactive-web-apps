// script.js

const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

const biscuit1 = order1.querySelector('.biscuits .count');
const donuts1 = order1.querySelector('.donuts .count');
const pancakes1 = order1.querySelector('.pancakes .count');
const status1 = order1.querySelector('.status dd');

const biscuit2 = order2.querySelector('.biscuits .count');
const donuts2 = order2.querySelector('.donuts .count');
const pancakes2 = order2.querySelector('.pancakes .count');
const status2 = order2.querySelector('.status dd');

const biscuit3 = order3.querySelector('.biscuits .count');
const donust3 = order3.querySelector('.donuts .count');
const pancakes3 = order3.querySelector('.pancakes .count');
const status3 = order3.querySelector('.status dd');

biscuit1.textContent = order1.dataset.biscuits;
donuts1.textContent = order1.dataset.donuts;
pancakes1.textContent = order1.dataset.pancakes;
status1.textContent = order1.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

biscuit2.textContent = order2.dataset.biscuits;
donuts2.textContent = order2.dataset.donuts;
pancakes2.textContent = order2.dataset.pancakes;
status2.textContent = order2.dataset.delivered === 'true' ? 'Delivered' : 'Pending';

biscuit3.textContent = order1.dataset.biscuits;
donust3.textContent = order1.dataset.donuts;
pancakes3.textContent = order1.dataset.pancakes;
status3.textContent = order1.dataset.delivered === 'true' ? 'Delivered' : 'Pending';