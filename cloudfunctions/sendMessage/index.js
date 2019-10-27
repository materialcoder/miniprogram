// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const {OPENID} = cloud.getWXContext()
  const result = await cloud.openapi.templateMessage.send({
    touser: OPENID,
    page: `/pages/blog-comment/blog-comment?blogId=${event.blogId}`,
    data: {
      keyword2: {
        value: '评价完成',
      },
      keyword1: {
        value: event.content
      }
    },
    templateId: 'OMSA8XQcYe_9T3xfJp0zgujhHB1-VCuSKNFZmzYmrcU',
    formId: event.formId
  })
  return result
}