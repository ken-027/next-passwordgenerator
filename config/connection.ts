const { Sequelize } = require('sequelize')
const colors = require('colors')

import {
  DB_DATABASE,
  DB_HOST,
  DB_USERNAME,
  DB_PASSWORD,
  DB_PORT,
} from './index'

export const connection = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'postgres',
})

export const testConnection = async () => {
  try {
    await connection.authenticate()
    console.log(colors.green('Postgress successfully connected!'))
  } catch (err: any) {
    console.error(colors.red('Unable to connect to postgres!'))
  }
}



export default connection
