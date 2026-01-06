const student = {
    name: "Manoj",
    age: 21,
    eng: 98,
    nepali: 56,
    maths: 49,
    getAvg() {
        let avg = (this.eng + this.nepali + this.maths) / 3;
        console.log(`${this.name} got avg marks=${avg}`)
    }
}
