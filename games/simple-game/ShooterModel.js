class ShooterModel{
    mobs = []
    constructor(){
        this.mobs.push(
            {
                GUID: Math.random(),
                x : 200,
                y : 0,
                type : "Simple",
                death:false,
            },
            {
                GUID:Math.random(),
                x : 300,
                y : 200,
                type : "Advanced",
                death: false
            },

        )
    }
}

window.ShooterModel = ShooterModel;
export default ShooterModel;