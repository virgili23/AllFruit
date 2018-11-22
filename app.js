// Scripts for Different Buy button collections




// ION shirts

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'in-our-nature.myshopify.com',
      storefrontAccessToken: '3b3b0820b548a805ba154309f96df4bf',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 67025862771,
        node: document.getElementById('collection-component-abe49e42a06'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
"product": {
"buttonDestination": "modal",
"variantId": "all",
"contents": {
  "imgWithCarousel": false,
  "variantTitle": false,
  "options": false,
  "description": false,
  "buttonWithQuantity": false,
  "quantity": false
},
"text": {
  "button": "VIEW PRODUCT"
},
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "calc(25% - 20px)",
      "margin-left": "20px",
      "margin-bottom": "50px",
      "width": "calc(25% - 20px)"
    },
    "imgWrapper": {
      "position": "relative",
      "height": "0",
      "padding-top": "calc(75% + 15px)"
    },
    "img": {
      "height": "calc(100% - 15px)",
      "position": "absolute",
      "left": "0",
      "right": "0",
      "top": "0"
    }
  },
  // View Product


  "button": {
    "background-color": "#fff;",
    "color": "black",
    "border": "3px solid black",
    ":hover": {
      "background-color": "#000000",
      "color": "#fff"
    },
    ":focus": {
      "background-color": "#fff",
      "color": "black"
    }
  },
  "description": {
    "font-size": "15px"
  }
}
},
"cart": {
"contents": {
  "button": true
},
"popup": false,
"styles": {
  "cart": {
    "background-color": "#fcf7f7"
  },
  "button": {
    "background-color": "#000000",
    ":hover": {
      "background-color": "#000000"
    },
    ":focus": {
      "background-color": "#000000"
    }
  },
  "footer": {
    "background-color": "#fcf7f7"
  }
}
},
"modalProduct": {
"contents": {
  "img": false,
  "imgWithCarousel": true,
  "variantTitle": false,
  "buttonWithQuantity": false,
  "quantity": false
},
"styles": {
  "product": {
    "@media (min-width: 601px)": {
      "max-width": "100%",
      "margin-left": "0px",
      "margin-bottom": "0px"
    }
  },
  // Add to Cart Button
  "button": {
    // "background-color": "#000000",
    "background-color": "#fff;",
    "color": "black",
    "border": "3px solid black",
    ":hover": {
      "background-color": "#000000",
      "color": "#fff"
    },
    ":focus": {
      "background-color": "#000000",
      "color": "#fff"
    }
  },
  "title": {
    "font-size": "28px"
  },
  "description": {
    "font-size": "15px"
  }
}
},
"toggle": {
"styles": {
  "toggle": {
    "background-color": "#000000",
    ":hover": {
      "background-color": "#000000"
    },
    ":focus": {
      "background-color": "#000000"
    }
  }
}
},
"productSet": {
"styles": {
  "products": {
    "@media (min-width: 601px)": {
      "margin-left": "-20px"
    }
  }
}
}
}
      });
    });
  }
})();















