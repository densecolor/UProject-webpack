async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('areatext').value
    if (isOverLength(formText)) {
        alert("No more than 280 characters")
        document.getElementById('areatext').focus();
    } else {
        const result = await postData('http://localhost:8081/find', {
            content: formText
        })
        document.getElementById('polarity').innerHTML = 'polarity: ' + result.polarity
        document.getElementById('subjectivity').innerHTML = 'subjectivity: ' + result.subjectivity
    }
}

//function to get input value length
function isOverLength(formText) {
    return formText.length > 280
}

// Function to POST data to server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    try {
        const result = await response.json()
        console.log(result)
        return result
    } catch (error) {
        console.log("error", error)
    }
}

//funciton check input length
function checkForInput(event) {
    let x = document.getElementById("areatext")
    let y = document.getElementById("textbutton")
    if (x.value.length !== 0) {
        y.disabled = false
    } else {
        y.disabled = true
    }
    return y.disabled
}

export {
    handleSubmit,
    checkForInput,
    isOverLength
}