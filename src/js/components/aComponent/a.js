class A {
    constructor(id, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;

        this.create();
    }
    create() {
        console.log('A create called');
        let wrap = document.getElementById(this.id);
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;

        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.font = "40px Arial";
        ctx.fillStyle = gradient;
        ctx.fillText("Hello World!!!", 10, canvas.height / 2);

        wrap.appendChild(canvas);
    }
}

export default A;
