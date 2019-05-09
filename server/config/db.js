import '../../env'
import Sequelize from 'sequelize'

// const Todolist = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL || 'localhost'}/todolist`, {
//   define: {
//     timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
//   }
// })
const Todolist = new Sequelize('community', 'root', '12345678', {
  host: '106.14.66.94',
  dialect: 'mysql',
  define: {
    timestamps: false // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
  }
})

export default {
  Todolist // 将Todolist暴露出接口方便Model调用
}
