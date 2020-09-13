import './sass/index.scss';
import { ui } from './ui';

document.addEventListener('DOMContentLoaded', getItems);

var currentPage = 1;
var totalItems = 0;
var totalPages = 0;
var cartItems = [];
var currentItems = [];
var per_page = 3;

function getItems() {
  fetch('http://localhost:3000/items')
    .then((data) => data.json())
    .then((data) => {
      cartItems = data;
      totalItems = data.length;
      totalPages = Math.ceil(data.length / per_page);
      showCartItems(cartItems);
    })
    .catch((err) => console.log(err));
}

function showCartItems(data = []) {
  currentItems = cartItems.slice(
    (currentPage - 1) * per_page,
    currentPage * per_page
  );

  ui.showItems(currentItems);

  ui.showPaginatior(totalPages, currentPage, per_page);
}

const onPagination = (_page) => {
  if (_page === 'prev') {
    if (currentPage > 1 && currentPage <= totalPages) {
      currentPage -= 1;
    }
  } else if (_page === 'next') {
    if (currentPage < totalPages) {
      currentPage += 1;
    }
  } else {
    currentPage = _page;
  }

  showCartItems(cartItems);
};

window.onPagination = onPagination;
