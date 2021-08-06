"use strict";

(function () {
  var prodURL = '/domain' + document.location.search;
  var devURL = 'https://turbo.hypecod.com/domain' + document.location.search;
  sendRequest(prodURL).then(function (data) {
    setProductData(data.products);
  })["catch"](function (e) {
    return console.log(e);
  });
  /**
   *
   * @param {String} url
   * @param {Object} options объект с опциями для запроса
   *
   * По умолчанию GET запрос
   */

  function sendRequest(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return fetch(url, options).then(function (response) {
      return response.json();
    })["catch"](function (e) {
      return console.log(e);
    });
  }

  function setProductData(resData) {
    resData.map(function (product) {
      setProductPrice('.js-new-price', product.price);
      setProductPrice('.js-old-price', product.oldPrice);
      setProductName('.js-product-name', product.name);
      setRecurrentPrice('.js-recurrentPrice', product.recurrentPrice);
      setProductTarif('.js-tariff1', product.tariff[0]);
      setProductTarif('.js-tariff2', product.tariff[1]);
      setProductTarif('.js-tariff3', product.tariff[2]);
      setDescription(product.description);
      setProductId(product.id);
    });
  }
  /**
   *
   * @param {String} selector
   * @param {Number} price
   */


  function setProductPrice(selector, price) {
    document.querySelectorAll(selector).forEach(function (item) {
      return item.textContent = price;
    });
  }
  /**
   *
   * @param {String} selector
   * @param {String} name
   */


  function setProductName(selector, name) {
    document.querySelectorAll(selector).forEach(function (item) {
      return item.textContent = name;
    });
  }
  /**
   *
   * @param {String} selector
   * @param {Number} recurrentPrice
   */


  function setRecurrentPrice(selector, recurrentPrice) {
    document.querySelectorAll(selector).forEach(function (item) {
      return item.textContent = recurrentPrice;
    });
  }
  /**
   *
   * @param {String} description
   */


  function setDescription(description) {
    if (description.includes('<br>')) {
      var mass = description.split('<br>').forEach(function (el) {
        var place = $('.basket__info');
        var div = document.createElement('div');
        div.className = "basket__text";
        div.innerHTML = el;
        place.append(div);
      });
    } else {
      $('.basket__text').text(description);
    }
  }
  /**
   *
   * @param {String} selector
   * @param {Number} price
   */


  function setProductTarif(selector, price) {
    document.querySelectorAll(selector).forEach(function (item) {
      return item.textContent = price;
    });
  }
  /**
   *
   * @param {Number} id
   */


  function setProductId(id) {
    document.getElementById('js-product-id').value = id;
  }
})();