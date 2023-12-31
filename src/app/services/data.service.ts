import {Injectable} from '@angular/core';
import {ReplaySubject} from "rxjs";

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface BookElem {
  author: string;
  name: string;
  pageCount: number;
  language: string;
  genre: string;
  year?: number;
  description?: string;
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public books: BookElem[] = [
    {
      author: 'Harper Lee',
      name: 'To Kill a Mockingbird',
      year: 1960,
      pageCount: 323,
      language: 'english',
      id: 8,
      genre: 'novel'
    },
    {
      author: 'F. Scott Fitzgerald',
      name: 'The Great Gatsby',
      year: 1925,
      pageCount: 180,
      language: 'english',
      id: 9,
      genre: 'novel'
    },
    {
      author: 'Joseph Heller',
      name: 'Catch-22',
      year: 1961,
      pageCount: 453,
      language: 'english',
      id: 10,
      genre: 'classic'
    },
    {
      author: 'Jane Austen',
      name: 'Pride and Prejudice',
      year: 1813,
      pageCount: 320,
      language: 'english',
      id: 11,
      genre: 'roman'
    },
    {
      author: 'Charlotte Brontë',
      name: 'Jane Eyre',
      year: 1874,
      pageCount: 190,
      language: 'english',
      id: 12,
      genre: 'humor'
    },
    {
      author: 'Brave New World',
      name: 'Aldous Huxley',
      year: 1932,
      pageCount: 400,
      language: 'english',
      id: 13,
      genre: 'poem'
    },
    {
      author: 'J. D. Salinger',
      name: 'The Catcher in the Rye',
      year: 1951,
      pageCount: 234,
      language: 'english',
      id: 14,
      genre: 'poem'
    },
    {
      author: 'Emily Brontë',
      name: 'Wuthering Heights',
      year: 1847,
      pageCount: 98,
      language: 'english',
      id: 15,
      genre: 'humor'
    },
    {
      author: 'Margaret Mitchell',
      name: 'Gone with the Wind',
      year: 1937,
      pageCount: 1037,
      language: 'english',
      id: 16,
      genre: 'novel'
    },
    {
      author: 'Михаил Булгаков',
      name: 'Мастер и Маргарита',
      year: 1890,
      pageCount: 1095,
      language: 'russian',
      id: 17,
      genre: 'roman'
    },
    {
      author: 'Лев Толстой',
      name: 'Анна Каренина',
      year: 1860,
      pageCount: 884,
      language: 'russian',
      id: 18,
      genre: 'poem'
    },
    {
      author: 'Фёдор Достоевский',
      name: 'Преступление и наказание',
      year: 1820,
      pageCount: 524,
      language: 'russian',
      id: 19,
      genre: 'tragedy'
    },
    {
      author: 'Евгений Петров, Илья Ильф',
      name: 'Двенадцать стульев',
      year: 1928,
      pageCount: 700,
      language: 'russian',
      id: 20,
      genre: 'humor'
    },
    {
      author: 'Фёдор Достоевский',
      name: 'Идиот',
      year: 1888,
      pageCount: 140,
      language: 'russian',
      id: 21,
      genre: 'humor'
    },
    {
      author: 'Александр Пушкин',
      name: 'Евгений Онегин',
      year: 1830,
      pageCount: 335,
      language: 'russian',
      id: 22,
      genre: 'roman'
    },
    {
      author: 'Лев Толстой',
      name: 'Война и мир',
      year: 1854,
      pageCount: 1840,
      language: 'russian',
      id: 23,
      genre: 'roman'
    },
    {
      name: 'Герой нашего времени',
      author: 'Михаил Лермонтов',
      year: 1830,
      pageCount: 360,
      language: 'russian',
      id: 24,
      genre: 'tragedy'
    },
    {
      name: 'Братья Карамазовы',
      author: 'Фёдор Достоевский',
      year: 1850,
      pageCount: 832,
      language: 'russian',
      id: 25,
      genre: 'humor'
    },
    {
      name: 'Дом, в котором…',
      author: 'Мариам Петросян',
      year: 1900,
      pageCount: 692,
      language: 'russian',
      id: 26,
      genre: 'poem'
    },
    {
      name: 'Понедельник начинается в субботу',
      author: 'Аркадий Стругацкий, Борис Стругацкий',
      year: 1956,
      pageCount: 735,
      language: 'russian',
      id: 27,
      genre: 'poem'
    },
    {
      name: 'Мёртвые души',
      author: 'Николай Гоголь',
      year: 1939,
      pageCount: 397,
      language: 'russian',
      id: 28,
      genre: 'poem'
    },
  ];
  public detectChange$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {
    // here will be load from websql /\=\
  }

  private idLast = 28;

  public getBooks(): BookElem[] {
    return this.books;
  }

  public getBookById(id: number): BookElem {
    return this.books.filter(e => e.id === id)[0]
  }

  public addNewBook(book: BookElem) {
    this.idLast++;
    const index = this.books.push({...book, id: this.idLast})
    this.detectChange$.next(true);
    return index
  }

  public editBook(book: BookElem) {
    const currentBookIndex = this.books.findIndex(e => e.id === book.id)
    if (currentBookIndex >= 0) {
      this.books[currentBookIndex] = book;
      this.detectChange$.next(true);
      return true;
    }
    return false
  }
}
