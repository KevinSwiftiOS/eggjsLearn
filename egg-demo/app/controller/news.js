const Controller = require("egg").Controller;
class NewsController extends Controller{
    async list() {
        const dataList = {
            list:[
                {id:1,title:"this is"},
                {id:2,title:"this is"}
            ]
        };
        await this.ctx.render("news/list.tpl",dataList);
    }
}