const student = {
    name: "Manoj",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        return this.name;
    },
    getMarks:()=>{
        console.log(this); //parent scope
        return this.marks;

    },
    getInfo1:function (){
        setTimeout(()=>{
            console.log(this);
        },2000);
    },
   getInfo2:function (){
        setTimeout(function(){
            console.log(this);
        },2000);
    },
};
