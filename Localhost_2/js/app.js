// ввод данных

function askName() {

    let name = document.getElementById("name").value
    document.getElementById("name").value = ''
    console.log(name)

    if (name == '') {

        document.getElementById("error").innerText = `Гость, привет.`
        return
    }

    document.getElementById("error").innerText = ''
    document.getElementById("output").innerText = `Привет, ${name}.`
}




