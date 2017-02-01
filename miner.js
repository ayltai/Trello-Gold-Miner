function mineGold() {
  $('.product-promo-button-overlay').remove();
  $('.board-backgrounds-list').removeClass('disabled');
  $('.power-up-item').removeClass('needs-upgrade');
  $('.sticker-select').removeClass('disabled');
}

setInterval(mineGold, 2000);
