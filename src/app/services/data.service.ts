import {Injectable} from '@angular/core';

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
  public messages: Message[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 1,
      read: false
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 2,
      read: false
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 3,
      read: false
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 4,
      read: false
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 5,
      read: false
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 6,
      read: false
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 7,
      read: false
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 8,
      read: false
    }
  ];
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
      pageCount: 0,
      language: 'english',
      id: 11,
      genre: ''
    },
    {
      author: 'Charlotte Brontë',
      name: 'Jane Eyre',
      year: 1874,
      pageCount: 0,
      language: 'english',
      id: 12,
      genre: ''
    },
    {
      author: 'Brave New World',
      name: 'Aldous Huxley',
      year: 1932,
      pageCount: 0,
      language: 'english',
      id: 13,
      genre: ''
    },
    {
      author: 'J. D. Salinger',
      name: 'The Catcher in the Rye',
      year: 1951,
      pageCount: 234,
      language: 'english',
      id: 14,
      genre: ''
    },
    {
      author: 'Emily Brontë',
      name: 'Wuthering Heights',
      year: 1847,
      pageCount: 0,
      language: 'english',
      id: 15,
      genre: ''
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
      year: 0,
      pageCount: 1095,
      language: 'russian',
      id: 17,
      genre: ''
    },
    {
      author: 'Лев Толстой',
      name: 'Анна Каренина',
      year: 1860,
      pageCount: 884,
      language: 'russian',
      id: 18,
      genre: ''
    },
    {
      author: 'Фёдор Достоевский',
      name: 'Преступление и наказание',
      year: 1820,
      pageCount: 524,
      language: 'russian',
      id: 19,
      genre: ''
    },
    {
      author: 'Евгений Петров, Илья Ильф',
      name: 'Двенадцать стульев',
      year: 0,
      pageCount: 700,
      language: 'russian',
      id: 20,
      genre: ''
    },
    {
      author: 'Фёдор Достоевский',
      name: 'Идиот',
      year: 0,
      pageCount: 140,
      language: 'russian',
      id: 21,
      genre: ''
    },
    {
      author: 'Александр Пушкин',
      name: 'Евгений Онегин',
      year: 0,
      pageCount: 335,
      language: 'russian',
      id: 22,
      genre: ''
    },
    {
      author: 'Лев Толстой',
      name: 'Война и мир',
      year: 0,
      pageCount: 1840,
      language: 'russian',
      id: 23,
      genre: ''
    },
    {
      name: 'Герой нашего времени',
      author: 'Михаил Лермонтов',
      year: 0,
      pageCount: 360,
      language: 'russian',
      id: 24,
      genre: ''
    },
    {
      name: 'Братья Карамазовы',
      author: 'Фёдор Достоевский',
      year: 0,
      pageCount: 832,
      language: 'russian',
      id: 25,
      genre: ''
    },
    {
      name: 'Дом, в котором…',
      author: 'Мариам Петросян',
      year: 0,
      pageCount: 692,
      language: 'russian',
      id: 26,
      genre: ''
    },
    {
      name: 'Понедельник начинается в субботу',
      author: 'Аркадий Стругацкий, Борис Стругацкий',
      year: 0,
      pageCount: 735,
      language: 'russian',
      id: 27,
      genre: ''
    },
    {
      name: 'Мёртвые души',
      author: 'Николай Гоголь',
      year: 0,
      pageCount: 397,
      language: 'russian',
      id: 28,
      genre: ''
    },
  ]

  constructor() {
  }

  private idLast = 28;

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public getBooks(): BookElem[] {
    return this.books;
  }

  public getBookById(id: number): BookElem {
    return this.books.filter(e => e.id === id)[0]
  }

  public addNewBook(book: BookElem) {
    this.idLast++;
    return this.books.push({...book, id: this.idLast})
  }
}
