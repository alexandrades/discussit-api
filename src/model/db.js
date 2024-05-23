import dbConfig from "../../db.config.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
    "postgres://discussit_user:6OTwWJowguT8tqMHkrCUvhjeaZiD3F11@dpg-cp79n5ed3nmc73bo2v90-a/discussit",
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize
