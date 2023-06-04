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
      const user = req.user;
      const id = req.params.id;
      const images = req.files || '';
      const args = req.body;

      const imgData = await portfolioService.UploadImagesByID(id, images, user, args);

      return res.json(imgData);
    } catch (e) {
      next(e);
    }
  }

  async DeletePortfolio(req, res, next) {
    try {
      const id = req.params.id;

      const deleteResult = await portfolioService.DeletePortfolio(id);

      return res.json(deleteResult);
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new PortfolioController();
