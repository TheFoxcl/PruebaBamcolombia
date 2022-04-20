

const selector1 = document.querySelector(".TdV");
const selector2 = document.querySelector(".selector2");

selector1.addEventListener("change",()=>{
    const selector2 = document.querySelector(".selector2");
    selector2.style.display = 'block';
})

const baseTabla = [
    ['1','','',''],
    ['2','','',''],
    ['3','','',''],
    ['4','','',''],
    ['5','','',''],
    ['6','','',''],
    ['7','','',''],
];

const tabla1 = document.querySelector('.tabla1');

const hot = new Handsontable(tabla1, {
    data: baseTabla,
    colHeaders: ['Rango','Limite inferior','Limite Superior','Prob %'],
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    cells(row,col) {
        if(col==0 || col==4 || row==7)
        return{
            readOnly: true,
        };
    },
    afterCreateRow: function(index,numberOfRow){
        baseTabla.splice(index,numberOfRow)
    },
    width: "auto",
    height: 'auto'
})



