const main = document.getElementById('main')
main.remove()

const newHeader = document.createElement('H1')
newHeader.id = 'victory'
newHeader.textContent = 'Nii Korley is the champion'
document.body.append(newHeader)
