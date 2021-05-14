


async function start(){
    const response = await fetch('https://api.covid19india.org/v4/min/data.min.json')
    const data = await response.json()
    console.log(data.DL.total)
   confirmed(data.DL.total.confirmed)
   deceased(data.DL.total.deceased)
   recovered(data.DL.total.recovered)
   tested(data.DL.total.tested)
   vaccinated(data.DL.delta.vaccinated)
   
}



function confirmed(cd)

{
    document.getElementById('conf').innerHTML = 'Confirmed Cases : ' + (cd)   
}


function deceased(dd){
 
    document.getElementById('dec').innerHTML = 'Deceased         :' + (dd)

 }

 function recovered(rd){
  
    document.getElementById('rec').innerHTML = 'Recovered :' + (rd)

}

function tested(td){

    document.getElementById('test').innerHTML = 'Tested :' + (td)

}

function vaccinated(vd){

    document.getElementById('vacc').innerHTML = 'Vaccinated :' + (vd)


}



start()