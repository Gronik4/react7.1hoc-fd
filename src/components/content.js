import moment from 'moment';
/**
 * В целях проверки работспособности, добавил этот блок актуализации даты
 */
const Now = Date.now();
const min = 2*60*1000;
const hour = 1.5*60*60*1000;
const day = 24*60*60*1000;

export const data = [
  {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment(Now - min).format('YYYY-MM-DD HH:mm:ss')
  },
  {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment(Now - hour).format('YYYY-MM-DD HH:mm:ss')
  },
  {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: moment(Now - day * 3).format('YYYY-MM-DD HH:mm:ss')
  },
  {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-11-01 12:10:00'
  },
  {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-01 16:17:00'
  },
  {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-12-02 05:24:00'
  },
];
