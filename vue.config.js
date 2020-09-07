const SellData = require('./mock/data.json');
const Seller = SellData.seller;
const Goods = SellData.goods;
const Ratings = SellData.ratings;

module.exports = {
  devServer: {
    port: 9000,
    before: function(app, server, compiler) {
      app.get('/api/seller', function(req, res) {
        res.json({
          data: Seller
        });
      });
      app.get('/api/goods', function(req, res) {
        res.json({
          data: Goods
        });
      });
      app.get('/api/ratings', function(req, res) {
        res.json({
          data: Ratings
        });
      });
    }
  }
}
