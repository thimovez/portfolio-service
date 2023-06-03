'use strict';
const portfolioService = require('../service/portfolio-service');

class PortfolioController {
  async createPortfolio(req, res, next) {
    try {
      const { id } = req.user;
      const images = req.files || '';
      const args = req.body;

      const p = await portfolioService.createPortfolio(id, images, args);

      return res.json(p);
    } catch (e) {
      next(e);
    }
  }

  async UploadImagesByID(req, res, next) {
    try {
      const id = req.params.id;
      const images = req.files || '';
      const args = req.body;

      const imgData = await portfolioService.UploadImagesByID(id, images, args);

      return res.json(imgData);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PortfolioController();
