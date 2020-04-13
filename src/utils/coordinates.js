const request = require('request');
const chalk = require('chalk')



const getCoordinates = (city,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoicnVzdGFtNjciLCJhIjoiY2s4ajdwNXlzMGJmdTNocWc2eDZtMHRkeCJ9.nm-BhNdGV1ozXeRSgyutPw`;
    request({url,json:true,proxy:'http://10.10.12.2:8080'},(err,res,body)=> {
    if(err)
    {
        callback('error internet is not working',undefined,undefined);
    }
    else if(body.features.length === 0)
    {
        
        callback('city is not found',undefined,undefined);
    }
    else{
        var {features} = body;
        
        callback(undefined,features[0].center[1],features[0].center[0]);
    }
    })
}


module.exports = getCoordinates;