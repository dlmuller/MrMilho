const GET_HEADER = {
    method: 'GET',
    headers: new Headers(),
    cache: 'default'
};

const POST_HEADERS = {
    method: 'POST',
    cache: 'default',
    headers: {
        "Content-Type": "application/json",
        credentials: "same-origin"
    },
};

const PUT_HEADERS = {
    method: 'PUT',
    cache: 'default',
    headers: {
        "Content-Type": "application/json",
        credentials: "same-origin"
    },
};

const DELETE_HEADERS = {
    method: 'DELETE',
    cache: 'default',
    headers: {
        "Content-Type": "application/json",
        credentials: "same-origin"
    },
};



const fetchUrl = (url, method, body, { setSuccess, setErrMsg, setInfo, setPokeImg }) => {
    let fetchmethod

    const post = {
        ...POST_HEADERS,
        body: body
    }
    const put = {
        ...PUT_HEADERS,
        body: body
    }

    if (method == 'GET') {
        fetchmethod = GET_HEADER
    }
    else if (method === 'POST') {
        fetchmethod = post
    } else if (method === 'PUT') {
        fetchmethod = put
    } else if (method === 'DELETE') {
        fetchmethod = DELETE_HEADERS
    }

    fetch(url, fetchmethod)
        .then(res => {
            if (res.ok) {
                if (typeof setSuccess == 'function') { setSuccess(true) }
                return res.json();
            } else {
                if (typeof setSuccess == 'function') { setSuccess(false) }
            }
        })
        .then(answer => {
            console.log({ answer });
            if (answer !== undefined) {
                console.log({ fromServer: answer[0] })

                if (url == `/hunts/electric/Raichu` || `/hunts/electric/Ampharos` || `/hunts/electric/Electabuzz`) {
                    setInfo(answer[0])
                }
                if (typeof setErrMsg == 'function') setErrMsg(answer)
            } else {
                console.log({ fromServer: "invalid answer" })
            }
        })
        .catch(e => console.log({ error: e }))
}




export default fetchUrl;