'use strict';
const ApiError = require('../exceptions/api.error');
const { Portfolio, Image } = require('../models');

class PortfolioService {
  async createPortfolio(id, images, ...args) {
    const {
      name,
      description = '',
      imgname = '',
      imgdescr = '',
      imgcomment = ''
    } = args[0];

    if (typeof name === 'undefined') {
      throw ApiError.BadRequest('field name cannot be empty');
    }

    const portfolioData = await Portfolio.create({
      name, description, UserId: id
    });

    for (let i = 0; i < images.length; i++) {
      await Image.create({
        name: imgname,
        description: imgdescr,
        comments: imgcomment,
        PortfolioId: portfolioData.id,
        path: images[i].path
      });
    }

    return portfolioData;
  }
}

module.exports = new PortfolioService();
