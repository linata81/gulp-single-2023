//timer
const deadline = '2022-07-01';

//ф-ция для расчета времени
function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

//ф-ция которая проверяет, что если цифр в счетчике не 2, то подставляет 0 впереди числа
function getZero(num) {
  if(num >= 0 && num < 10) {
    return `0${num}`;
  }
  else if(num < 0) { //иначе если срок истек - выводил минуса
    return '00';
  }
  else {
    return num;
  }
}

//ф-ция установки времени на страницу
function setClock(selector, endtime){
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

  updateClock(); //чтобы 1 раз без задержки загрузились данные на счетчик

  //ф-ция, кот обновляет таймер каждую секунду
  function updateClock(){
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if(t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock('.timer', deadline);

/*
    Date.parse(endtime) - получим количество миллисек кот. будет в конечном времени
    т.к. надо найти разницу отнимаем текущее время
    теперь эту разницу превратим в кол-во дней, часов, минут и сек

    чтобы найти дни: общ.кол-во милсек делим на кол-во милисек в 1 дне и округлим
    1000 * 60 (кол-во милсек в 1 минуте) * 60 (кол-во в 1 часе) *24( часа в сутках) - полчилось сколько в сутках милсек
    
    чтобы найти часы: общ.кол-во мс на кол-во мс в 1 часе
    1000*60*60 - получаем общ.кол-во часов до конца таймера, но часов может быть много, даже за 100,
    поэтому мы высчитываем остаток от деления на 24ч в сутках,и получим нужный нам хвостик

    минуты: общ.кол-во / 1000мс = кол-во сек => /60 = кол-во минут, и снова ищем хвостик остаток от деления на 60(т.к. в часе 60 сек)
    секунды: общ.кол-во / 1000мс и хвостик от деления на 60 (т.к. в минуте 60 сек -как бы выкидывааем минуты а остаток  записываем)
*/