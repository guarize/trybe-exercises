class Student {
  private _registration: string;
  private _name: string;
  private _examsGrades: number[];
  private _assessmentGrades: number[];

  constructor(registration: string, name: string) {
    this._registration = registration;
    this._name = name;
    this._examsGrades = [];
    this._assessmentGrades = [];
  }

  get registration(): string {
    return this._registration;
  }

  set registration(newRegistration: string) {
    this._registration = newRegistration;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length >= 3) {
      this._name = newName;
    }

    throw new Error('Student`s name must have at least 3 chars');
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(grades: number[]) {
    if (grades.length === 4) {
      this._examsGrades = grades;
    }

    throw new Error('Students must have 4 exams grades');
  }

  get assessmentGrades(): number[] {
    return this._assessmentGrades;
  }

  set assessmentGrades(grades: number[]) {
    if (grades.length === 2) {
      this._assessmentGrades = grades;
    }

    throw new Error('Students must have 2 assessments grades');
  }
}

const studentOne = new Student('2017/02/01', 'Name');
