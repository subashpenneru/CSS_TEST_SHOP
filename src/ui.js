class UI {
  constructor() {
    this.items = document.querySelector('.cart__items');
    this.paginator = document.querySelector('.pagination');
  }

  showItems(items) {
    let output = '';

    items.forEach((el) => {
      output += `
        <div class="cart__item">
          <img class="cart__item-img" src=${el.img} alt="chair" />
          <h3 class="cart__title">${el.name}</h3>
          <div class="cart__info">
            <p class="cart__info-title">${el['shop-item']}</p>
            <p>$${el.price}</p>
          </div>
          <div class="cart__footer">
            <div class="cart__rating">
              ${this.showRating(el.rating)}
            </div>
            <div class="cart__add">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
        </div>`;
    });

    this.items.innerHTML = output;
  }

  showRating(length) {
    let rating = '';
    for (let i = 1; i <= length; i++) {
      rating += `<i class="fas fa-star"></i>`;
    }

    for (let i = 0; i < 5 - length; i++) {
      rating += `<i class="far fa-star"></i>`;
    }

    return rating;
  }

  showPaginatior(totalPages, cur_page, per_page) {
    let start_page = 1;
    let last_page = 3;

    if (totalPages <= last_page) {
      last_page = totalPages;
    }

    if (cur_page > last_page) {
      start_page = cur_page + start_page - last_page;
      last_page = cur_page;
    }

    if (cur_page < start_page) {
      last_page = cur_page - start_page + last_page;
      start_page = cur_page;
    }

    let left_arr = '';
    let right_arr = '';
    let pagination = '';

    if (cur_page > 1) {
      left_arr = `<div class="pagination__options" onclick="onPagination('prev')">
      <i class="fa fa-chevron-left"></i>
    </div>`;
    }

    if (cur_page < totalPages) {
      right_arr = `<div class="pagination__options" onclick="onPagination('next')">
      <i class="fa fa-chevron-right"></i>
    </div>`;
    }

    if (totalPages > 0) {
      pagination += `<div class="pagination__items">`;
      for (let i = start_page; i <= last_page; i++) {
        pagination += `<span class="pagination__item ${
          cur_page === i ? 'active' : null
        }" onclick="onPagination(${i})">${i}</span>`;
      }
      pagination += `</div>`;
    }

    this.paginator.innerHTML = left_arr + pagination + right_arr;
  }
}

export const ui = new UI();
