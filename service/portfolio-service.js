'use strict';
const ApiError = require('../exceptions/api.error');
const { Portfolio, Image } = require('../models');

class PortfolioService {
  async createPortfolio(name, descr, image, id) {
    if (typeof name === 'undefined') {
      throw ApiError.BadRequest('field name cannot be empty');
    }

    const imageData = await Image.create({
      
    });

    const portfolioData = await Portfolio.create({
      name, description: descr, images: image.path, UserId: id
    });

    return portfolioData;
  }
}

module.exports = new PortfolioService();
