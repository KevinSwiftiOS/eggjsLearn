const Service = require('egg').Service;
class NewsService extends Service{
    async list(page) {//得到传来的页码参数
        // 读取配置拿到API接口
        const { serverUrl } = this.config.news;
    
        //使用内置的curl发出请求拿回数据
        //结构出来result，在这里给他改名叫做idList
        const { result: idList } = await this.ctx.curl(`${serverUrl}/topstories.json`, {
          data: {//携带信息
            orderBy: '"$key"',//根据什么排序
            startAt: `${page}`,//起始页
            endAt: `${page+1}`,//结束页
          },
          dataType: 'json',//需要返回的数据类型
        });
    
        // 获取详细信息
        const newsList = await Promise.all(
            //获取对象的所有键名
          Object.keys(idList).map(key => {
            const url = `${serverUrl}/item/${idList[key]}.json`;
            return this.ctx.curl(url, { dataType: 'json' });//再去请求每一个的详细信息
          })
        );
        return newsList.map(res => res.data);//把每一条的数据的data返回出去。
      }
    }
    module.exports = NewsService;