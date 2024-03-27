class CollisionsGeometric{
    static isRectangle2Rectangle2Collision(one, two) {
        if (
            one.centerX - one.width/ 2 >   two.centerX + two.width / 2 ||
            one.centerX + one.width/ 2 <   two.centerX - two.width / 2 ||
            one.centerY - one.height / 2 > two.centerY + two.height / 2 ||
            one.centerY + one.height / 2 < two.centerY - two.height / 2
        )
            return false;
        return true;
    }
    static isVector2Rectangle2Collision(vector2, rectangle2) {
        if (
            vector2.x > rectangle2.centerX - rectangle2.width / 2 &&
            vector2.x < rectangle2.centerX + rectangle2.width / 2 &&
            vector2.y > rectangle2.centerY - rectangle2.height / 2 &&
            vector2.y < rectangle2.centerY + rectangle2.height / 2
        )
            return true;
        return false;
    }
    static isVector2Circle2Collision(vector2, circle2) {
        let distance = Math.sqrt((vector2.x - circle2.centerX) ** 2 + (vector2.y - circle2.centerY) ** 2);
        return distance < circle2.radius
    }
    static isCircle2Circle2Collision(one, two) {
        let distance = Math.sqrt((one.centerX - two.centerX) ** 2 + (one.centerY - two.centerY) ** 2)
        if (one.radius + two.radius > distance)
            return true;
        return false;
    }
    static isCircle2Line2Collision(circle2, line2){
      return false;
    }
    static isCircle2Rectangle2Collision(circle2, line2){
      return false;
    }

}

console.assert(CollisionsGeometric.isRectangle2Rectangle2Collision(new Rectangle2(0, 0, 10, 10), new Rectangle2(5,0,10,10)))
console.assert(!CollisionsGeometric.isRectangle2Rectangle2Collision(new Rectangle2(0, 0, 10, 10), new Rectangle2(25,0,10,10)))

console.assert(CollisionsGeometric.isVector2Rectangle2Collision(new Vector2(0,0), new Rectangle2(0, 0, 10, 10)))
console.assert(!CollisionsGeometric.isVector2Rectangle2Collision(new Vector2(20,0), new Rectangle2(0, 0, 10, 10)))

console.assert(CollisionsGeometric.isVector2Circle2Collision(new Vector2(0,0), new Circle2(0, 0, 10)))
console.assert(!CollisionsGeometric.isVector2Circle2Collision(new Vector2(20,0), new Circle2(0, 0, 10)))

console.assert(CollisionsGeometric.isCircle2Circle2Collision(new Circle2(0,0,10), new Circle2(4,0,10)))
console.assert(!CollisionsGeometric.isCircle2Circle2Collision(new Circle2(0,0,10), new Circle2(25,0,10)))

// Advanced collision detection

//Circles and Lines
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(0,0,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(1,1,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(2,2,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(5,5,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(8,8,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(9,9,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(10,10,1), new Line2(new Vector2(0,0), new Vector2(10,10))))

console.assert(!CollisionsGeometric.isCircle2Line2Collision(new Circle2(12,12,1), new Line2(new Vector2(0,0), new Vector2(10,10))))

console.assert(!CollisionsGeometric.isCircle2Line2Collision(new Circle2(6,3,1), new Line2(new Vector2(0,0), new Vector2(10,10))))
console.assert(CollisionsGeometric.isCircle2Line2Collision(new Circle2(5,4,1), new Line2(new Vector2(0,0), new Vector2(10,10))))

window.CollisionsGeometric = CollisionsGeometric
