'use strict';
const portfolioService = require('../service/portfolio-service');


class PortfolioController {
  async createPortfolio(res, req, next) {
    try {
      const name = req.params.name;
      const description = req.params.description || '';
      const image = req.params.images || '';

      const p = await portfolioService.createPortfolio(name, description, image);

      res.json(p);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PortfolioController();
