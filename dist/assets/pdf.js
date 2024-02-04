"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _pdflib = require('pdf-lib'); var _pdflib2 = _interopRequireDefault(_pdflib);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);

class PDF {
  

  constructor(file) {
    this.file = file;
  }

   bytes2Mb(bytes) {
    return (bytes / (1024 * 1024)).toFixed(2);
  }

   async compress() {
    const pdfBites = _fs2.default.readFileSync(this.file.path);
    const pdfDoc = await _pdflib.PDFDocument.load(pdfBites);
    const pdfData = await pdfDoc.save();

    console.log(`Original file size: ${this.bytes2Mb(pdfData.byteLength)}mb`);

    this.WithLib(pdfBites);
  }

   async WithLib(pdfBites) {
    console.log("\nStart with lib");

    const compressed = await _pdflib.PDFDocument.load(pdfBites);
    const pages = compressed.getPages();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();
      const scale = Math.min(width / 612, height / 792);
      page.scale(scale, scale);
    }

    const compressedPdf = await compressed.save();
    const fileName = `compressed-${Date.now()}-${this.file.originalname}`;
    const filePath = _path2.default.join(__dirname, "../../public/uploads", fileName);
    _fs2.default.writeFileSync(filePath, compressedPdf);
    _fs2.default.unlinkSync(this.file.path);

    console.log(`Compressed lib file size: ${this.bytes2Mb(compressedPdf.byteLength)} mb. Difference: ${this.bytes2Mb(pdfBites.byteLength - compressedPdf.byteLength)} mb. ${((pdfBites.byteLength * compressedPdf.byteLength)/100)} % \n`);
  }

   async getPages() {
    return new Promise(async (resolve, reject) => {
      const pdfBites = _fs2.default.readFileSync(this.file.path);
      const pdfDoc = await _pdflib.PDFDocument.load(pdfBites);
      const pages = pdfDoc.getPages();

      if (pages.length > 1) resolve(pages);
      else reject("This PDF has only one page");
    });
  }

   async order(order) {
    const pdfBites = _fs2.default.readFileSync(this.file.path);
    const pdfDoc = await _pdflib.PDFDocument.load(pdfBites);
    const pages = pdfDoc.getPages();

    const orderedPages = order.map((pageNumber) => pages[pageNumber - 1]);
    pdfDoc.removePage(0);

    for (let i = 0; i < orderedPages.length; i++) {
      pdfDoc.insertPage(i, orderedPages[i]);
    }

    const orderedPdf = await pdfDoc.save();
    const fileName = `ordered-${Date.now()}-${this.file.originalname}`;
    const filePath = _path2.default.join(__dirname, "../../public/uploads", fileName);
    _fs2.default.writeFileSync(filePath, orderedPdf);
    _fs2.default.unlinkSync(this.file.path);
    return fileName;
  }

   async removePages(pagesToRemove) {
    const pdfBites = _fs2.default.readFileSync(this.file.path);
    const pdfDoc = await _pdflib.PDFDocument.load(pdfBites);
    const pages = pdfDoc.getPages();

    for (let i = 0; i < pagesToRemove.length; i++) {
      pdfDoc.removePage(pagesToRemove[i]);
    }

    const removedPdf = await pdfDoc.save();
    const fileName = `removed-${Date.now()}-${this.file.originalname}`;
    const filePath = _path2.default.join(__dirname, "../../public/uploads", fileName);
    _fs2.default.writeFileSync(filePath, removedPdf);
    _fs2.default.unlinkSync(this.file.path);
    return fileName;
  }

   async join(pdf) {
    const pdfBites = _fs2.default.readFileSync(this.file.path);
    const pdfDoc = await _pdflib.PDFDocument.load(pdfBites);
    const pages = pdfDoc.getPages();

    const pdfBites2 = _fs2.default.readFileSync(pdf.file.path);
    const pdfDoc2 = await _pdflib.PDFDocument.load(pdfBites2);
    const pages2 = pdfDoc2.getPages();

    for (let i = 0; i < pages2.length; i++) {
      pdfDoc.addPage(pages2[i]);
    }

    const joinedPdf = await pdfDoc.save();
    const fileName = `joined-${Date.now()}-${this.file.originalname}`;
    const filePath = _path2.default.join(__dirname, "../../public/uploads", fileName);
    _fs2.default.writeFileSync(filePath, joinedPdf);
    _fs2.default.unlinkSync(this.file.path);
    _fs2.default.unlinkSync(pdf.file.path);
    return fileName;
  }
}

exports. default = PDF;