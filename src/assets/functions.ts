import jsPDF from "jspdf";

export default function functions() {
  return {
    PDF: (title: string, text: string) => {
      const doc = new jsPDF();
      doc.text(text, 10, 10);
      doc.save(`${title}.pdf`);
    },
    namesCaptalize: (name: string) => {
      const not = [
        "das",
        "dos",
        "de",
        "da",
        "do",
        "e",
        "o",
        "a",
        "os",
        "as",
        "à",
        "às",
      ];
      return name
        .toLowerCase()
        .split(" ")
        .map((word) => {
          if (not.includes(word)) return word;
          return word[0].toUpperCase() + word.substring(1);
        })
        .join(" ");
    },
    removeAccents: (text: string) => {
      return text
        .replace(/[áàãâä]/gi, "a")
        .replace(/[éèêë]/gi, "e")
        .replace(/[íìîï]/gi, "i")
        .replace(/[óòõôö]/gi, "o")
        .replace(/[úùûü]/gi, "u")
        .replace(/[ç]/gi, "c")
        .replace(/[ÁÀÃÂÄ]/gi, "A")
        .replace(/[ÉÈÊË]/gi, "E")
        .replace(/[ÍÌÎÏ]/gi, "I")
        .replace(/[ÓÒÕÔÖ]/gi, "O")
        .replace(/[ÚÙÛÜ]/gi, "U")
        .replace(/[Ç]/gi, "C");
    },
    date: (date: Date) => {
      const d = new Date(date);
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    },
    dateExtensive: (date: Date) => {
      return new Date(date).toLocaleDateString("pt-BR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    random: (min: number | null = null, max: number | null = null) => {
      if (min === null || max === null) return Math.random();
      return Math.random() * (max - min) + min;
    },
    getAttibuttesOfDate: (date: Date) => {
      const d = new Date(date);
      return {
        day: d.getDate(),
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        hours: d.getHours(),
        minutes: d.getMinutes(),
        seconds: d.getSeconds(),
        milliseconds: d.getMilliseconds(),
      };
    },
    IDgenerator: (quantity: number = 10) => {
      const alp =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZLMNOPQRSTUVWXYZYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const d = new Date(),
        minutes = d.getMinutes(), // 0-59
        seconds = d.getSeconds(), // 0-59
        milliseconds = d.getMilliseconds(); // 0-999

      const random = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const part = () => {
        const option = Math.random() * (8 - 1) + 1;
        const length = alp.length - 1;

        if (option === 1 || option == 5) return alp.charAt(random(0, length));
        if (option === 2 || option == 6)
          return alp.charAt(random(milliseconds, length));
        if (option === 3 || option == 7)
          return alp.charAt(random(minutes, length));
        if (option === 4 || option == 8)
          return alp.charAt(random(seconds, length));
        else return alp.charAt(random(0, length));
      };

      let id = "";
      for (let i = 0; i < quantity; i++) id += part();

      return id;
    },
    createStuudyEmail: (name: string) => {
      const not = [
        "das",
        "dos",
        "de",
        "da",
        "do",
        "e",
        "o",
        "a",
        "os",
        "as",
        "à",
        "às",
      ];

      const names = name
        .toLowerCase()
        .replace(/[áàãâä]/gi, "a")
        .replace(/[éèêë]/gi, "e")
        .replace(/[íìîï]/gi, "i")
        .replace(/[óòõôö]/gi, "o")
        .replace(/[úùûü]/gi, "u")
        .replace(/[ç]/gi, "c")
        .split(" ")
        .filter((word) => !not.includes(word));

      const email = names[0] + "." + names[names.length - 1];

      return `${email}@stuudy.com`;
    },
  };
}
