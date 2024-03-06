class LaserComponent extends Component{
    constructor(){
        super();
    }
    update(){
        this.transform.y-=Time.deltaTime * 1000;

        if(this.transform.y < 100){
            GameObject.destroy(this.parent);
        }

    }
}

window.LaserComponent = LaserComponent;
export default LaserComponent;