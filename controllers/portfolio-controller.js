'use strict';
const portfolioService = require('../service/portfolio-service');

class PortfolioController {
  async createPortfolio(req, res, next) {
    try {
      const name = req.body.name;
      const descr = req.body.description || '';
      const image = req.file || '';
      const { id } = req.user;

      const p = await portfolioService.createPortfolio(name, descr, image, id);

      return res.json(p);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PortfolioController();
