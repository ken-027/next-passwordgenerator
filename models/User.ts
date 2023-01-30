// import connection from '@/config/connection'
import connection from '../config/connection'
import { DataTypes, Model, Sequelize } from 'sequelize'

const User = connection.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: DataTypes.STRING,
  },
  {
    tableName: 'users',
  },
)

;(async () => {
  await connection.sync()
})()

export default User
