const input = document.getElementById("darkmode")
const r = document.querySelector(':root')

input.addEventListener('click', () => {
  if(input.checked){
    r.style.setProperty('--light1-accent-color', '#737D74')
    r.style.setProperty('--light2-accent-color', '#F4F3F3')
    r.style.setProperty('--dark1-accent-color', '#68696B')
    r.style.setProperty('--dark2-accent-color', '#2D3954')
    r.style.setProperty('--dark3-accent-color', '#1D2331')
  } else {
    r.style.setProperty('--light1-accent-color', '#737D74')
    r.style.setProperty('--light2-accent-color', '#1D2331')
    r.style.setProperty('--dark1-accent-color', '#68696B')
    r.style.setProperty('--dark2-accent-color', '#F4F3F3')
    r.style.setProperty('--dark3-accent-color', '#1D2331')
  }
})