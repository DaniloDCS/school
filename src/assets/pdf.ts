import pdfLib, { PDFDocument } from "pdf-lib";
import path from "path";
import fs from "fs";

class PDF {
  file: Express.Multer.File;

  constructor(file: Express.Multer.File) {
    this.file = file;
  }

  private bytes2Mb(bytes: number) {
    return (bytes / (1024 * 1024)).toFixed(2);
  }

  public async compress() {
    const pdfBites = fs.readFileSync(this.file.path);
    const pdfDoc = await PDFDocument.load(pdfBites);
    const pdfData = await pdfDoc.save();

    console.log(`Original file size: ${this.bytes2Mb(pdfData.byteLength)}mb`);

    this.WithLib(pdfBites);
  }

  private async WithLib(pdfBites: Buffer) {
    console.log("\nStart with lib");

    const compressed = await PDFDocument.load(pdfBites);
    const pages = compressed.getPages();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      const { width, height } = page.getSize();
      const scale = Math.min(width / 612, height / 792);
      page.scale(scale, scale);
    }

    const compressedPdf = await compressed.save();
    const fileName = `compressed-${Date.now()}-${this.file.originalname}`;
    const filePath = path.join(__dirname, "../../public/uploads", fileName);
    fs.writeFileSync(filePath, compressedPdf);
    fs.unlinkSync(this.file.path);

    console.log(`Compressed lib file size: ${this.bytes2Mb(compressedPdf.byteLength)} mb. Difference: ${this.bytes2Mb(pdfBites.byteLength - compressedPdf.byteLength)} mb. ${((pdfBites.byteLength * compressedPdf.byteLength)/100)} % \n`);
  }

  public async getPages(): Promise<pdfLib.PDFPage[]> {
    return new Promise(async (resolve, reject) => {
      const pdfBites = fs.readFileSync(this.file.path);
      const pdfDoc = await PDFDocument.load(pdfBites);
      const pages = pdfDoc.getPages();

      if (pages.length > 1) resolve(pages);
      else reject("This PDF has only one page");
    });
  }

  public async order(order: number[]) {
    const pdfBites = fs.readFileSync(this.file.path);
    const pdfDoc = await PDFDocument.load(pdfBites);
    const pages = pdfDoc.getPages();

    const orderedPages = order.map((pageNumber) => pages[pageNumber - 1]);
    pdfDoc.removePage(0);

    for (let i = 0; i < orderedPages.length; i++) {
      pdfDoc.insertPage(i, orderedPages[i]);
    }

    const orderedPdf = await pdfDoc.save();
    const fileName = `ordered-${Date.now()}-${this.file.originalname}`;
    const filePath = path.join(__dirname, "../../public/uploads", fileName);
    fs.writeFileSync(filePath, orderedPdf);
    fs.unlinkSync(this.file.path);
    return fileName;
  }

  public async removePages(pagesToRemove: number[]) {
    const pdfBites = fs.readFileSync(this.file.path);
    const pdfDoc = await PDFDocument.load(pdfBites);
    const pages = pdfDoc.getPages();

    for (let i = 0; i < pagesToRemove.length; i++) {
      pdfDoc.removePage(pagesToRemove[i]);
    }

    const removedPdf = await pdfDoc.save();
    const fileName = `removed-${Date.now()}-${this.file.originalname}`;
    const filePath = path.join(__dirname, "../../public/uploads", fileName);
    fs.writeFileSync(filePath, removedPdf);
    fs.unlinkSync(this.file.path);
    return fileName;
  }

  public async join(pdf: PDF) {
    const pdfBites = fs.readFileSync(this.file.path);
    const pdfDoc = await PDFDocument.load(pdfBites);
    const pages = pdfDoc.getPages();

    const pdfBites2 = fs.readFileSync(pdf.file.path);
    const pdfDoc2 = await PDFDocument.load(pdfBites2);
    const pages2 = pdfDoc2.getPages();

    for (let i = 0; i < pages2.length; i++) {
      pdfDoc.addPage(pages2[i]);
    }

    const joinedPdf = await pdfDoc.save();
    const fileName = `joined-${Date.now()}-${this.file.originalname}`;
    const filePath = path.join(__dirname, "../../public/uploads", fileName);
    fs.writeFileSync(filePath, joinedPdf);
    fs.unlinkSync(this.file.path);
    fs.unlinkSync(pdf.file.path);
    return fileName;
  }
}

export default PDF;