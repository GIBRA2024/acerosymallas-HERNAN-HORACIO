function descargarContacto() {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:Arango Ramirez;Hernan;Horacio;;
FN:Hernan Horacio Arango Ramirez
TEL:+57 3207869989
EMAIL;TYPE=WORK: produccion@acerosymallas.com
NOTE: Director de Producción
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contacto.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
