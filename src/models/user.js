const { DataTypes, Model } = require("sequelize");
const db = require("../config/database");

class User extends Model {
    static id;
    static name;
    static lastname;
    static email;
    static phone;
    static password;
    static token;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },        
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, 
    {
        sequelize: db,
        modelName: "User",
        timestamps: false,
    });

    User.prototype.toJSON = function () {
        const { password, ...user } = this.get();
        delete user.password; // Delete property password
        return user;
    }

module.exports = User;
