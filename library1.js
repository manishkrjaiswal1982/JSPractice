const playGuitar = () => {
    console.log(`Playing guitar`)
}

const playLudo = () => {
    console.log(`Playing Ludo`)
}

const playCricket = () => {
    console.log(`Playing Cricket`)
}

const printGame = (gamename) =>{
    return gamename;
}

// Live server is required to work on AJAX. AJAX is the technique to for creating fast and dynamic web pages.
// AJAX helps in fetching data asynchronously. No page reload/refresh. Modern browser uses JSON for data transfer instead of XML.
// Response is in the form of Text file, XML Data or JSON Data.
/* When request - response is handled through XMLhttpRequest object, the tasks are divided into five steps
and known as readyState.

0: request not initalized
1: server connection establised
2: request received
3: processing request
4: request finished and response is ready

*/
/*
When response is received, it contains the two information like status and responseText.
responseText: either responseText or responseXML
status: http status code like 200=OK, 403=forbidden, 404=not found etc
*/


let fetchJSONdata = () => {
     
    let httpReq = new XMLHttpRequest();
    httpReq.open("GET","js/test.json", true);
    httpReq.send();
    httpReq.onprogress = function () {
    console.log("http request progressing");
    }
    
    httpReq.onreadystatechange = function() { // It looks a like, 'this' keyword below may raise issue if you use arrow function.
           if(this.readyState == 4 && this.status== 200){
            let itemArray = JSON.parse(this.responseText);            
            console.log(Object.prototype.toString.call(itemArray));
            console.log(itemArray);
            document.querySelector("#productFromJSON").innerHTML = `
            <br><br><table style='border: 1px solid #FF0000;'>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                </tr>
                ${itemArray.map((item) => `
                    <tr>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                    </tr>
                `).join('')}
            </table>`;
            let itemBackToJSON = JSON.stringify(itemArray);
            console.log(Object.prototype.toString.call(itemBackToJSON));
            console.log(itemBackToJSON);

            // JSON.stringify(object) //Convert object to json string
            // JSON.parse(string) //Convert string to json object

        }
    }
}


// Fetch API - sends network request through javascript. Fetch API returns the promise. It is handled by web API.
// It is designed to be more powerful and flexible than the older XMLHttpRequest (XHR) API.
/*
fetch(file/url) - Return promise
fetch(file/url).then() - Once again Return promise

Syntax for status "resolve"
fetch(file/url).then(function(response){
    return response.data;
    return response.text() or return response.json();
    }).then(function(result){
    console.log(result)
    });

Syntax for status "failed"
fetch(file/url).then(function(response){
    return response.data;
    return response.text() or return response.json();
    }).catch(function(error){
    console.log(error)
    });
*/

let fetchTxtData = () =>{
    fetch("txt/text1.txt")
    .then(function(response){
        return response.text();
    }).then(function(result){
        // console.log("2nd promise value:" +result);
        document.querySelector("#TextFromTxt").innerHTML = result;
    });
}

let fetchJSONData2 = () =>{
    let jsonData = "<br>";
    fetch("js/test.json")
    .then(function(response){
        return response.json();
    }).then(function(result){
        console.log("Result through local JSON:" +result);
        
        for (var x in result){
            jsonData = jsonData + result[x].title + "<br>"
            // document.write(`${result[x].title} <br>`);
        }
        document.querySelector("#productFromJSONFetchM").innerHTML = jsonData;
        console.log("Type of result is: " +Object.prototype.toString.call(result));
    })
}

export default playCricket;
export {playGuitar, playLudo, printGame, fetchJSONdata, fetchTxtData, fetchJSONData2};