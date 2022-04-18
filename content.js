var url = location.href;
fetch('https://archive.softwareheritage.org/api/1/origin/'+url+'/get').then(r => r.text()).then(result => {
    const obj = JSON.parse(result);
    if("origin_visits_url" in obj){
        var l = obj.origin_visits_url;
        alert("Found this repository on software-heritage! Origin visits link: "+l);
    }
    else{
        alert("Cannot find this repository, Save it now by clicking on extension");
    }
})