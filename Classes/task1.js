class University {
  constructor(name) {
    this.name = name;
    this.faculties = [];
  }

  addFaculty(faculty) {
        this.faculties.push(faculty);
    
  }

  removeFaculty(faculty) {
    const index = this.faculties.indexOf(faculty);
    if (index !== -1) {
      this.faculties.splice(index, 1);
    }
  }

  showFaculties() {
    console.log(this.faculties);
  }
}

let university = new University("БГУИР");

university.addFaculty("ФКП");
university.addFaculty("ИЭФ");
university.addFaculty("ФРЭ");

university.showFaculties(); // ['ФКП', 'ИЭФ', 'ФРЭ']

university.removeFaculty("ФРЭ");

university.showFaculties(); // ['ФКП', 'ИЭФ']

