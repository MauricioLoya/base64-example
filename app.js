
const onLoadFile = e => {
    const encodeData = e.target.result; // <--- data: base64
    // const decodeData = window.atob(encodeData);
    const p = document.querySelector('#result');
    p.innerHTML = encodeData;
    
    console.log('Codificado', encodeData);
}

const encodeImageFileAsURL = () => {
    let filesSelected = document.getElementById("inputFileToLoad").files;

    if (filesSelected.length > 0) {

      const fileToLoad = filesSelected[0];

      let fileReader = new FileReader();

      fileReader.readAsDataURL(fileToLoad);

      fileReader.onload = onLoadFile;
    }
}

const decode = (string) => {
    const encodedData = window.btoa(string); // encode a string
    const decodedData = window.atob(encodedData);

    console.table({encodedData, decodedData});

}