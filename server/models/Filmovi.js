module.exports = (sequelize, DataTypes) =>{

    const Filmovi = sequelize.define("Filmovi",{
        naslov: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        opis:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        vrijemePrikaza:
        {
            type: DataTypes.STRING, 
            allowNull: false
        },
        slikaURL:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    },{
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true
    });
    return Filmovi;
}