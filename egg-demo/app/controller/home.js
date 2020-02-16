'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
   this.ctx.body = this.ctx.isIOS ? "操作系统是iOS":"操作系统不是iOS"
  }
}

module.exports = HomeController;
