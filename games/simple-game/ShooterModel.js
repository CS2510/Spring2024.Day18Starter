class GUIDObject {
    static debug = true;
    static nextDebug = 0
    constructor() {
        if (GUIDObject.debug) {
            this.GUID = GUIDObject.nextDebug++;
        }
        else {
            this.GUID = crypto.randomUUID();
        }
    }
}

class MOB extends GUIDObject {
    constructor(x, y, type) {
        super();
        [this.death, this.x, this.y, this.type] = [false, x, y, type];
    }
}


class ShooterModel {
    mobs = []
    constructor() {
        this.create(new MOB(200, 0, "Simple"))
        this.create(new MOB(300, 200, "Advanced"))
    }
    create(mob) {
        this.mobs.push(mob);
    }
    retrieve() {
        return this.mobs;
    }
    update(mob) {
        Object.assign(this.mobs.find(m => m.GUID == mob.GUID), mob)
    }
    delete(mob) {
        this.mobs = this.mobs.filter(m => m.GUID != mob.GUID)
    }
}

class ShooterModelEvents extends ShooterModel {
    create(mob) {
        super.create(mob);
        EventSystem.fireEvent({ origin: this, dest: mob, name: "createMOB" })
    }
    update(mob) {
        super.update(mob);
        EventSystem.fireEvent({ origin: this, dest: mob, name: "updateMOB" })
    }
    delete(mob) {
        super.delete(mob);
        EventSystem.fireEvent({ origin: this, dest: mob, name: "deleteMOB" })
    }
}

window.ShooterModel = ShooterModel;
export default ShooterModel;