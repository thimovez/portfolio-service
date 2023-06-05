'use strict';
const ApiError = require('../exceptions/api.error');
const { Portfolio, Image } = require('../models');

class PortfolioService {
  async createPortfolio(id, images, args) {
    const { name, description } = args;

    if (typeof name === 'undefined') {
      throw ApiError.BadRequest('field name cannot be empty');
    }

    const portfolioData = await Portfolio.create({
      name, description, UserId: id
    });

    const imagesData = await this.UploadImages(portfolioData.id, images, args);

    return {
      portfolioData,
      imagesData
    };
  }

  async UploadImagesByID(id, images, user, args) {
    if (typeof id === 'undefined') {
      throw ApiError.BadRequest('missed portfoio id');
    }

    const verifyUser = await this.VerifyUserPortfolio(id, user.id);

    const imagesData = await this.UploadImages(id, images, args);

    return {
      imagesData,
      verifyUser
    };
  }

  async UploadImages(id, images, args) {
    const { imgname, imgdescr, imgcomment } = args;
    const imagesData = {};

    for (let i = 0; i < images.length; i++) {
      const image = await Image.create({
        name: imgname,
        description: imgdescr,
        comments: imgcomment,
        PortfolioId: id,
        path: images[i].path
      });

      imagesData[i] = image;
    }

    return imagesData;
  }

  async DeletePortfolio(id, user) {
    if (typeof id === 'undefined') {
      throw ApiError.BadRequest('missed portfolio id');
    }

    await this.VerifyUserPortfolio(id, user.id);

    const portfoioData = await Portfolio.destroy({ where: { id } });

    return portfoioData;
  }

  async VerifyUserPortfolio(id, userId) {
    const verifyUser = await Portfolio.findOne({
      where: {
        id,
        UserId: userId
      }
    });

    if (!verifyUser) {
      throw ApiError.ForbiddenError('forbidden');
    }

    return verifyUser;
  }

  async DeleteImage(id, user) {
    if (typeof id === 'undefined') {
      throw ApiError.BadRequest('missed image id');
    }

    const image = await Image.findOne({
      where: { id }
    });

    if (!image.PortfolioId) {
      throw ApiError.BadRequest('image does not exist');
    }

    await this.VerifyUserPortfolio(image.PortfolioId, user.id);

    const imageData = await Image.destroy({ where: { id } });

    return imageData;
  }

  async GetImage() {
    const image = await Portfolio.findAll({
      order: [['createdAt', 'DESC']],
      include: [
        {
          model: Image
        }
      ]
    });

    return image;
  }
}

module.exports = new PortfolioService();
