
const copyAndYear = `© ${new Date().getFullYear()} Davi Szeremeta Zabroski - Curitiba, Brasil`
const lastModified =  new Date(document.lastModified)
document.getElementById("firstInfo").innerHTML = copyAndYear
document.getElementById("lastModified").innerHTML = lastModified
