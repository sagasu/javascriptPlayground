(async() => {
    try {
        const url = "http://" + window.location.host.replace("cbris", "cbrisapi") + "/api/offshore/requirement/read/metadata";
        let searchParams = document.location.hash.split('?');
        if(searchParams.length > 1){
            const urlSearchParams = new URLSearchParams(searchParams[1]);
            if(urlSearchParams.has("token") === true){
                const token = encodeURIComponent(urlSearchParams.get("token"));
                let response = await fetch(url, {
                    headers: {
                        "X-Security-Cloud": token,
                        "Content-Type": "application/json"
                    }
                });
                const data = await response.json();
                localStorage.setItem('requirementMetaData', JSON.stringify(data));
                console.log(data);
            }
        }
    } catch (e) {
        console.log("Booo");
    }
})();