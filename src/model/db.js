import dbConfig from "../../db.config.js";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
    dbConfig.HOST,
    {
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
)

export default sequelize
