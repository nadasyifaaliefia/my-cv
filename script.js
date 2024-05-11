const listCertificate = document.querySelector('#listCertificate')
console.log(listCertificate)

let dataCertificate = [];

const addCertificate = (event) =>{
    event.preventDefault();
    console.log('tes')

    let messageTitle = prompt('Tambahkan Penghargaan Anda')
    let messageDescription = prompt('Tambahkan Deskripsi Penghargaan Anda')

    let newData = {
        title: messageTitle,
        description: messageDescription
    }

    dataCertificate.push(newData)
    console.log(dataCertificate)
}