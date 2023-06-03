'use strict';
const portfolioService = require('../service/portfolio-service');

class PortfolioController {
  async createPortfolio(req, res, next) {
    try {
      const { id } = req.user;
      const images = req.files || '';

      const p = await portfolioService.createPortfolio(id, images, req.body);

      return res.json(p);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PortfolioController();
