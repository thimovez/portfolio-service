'use strict';
const ApiError = require('../exceptions/api.error');
const { Portfolio } = require('../models');

class PortfolioService {
  async createPortfolio(name, descr, image, id) {
    if (typeof name === 'undefined') {
      throw ApiError.BadRequest('field name cannot be empty');
    }

    const portfolioData = await Portfolio.create({
      name, description: descr, images: image, UserId: id
    });

    return portfolioData;
  }
}

module.exports = new PortfolioService();
