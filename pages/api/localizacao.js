
async function localizacao (resquest, response){
    const dynamicDate = new Date();
    const latitudeResponse = await fetch("http://189.106.141.116:8000/api/localizations/1");
    const latitudeResponseJson = await latitudeResponse.json();
    const latitude = latitudeResponseJson.lat;
    const longitude = latitudeResponseJson.long;

    const soma = latitude+longitude
    console.log(soma)
    response.json({
        date: dynamicDate.toGMTString(),
        latitudes: latitude,
        longitudes: longitude,
        soma: soma
        
    });
}



export default localizacao;

