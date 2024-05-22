import dbConfig from "../../db.config.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
    dbConfig.DATABASE,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: "postgresql",
        define: {
            timestamps: false
        }
    }
)

export default sequelize