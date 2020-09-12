class UI {
  constructor() {
    this.items = document.querySelector('.cart__items');
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
            <p>${el.price}</p>
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
}

export const ui = new UI();
