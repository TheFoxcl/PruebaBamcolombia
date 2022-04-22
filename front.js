

const selector1 = document.querySelector(".TdV");
const selector2 = document.querySelector(".selector2");
const displayTablas = document.querySelector(".displayTablas")

selector1.addEventListener("change",()=>{
    const selector2 = document.querySelector(".selector2");
    selector2.style.display = 'block';
})
selector2.addEventListener("change",()=>{
    displayTablas.style.display = 'block';

const baseTabla1 = [
    ['1','','',''],
    ['2','','',''],
    ['3','','',''],
    ['4','','',''],
    ['5','','',''],
    ['6','','',''],
    ['7','','',''],
];

const baseTabla2 = [
    ['1','','',''],
    ['2','','',''],
    ['3','','',''],
    ['4','','',''],
    ['5','','',''],
    ['6','','',''],
    ['7','','',''],
];

const tabla1 = document.querySelector('.tabla1');
const tabla2 = document.querySelector('.tabla2');

const hot1 = new Handsontable(tabla1, {
    data: baseTabla1,
    colHeaders: ['Rango','Límite inferior','Límite Superior','Prob %'],
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    cells(row,col) {
        if(col==0)
        return{
            readOnly: true,
        };
    },
   width: "100%"
})

const hot2 = new Handsontable(tabla2, {
    data: baseTabla2,
    colHeaders: ['Rango','Límite inferior','Límite Superior','Prob %'],
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    cells(row,col) {
        if(col==0)
        return{
            readOnly: true,
        };
    },
   width: "100%",
   
})
})
