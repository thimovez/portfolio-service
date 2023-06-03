'use strict';
const ApiError = require('../exceptions/api.error');
const { Portfolio } = require('../models');

class PortfolioService {
  async createPortfolio(name, description, image) {
    if (typeof name === 'undefined') {
      throw new ApiError.BadRequest('field name cannot be empty');
    }

    const portfolioData = await Portfolio.create({
      name, description, images: image
    });

    return portfolioData;
  }
}

module.exports = new PortfolioService();
