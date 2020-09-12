import './sass/index.scss';

// import { http } from './http';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getItems);

function getItems() {
  fetch('http://localhost:3000/items')
    .then((data) => data.json())
    .then((res) => ui.showItems(res))
    .catch((err) => console.log(err));
}
