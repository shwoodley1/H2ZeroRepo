

var axios = require("axios").default;

exports.handler = async (event) => {
   if (event.requestContext.authorizer){
       console.log("claims: ", event.requestContext.authorizer.claims)
   }

 const id = event.requestContext.http.path;
  console.log(id);
  
var options = {
  method: 'GET',
  url: `https://ptdevices.com/v1/manager/devices${id}`,
  headers: {'content-type': 'application/json', 
  authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNyIsImp0aSI6ImQ3MjU1ZTlmYmUyN2U0MTU1OGU1Mjk2MTRmMTVhYjliYzBkOTMxM2U3M2ZjMGUzNDQ1Yzg2MDcyMTgyZDhjM2Y2YmExZDEyODAyMWFkZDg5IiwiaWF0IjoxNjI5OTQyMzcyLjg5NTUwNiwibmJmIjoxNjI5OTQyMzcyLjg5NTUxMywiZXhwIjoxNjYxNDc4MzcyLjg0NTQ2NSwic3ViIjoiMjEzMyIsInNjb3BlcyI6W119.Yx5gYO6_KQvg0oYtvwR3dHJEzanWZzq2fPgomCSBfxPN4B8WL8uDMhMs795XtPXTcBmGsVcFs-VZQ9fp_hMuJJqoKH9aIQdLMPCEjkhDSViKvKVC7kQVzpiIhpO28u6jdMC0B67cL__kLVQ5MgQrolCJycbdvO44Bx-muLwHnBBa0Fr38oQPbjZ3oYQks7a5fm1gcaPDrrJ3WlljxBBZjoYCweOemzbZRgd53XU1-IP-ahvbw1fAnQDK0CP0MQXzkhvyRzKE8lGxbgAcqvda4f1gj7qhqBvv7dnwL2LMSTbmNhWMOnbdYVdMTfE07b-jtOo6yr4NSU2VYish9c31-i0pBJYrOTf5mjggOcmPkYtf5MqBYmTS2x9FJApdI0gdSNkRiqgNkRCOjRlnwPt_t4rVDDjJF0CgZeJ3DRTf6j7qFJ1Qdbe4ezM1mDUaSTnTV8KwaFbl3pTC3EM8-9ZreICKEAoDA9styAQjUJPXPGX227k6l2FR5bkL3Y17mknXCxEzoGpSbWUkbf-AZ_r3fycYnvft_mi9W7mtkYXs5cCdHFE7I159Asr0LfRESQZiKvsrKtwfkakRMl-Dr3UqAmlWPvYilSUIPjewql5gbjKYvv7SEKWzLL7BymwPutejKzG3um6uJUOs3wixHBZmdsBxEJqLo3JChm6kHwClBMs'}
};

const axData = await axios.request(options,event)
.then(response => {
 return response.data;
  }).catch(err => {
  console.error(err);
});
    const sData = await JSON.stringify(axData.data);
    const data = await JSON.parse(sData);
   console.log(data);
    const response = {
        statusCode: 200,
        headers:{
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(data),
    };
    return response;
};