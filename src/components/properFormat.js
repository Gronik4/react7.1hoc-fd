import moment from 'moment';
import 'moment/locale/ru';// Установка языка(русский)
/**
 * 
 * @param {*} std строка типа:"2022-10-09 17:24:00"
 * @returns 
 */

export default function properFormat(std) {
  const hour = 1*60*60*1000;
  const day = 24*60*60*1000;
  const delta = Date.now() - Date.parse(std);
  if(delta > day) { return moment(`${std}`).startOf().fromNow();}
  if(delta >= hour) {return '5 часов назад';}
  return '12 минут назад';
}
/**
 * Выдает: '12 минут назад' если прошло меньше часа,
 *  '5 часов назад' если прошло больше часа,
 *  'X дней назад' если больше суток.
 */
