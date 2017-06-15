angular.module('testingApp', [])

.controller('testingSystemController', function($scope) {
	var tests = [
		{
			'id': 1,
			'title': 'Що із переліченого є обов’язковою рисою периферійних пристроїв? ',
			'answers': ['зв’язок з хостом за допомогою деякого стандартного інтерфейсу', 'наявність кількох процесорних елементів', 'використання двох або більше мікросхем аналого-цифрових перетворювачів', 'наявність великого обсягу електрично-перепрограмованої пам’яті (EEPROM)'],
			'correct': 'зв’язок з хостом за допомогою деякого стандартного інтерфейсу',
			'answer': ''
		},
		{
			'id': 2,
			'title': 'Типовий периферійний пристрій обов’язково містить:',
			'answers': ['процесорне ядро та контролер інтерфейсу', 'аналого-цифровий та цифро-аналоговий перетворювач', 'рідкокристалічний або семисегментний індикатор', 'блок живлення'],
			'correct': 'процесорне ядро та контролер інтерфейсу',
			'answer': ''
		},
		{
			'id': 3,
			'title': 'Зовнішні периферійні пристрої найчастіше під’єднують до комп’ютера за допомогою інтерфейсу...',
			'answers': ['USB', 'SPI', 'I2C', 'HDMI'],
			'correct': 'USB',
			'answer': ''
		},
		{
			'id': 4,
			'title': 'Периферійні пристрої у вигляді плати розширення можуть бути підключені до персонального комп’ютера по інтерфейсу...',
			'answers': ['PCI Express', 'SPI', 'UART', 'Bluetooth'],
			'correct': 'PCI Express',
			'answer': ''
		},
		{
			'id': 5,
			'title': 'В персональному комп’ютері зв’язок з периферійним пристроєм по деякому стандартному інтерфейсу виконує:',
			'answers': ['контролер відповідного інтерфейсу, що міститься в мікросхемі чіпсету на системній платі', 'контролер пам’яті', 'безпосередньо центральний процесор', 'мікросхема BIOS'],
			'correct': 'контролер відповідного інтерфейсу, що міститься в мікросхемі чіпсету на системній платі',
			'answer': ''
		},
		{
			'id': 6,
			'title': 'Яка розрядність мікроконтролерів AVR сімейств Mega та Tiny?',
			'answers': ['8', '16', '32', '64'],
			'correct': '8',
			'answer': ''
		},
		{
			'id': 7,
			'title': 'Скільки портів вводу-виводу мають мікроконтролери AVR сімейств Mega та Tiny?',
			'answers': ['від 1 до 11, залежно від конкретної моделі МК', '4', 'мікроконтролери сімейства Mega мають 8 портів, а Tiny - 4', '8'],
			'correct': 'від 1 до 11, залежно від конкретної моделі МК',
			'answer': ''
		},
		{
			'id': 8,
			'title': 'Який із цих регістрів спеціальних функцій не має відношення до портів?',
			'answers': ['TCCR1A', 'DDR', 'PORT', 'PIN'],
			'correct': 'TCCR1A',
			'answer': ''
		},
		{
			'id': 9,
			'title': 'Який із цих регістрів використовується для задання напрямку передачі даних для порту А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'TCCR1A'],
			'correct': 'DDRA',
			'answer': ''
		},
		{
			'id': 10,
			'title': 'Який із цих регістрів використовується для виводу даних у порт А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'TCCR1A'],
			'correct': 'PORTA',
			'answer': ''
		},
		{
			'id': 11,
			'title': 'Який із цих регістрів використовується для вводу даних з порту А?',
			'answers': ['DDRA', 'PORTA', 'PINA', 'TCCR1A'],
			'correct': 'PINA',
			'answer': ''
		},
		{
			'id': 12,
			'title': 'Який режим роботи виводів порту А, якщо в регістрі DDRA записано значення 00111111?',
			'answers': ['виводи PORTA.7 та PORTA.6 – входи, а решта- виходи', 'виводи PORTA.0 та PORTA.1 – входи, а решта- виходи', 'виводи PORTA.7 та PORTA.6 – виходи, а решта- входи', 'виводи PORTA.0 та PORTA.1 – виходи, а решта- входи'],
			'correct': 'виводи PORTA.7 та PORTA.6 – входи, а решта- виходи',
			'answer': ''
		},
		{
			'id': 13,
			'title': 'Яка дія виконується даним рядком коду? PORTA = 0xFF;',
			'answers': ['вивід лог.1 у всі розряди порту А', 'читання даних з порту А', 'задання напряму передачі даних через порт А: всі розряди є виходами', 'задання напряму передачі даних через порт А: всі розряди є входами'],
			'correct': 'вивід лог.1 у всі розряди порту А',
			'answer': ''
		},
		{
			'id': 14,
			'title': 'Яка дія виконується даним рядком коду? DDRA = 0xFF;',
			'answers': ['задання напряму передачі даних через порт А: всі розряди є виходами', 'задання напряму передачі даних через порт А: всі розряди є входами', 'вивід лог.1 у всі розряди порту А', 'читання даних з порту А'],
			'correct': 'задання напряму передачі даних через порт А: всі розряди є виходами',
			'answer': ''
		},
		{
			'id': 15,
			'title': 'Яка дія виконується даним рядком коду? X = PINA;',
			'answers': ['читання даних з порту А у змінну Х', 'вивід змінної Х у порт А', 'задання напряму передачі даних через порт А: всі розряди є виходами', 'тут немає операцій з портами'],
			'correct': 'читання даних з порту А у змінну Х',
			'answer': ''
		},
		{
			'id': 16,
			'title': 'Таймери якої розрядності присутні у більшості моделей МК AVR?',
			'answers': ['8 та 16', '10 або 12', '4', '32'],
			'correct': '8 та 16',
			'answer': ''
		},
		{
			'id': 17,
			'title': 'Для якої із цих задач доцільно застосувати таймер-лічильник?',
			'answers': ['задання часового інтервалу', 'контроль напруги живлення', 'вимірювання амплітуди аналогового сигналу', 'підрахунок середнього арифметичного значення послідовності цифрових відліків'],
			'correct': 'задання часового інтервалу',
			'answer': ''
		},
		{
			'id': 18,
			'title': 'Що із переліченого не належить до задач, які можна вирішити за допомогою таймерів-лічильників?',
			'answers': ['вимірювання амплітуди аналогового сигналу', 'задання часового інтервалу', 'вимірювання часового інтервалу', 'підрахунок кількості імпульсів на зовнішньому виводі'],
			'correct': 'вимірювання амплітуди аналогового сигналу',
			'answer': ''
		},
		{
			'id': 19,
			'title': 'Виберіть опис роботи таймера-лічильника AVR в режимі Normal:',
			'answers': ['ТЛ рахує від 0 до максимального значення, після чого скидається і знов починає рахувати від 0', 'ТЛ рахує від 0 до значення, заданого регістром OCR, після чого скидається і знов починає рахувати від 0', 'ТЛ рахує від 0 до значення, заданого регістром OCR, а потім від цього значення до 0', 'ТЛ рахує від 0 до максимального значення, а потім від цього значення до 0'],
			'correct': 'ТЛ рахує від 0 до максимального значення, після чого скидається і знов починає рахувати від 0',
			'answer': ''
		},
		{
			'id': 20,
			'title': 'Виберіть опис роботи таймера-лічильника AVR в режимі CTC (обнулення по порівнянню):',
			'answers': ['ТЛ рахує від 0 до значення, заданого регістром OCR, після чого скидається і знов починає рахувати від 0', 'ТЛ рахує від 0 до максимального значення, після чого скидається і знов починає рахувати від 0', 'ТЛ рахує від 0 до значення, заданого регістром OCR, а потім від цього значення до 0', 'ТЛ рахує від 0 до максимального значення, а потім від цього значення до 0'],
			'correct': 'ТЛ рахує від 0 до значення, заданого регістром OCR, після чого скидається і знов починає рахувати від 0',
			'answer': ''
		},
		{
			'id': 21,
			'title': 'Частота переповнення таймера в режимі Normal залежить від...',
			'answers': ['розрядності таймера, коефіцієнта подільника,  тактової частоти МК', 'значення в регістрі OCR, коефіцієнта подільника,  тактової частоти МК', 'розрядності таймера, коефіцієнта подільника,  розрядності МК', 'тільки розрядності таймера'],
			'correct': 'розрядності таймера, коефіцієнта подільника,  тактової частоти МК',
			'answer': ''
		},
		{
			'id': 22,
			'title': 'Частота переповнення таймера в режимі CTC (обнулення по порівнянню) залежить від...',
			'answers': ['значення в регістрі OCR, коефіцієнта подільника,  тактової частоти МК', 'розрядності таймера, коефіцієнта подільника,  тактової частоти МК', 'розрядності таймера, коефіцієнта подільника,  розрядності МК', 'тільки розрядності таймера'],
			'correct': 'значення в регістрі OCR, коефіцієнта подільника,  тактової частоти МК',
			'answer': ''
		},
		{
			'id': 23,
			'title': 'Типова послідовність дій для отримання одного цифрового відліку  з АЦП передбачає:',
			'answers': ['запуск перетворення, очікування готовності, зчитування результату', 'запуск перетворення,  калібрування, зняття опорної напруги', 'калібрування, встановлення номеру каналу, тактування', 'тактування, підключення опорної напруги, формування одиничного імпульса'],
			'correct': 'запуск перетворення, очікування готовності, зчитування результату',
			'answer': ''
		},
		{
			'id': 24,
			'title': 'Опорна напруга АЦП визначає:',
			'answers': ['максимальне значення вихідного цифрового відліку', 'допустимий діапазон вхідного аналогового сигналу', 'середній час аналого-цифрового перетворення', 'найбільш імовірне значення вхідного аналогового сигналу'],
			'correct': 'максимальне значення вихідного цифрового відліку',
			'answer': ''
		},
		{
			'id': 25,
			'title': 'Яка розрядність вбудованого АЦП мікроконтролерів AVR сімейств Mega та Tiny?',
			'answers': ['10', '8', '16', '8 або 16,залежно від конкретної моделі МК'],
			'correct': '10',
			'answer': ''
		},
		{
			'id': 26,
			'title': 'Якою є тактова частота вбудованого АЦП мікроконтролерів AVR?',
			'answers': ['отримується шляхом поділу частоти тактування МК на деякий коефіцієнт', 'завжди дорівнює тактовій частоті МК', 'повинна задаватись зовнішнім тактовим генератором', 'вбудований АЦП мікроконтролерів AVR не потребує тактування'],
			'correct': 'отримується шляхом поділу частоти тактування МК на деякий коефіцієнт',
			'answer': ''
		},
		{
			'id': 27,
			'title': 'Як задається опорна напруга вбудованого АЦП мікроконтролерів AVR?',
			'answers': ['опорна напруга подається на вхід AREF або береться від внутрішнього джерела опорної напруги', 'опорна напруга завжди буде 5В', 'значення опорної напруги слід записати в регістр ADCSRA', 'опорна напруга підбирається автоматично, виходячи із амплітуди вимірюваного сигналу'],
			'correct': 'опорна напруга подається на вхід AREF або береться від внутрішнього джерела опорної напруги',
			'answer': ''
		},
		{
			'id': 28,
			'title': 'Яким чином задається номер каналу вхідного аналогового сигналу вбудованого АЦП мікроконтролерів AVR?',
			'answers': ['за допомогою регістра спеціальних функцій ADMUX', 'за допомогою таймера-лічильника', 'після кожного перетворення номер каналу автоматично збільшується на 1 і встановлюється в 0 після оцифровки останнього каналу', 'шляхом подачі на входи МК цифрової комбінації, що відповідає номеру каналу '],
			'correct': 'за допомогою регістра спеціальних функцій ADMUX',
			'answer': ''
		},
		{
			'id': 29,
			'title': 'Яким чином можна задати частоту дискретизації (частоту отримання цифрових відліків) для аналого-цифрового перетворення?',
			'answers': ['за допомогою таймера-лічильника', 'за допомогою регістра спеціальних функцій ADCSRA', 'за допомогою коефіцієнта подільника тактової частоти АЦП', 'частота дискретизації завжди буде рівною 1/16 тактової частоти МК'],
			'correct': 'за допомогою таймера-лічильника',
			'answer': ''
		},
		{
			'id': 30,
			'title': 'Де знаходиться результат аналого-цифрового перетворення вбудованого АЦП мікроконтролерів AVR?',
			'answers': ['в регістрах ADCH та ADCL', 'в регістрі PORT того порту, який використовується вбудованим АЦП', 'в регістрі PIN того порту, який використовується вбудованим АЦП', 'в регістрі загального призначення, визначеному програмістом'],
			'correct': 'в регістрах ADCH та ADCL',
			'answer': ''
		},
		{
			'id': 31,
			'title': 'Яким буде цифровий результат перетворення вхідного аналогового сигналу амплітудою 1В, якщо опорна напруга складає 4В, для вбудованого 10-розрядного АЦП мікроконтролера AVR?',
			'answers': ['256', '1', '100', '25'],
			'correct': '256',
			'answer': ''
		},
		{
			'id': 32,
			'title': 'Яким буде цифровий результат перетворення вхідного аналогового сигналу амплітудою 0.5В, якщо опорна напруга складає 5В, для вбудованого 10-розрядного АЦП мікроконтролера AVR?',
			'answers': ['102', '5', '10', '250'],
			'correct': '102',
			'answer': ''
		},
		{
			'id': 33,
			'title': 'Яким буде цифровий результат перетворення вхідного аналогового сигналу амплітудою 4.999В, якщо опорна напруга складає 5В, для вбудованого 10-розрядного АЦП мікроконтролера AVR?',
			'answers': ['1023', '4999', '1234', '256'],
			'correct': '1023',
			'answer': ''
		},
		{
			'id': 34,
			'title': 'Яким буде цифровий результат перетворення вхідного аналогового сигналу амплітудою 100мВ, якщо опорна напруга складає 4В, для вбудованого 10-розрядного АЦП мікроконтролера AVR?',
			'answers': ['25', '256', '1', '100'],
			'correct': '25',
			'answer': ''
		},
		{
			'id': 35,
			'title': 'Яким буде цифровий результат перетворення вхідного аналогового сигналу амплітудою 1В, для вбудованого 10-розрядного АЦП мікроконтролера AVR, якщо використовується вбудоване джерело опорної напруги 2.56В?',
			'answers': ['400', '1', '128', '25'],
			'correct': '400',
			'answer': ''
		},
		{
			'id': 36,
			'title': 'Яким буде цифровий результат перетворення вхідного аналогового сигналу амплітудою 2В, для вбудованого 10-розрядного АЦП мікроконтролера AVR, якщо використовується вбудоване джерело опорної напруги 2.56В?',
			'answers': ['800', '512', '128', '20'],
			'correct': '800',
			'answer': ''
		},
		{
			'id': 37,
			'title': 'Для якого із цих інтерфейсів присутній вбудований блок інтерфейсу у більшості мікроконтролерів AVR сімейств Mega та Tiny?',
			'answers': ['SPI', 'Ethernet', 'PCI', 'SCSI'],
			'correct': 'SPI',
			'answer': ''
		},
		{
			'id': 38,
			'title': 'Для якого із цих інтерфейсів зазвичай відсутній вбудований блок інтерфейсу у більшості мікроконтролерів AVR сімейств Mega та Tiny?',
			'answers': ['Ethernet', 'SPI', 'UART', 'TWI (I2C)'],
			'correct': 'Ethernet',
			'answer': ''
		},
		{
			'id': 39,
			'title': 'В якому із цих інтерфейсів передбачена наявність одного керуючого пристрою (Master) і одного або більше керованих (Slave)?',
			'answers': ['SPI', 'USB', 'UART', 'в жодному із перелічених'],
			'correct': 'SPI',
			'answer': ''
		},
		{
			'id': 40,
			'title': 'В якому із цих інтерфейсів передбачена адресація пристроїв на шині?',
			'answers': ['TWI (I2C)', 'UART', 'SPI', 'в жодному із перелічених'],
			'correct': 'TWI (I2C)',
			'answer': ''
		},
		{
			'id': 41,
			'title': 'В якому із цих інтерфейсів не передбачена дуплексна (одночасно в обох напрямках) передача даних?',
			'answers': ['TWI (I2C)', 'UART', 'SPI', 'всі перелічені інтерфейси підтримують дуплексний режим передачі'],
			'correct': 'TWI (I2C)',
			'answer': ''
		},
		{
			'id': 42,
			'title': 'Який із цих інтерфейсів є асинхронним (не має лінії тактування)?',
			'answers': ['UART', 'TWI (I2C)', 'SPI', 'всі перелічені інтерфейси є синхронними'],
			'correct': 'UART',
			'answer': ''
		},
		{
			'id': 43,
			'title': 'Який із цих інтерфейсів є синхронним (має лінію тактування)?',
			'answers': ['SPI', 'UART', 'USB', 'всі перелічені інтерфейси є асинхронними'],
			'correct': 'SPI',
			'answer': ''
		},
		{
			'id': 44,
			'title': 'Яке призначення ліній MOSI, MISO, SCK в синхронному протоколі SPI?',
			'answers': ['MOSI, MISO – передача даних, SCK - передача тактових імпульсів', 'MOSI –передача даних, MISO –передача службових сигналів, , SCK - передача тактових імпульсів', 'MOSI, MISO – передача даних, SCK – передача контрольного біту (напр. парності)', 'MISO –передача даних, MOSI – передача тактових імпульсів, SCK - передача контрольного біту (напр. парності) '],
			'correct': 'MOSI, MISO – передача даних, SCK - передача тактових імпульсів',
			'answer': ''
		},
		{
			'id': 45,
			'title': 'По якій лінії в інтерфейсі SPI дані передаються від керуючого пристрою (Master) до керованого (Slave)?',
			'answers': ['MOSI', 'MISO', 'SCK', 'SS'],
			'correct': 'MOSI',
			'answer': ''
		},
		{
			'id': 46,
			'title': 'По якій лінії в інтерфейсі SPI дані передаються від керованого  пристрою (Slave) до керуючого (Master)?',
			'answers': ['MISO', 'MOSI', 'SCK', 'SS'],
			'correct': 'MISO',
			'answer': ''
		},
		{
			'id': 47,
			'title': 'По якій лінії в інтерфейсі SPI передаються тактуючі імпульси?',
			'answers': ['SCK', 'MISO', 'MOSI', 'ні по якій'],
			'correct': 'SCK',
			'answer': ''
		},
		{
			'id': 48,
			'title': 'Який із пристроїв (Master чи Slave) в інтерфейсі SPI формує тактові імпульси, що супроводжують передачу кожного біта?',
			'answers': ['керуючий (Master)', 'керований (Slave)', 'той, який здійснює передачу', 'той, який здійснює прийом'],
			'correct': 'керуючий (Master)',
			'answer': ''
		},
		{
			'id': 49,
			'title': 'Для чого використовується лінія SS в протоколі SPI?',
			'answers': ['для вибору одного із керованих пристроїв керуючим пристроєм', 'для передачі тактових імпульсів', 'для передачі даних', 'такої лінії немає в SPI'],
			'correct': 'для вибору одного із керованих пристроїв керуючим пристроєм',
			'answer': ''
		},
		{
			'id': 50,
			'title': 'Що треба зробити, щоб почати передачу деякого байта по послідовному інтерфейсу SPI в МК AVR?',
			'answers': ['записати цей байт в регістр SPDR', 'записати цей байт в регістр PORT того порта, який використовується блоком SPI', 'записати цей байт в регістр PIN того порта, який використовується блоком SPI', 'дозволити переривання блоку SPI'],
			'correct': 'записати цей байт в регістр SPDR',
			'answer': ''
		},
		{
			'id': 51,
			'title': 'Яке призначення ліній RxD та TxD в асинхронному протоколі UART?',
			'answers': ['RxD – прийом даних, TxD – передача даних', 'RxD – прийом та передача даних, TxD – прийом та передача службових сигналів', 'RxD – передача даних, TxD – прийом даних', 'RxD – прийом та передача даних, TxD – передача тактових імпульсів'],
			'correct': 'RxD – прийом даних, TxD – передача даних',
			'answer': ''
		},
		{
			'id': 52,
			'title': 'Яким чином задається частота передачі даних для блоку послідовного інтерфейсу UART?',
			'answers': ['за допомогою регістра спеціальних функцій UBRR', 'за допомогою таймера-лічильника', 'за допомогою зовнішнього тактового сигналу', 'вона завжди дорівнює 1/8 тактової частоти МК'],
			'correct': 'за допомогою регістра спеціальних функцій UBRR',
			'answer': ''
		},
		{
			'id': 53,
			'title': 'Яким чином задається 9-й біт при передачі байта блоком UART у режимі з використанням біту парності?',
			'answers': ['він розраховується блоком UART автоматично', 'він повинен бути встановлений програмно у біті TXB8', 'замість одного передається два байти, де у другому в нульовій позиції знаходиться даний біт', 'такого режима немає у блоку UART МК AVR'],
			'correct': 'він розраховується блоком UART автоматично',
			'answer': ''
		},
		{
			'id': 54,
			'title': 'Яке призначення ліній SDA та SCL в інтерфейсі І2С?',
			'answers': ['SDA – передача даних, SCL – передача тактових імпульсів', 'SDA – передача даних, SCL – прийом даних', 'SDA – передача даних від керуючого до керованого, SCL – передача даних від керованого до керуючого пристрою', 'таких ліній немає в інтерфейсі І2С'],
			'correct': 'SDA – передача даних, SCL – передача тактових імпульсів',
			'answer': ''
		},
		{
			'id': 55,
			'title': 'Яким чином пристрої на шині I2С сигналізують про початок передачі даних?',
			'answers': ['перепадом з 1 в 0 на лінії SDA при наявності високого рівня на лінії SCL', 'видачею не менше 5 імпульсів на лінію SCL', 'утриманням лінії SDA в високому стані протягом не менше 3 тактів на лінії SCL', 'встановленням високого рівня на лінії SCL'],
			'correct': 'перепадом з 1 в 0 на лінії SDA при наявності високого рівня на лінії SCL',
			'answer': ''
		},
		{
			'id': 56,
			'title': 'Яким чином задається напрям передачі даних на шині І2С?',
			'answers': ['останній біт першого (адресного) байту, який передається керуючим пристроєм, визначає, читання чи запис буде виконувати керуючий пристрій', 'дані від керуючого пристрою до керованого і від керованого до керуючого передаються по різних лініях', 'всі непарні байти передаються від керуючого пристрою до керованого, а всі парні – від керованого до керуючого', 'передача завжди здійснюється від керуючого пристрою до керованого'],
			'correct': 'останній біт першого (адресного) байту, який передається керуючим пристроєм, визначає, читання чи запис буде виконувати керуючий пристрій',
			'answer': ''
		},
		{
			'id': 57,
			'title': 'Яке призначення першого байту у передачі на шині І2С?',
			'answers': ['цей байт містить адресу пристрою, з яким буде обмінюватись даними пристрій-ініціатор передачі, та напрям передачі даних (читання/запис)', 'це можуть бути довільні дані', 'цей байт містить контрольну суму, що використовується для контролю правильності передачі', 'цей байт містить спеціальну синхронізуючу послідовність, яка використовується приймаючим пристроєм для виділення границь бітових інтервалів'],
			'correct': 'цей байт містить адресу пристрою, з яким буде обмінюватись даними пристрій-ініціатор передачі, та напрям передачі даних (читання/запис)',
			'answer': ''
		},
		{
			'id': 58,
			'title': 'Як називається головний керуючий пристрій USB?',
			'answers': ['хост', 'USB-шина', 'порт', 'USB-кабель'],
			'correct': 'хост',
			'answer': ''
		},
		{
			'id': 59,
			'title': 'Що таке хост-контролер USB?',
			'answers': ['головний контролер, який входить до складу системного блоку компютера і управляє роботою всіх пристроїв на шині USB', 'пристрій, який забезпечує додаткові порти на шині USB', 'точка підключення деякого USB -пристрою ', 'периферійний пристрій або окремий блок периферійного пристрою, здатний передавати і приймати інформацію по шині USB.'],
			'correct': 'головний контролер, який входить до складу системного блоку компютера і управляє роботою всіх пристроїв на шині USB',
			'answer': ''
		},
		{
			'id': 60,
			'title': 'Що таке хаб USB?',
			'answers': ['пристрій, який забезпечує додаткові порти на шині USB', 'головний контролер, який входить до складу системного блоку компютера і управляє роботою всіх пристроїв на шині USB', 'точка підключення деякого USB -пристрою ', 'периферійний пристрій або окремий блок периферійного пристрою, здатний передавати і приймати інформацію по шині USB.'],
			'correct': 'пристрій, який забезпечує додаткові порти на шині USB',
			'answer': ''
		},
		{
			'id': 61,
			'title': 'До якої категорії відносять пристрої USB з пропускною здатністю 1,5 Мбіт/с? ',
			'answers': ['низькошвидкісний', 'середньошвидкісний', 'повношвидкісний', 'високошвидкісний'],
			'correct': 'низькошвидкісний',
			'answer': ''
		},
		{
			'id': 62,
			'title': 'Для чого використовуються керуючі передачі  (Control Transfers)?',
			'answers': ['використовуються хостом для конфігурування пристрою під час підключення, для керування пристроєм і отримання статусної інформації в процесі роботи', 'використовуються в тому випадку, коли потрібно передавати строго певну кількість пакетів даних невеликого розміру.', 'застосовуються для обміну даними в “реальному часі”, коли на кожному часовому інтервалі потрібно передавати строго певну кількість даних, але доставка інформації не гарантована (передавання даних проводиться без повторення при збоях, допускається втрата пакетів).', 'застосовуються при необхідності забезпечення гарантованої доставки даних від хоста до функції або від функції до хоста, але час доставки не обмежений.'],
			'correct': 'використовуються хостом для конфігурування пристрою під час підключення, для керування пристроєм і отримання статусної інформації в процесі роботи',
			'answer': ''
		},
		{
			'id': 63,
			'title': 'Для чого використовуються передачі масивів даних (Bulk Data Transfers)?',
			'answers': ['застосовуються при необхідності забезпечення гарантованої доставки даних від хоста до функції або від функції до хоста, але час доставки не обмежений.', 'використовуються хостом для конфігурування пристрою під час підключення, для керування пристроєм і отримання статусної інформації в процесі роботи', 'використовуються в тому випадку, коли потрібно передавати поодинокі пакети даних невеликого розміру.', 'застосовуються для обміну даними в “реальному часі”, коли на кожному часовому інтервалі потрібно передавати строго певну кількість даних, але доставка інформації не гарантована (передавання даних проводиться без повторення при збоях, допускається втрата пакетів).'],
			'correct': 'застосовуються при необхідності забезпечення гарантованої доставки даних від хоста до функції або від функції до хоста, але час доставки не обмежений.',
			'answer': ''
		},
		{
			'id': 64,
			'title': 'Для чого використовуються передачі по перериваннях  (Interrupt Transfers)?',
			'answers': ['використовуються в тому випадку, коли потрібно передавати поодинокі пакети даних невеликого розміру.', 'застосовуються при необхідності забезпечення гарантованої доставки даних від хоста до функції або від функції до хоста, але час доставки не обмежений.', 'використовуються хостом для конфігурування пристрою під час підключення, для керування пристроєм і отримання статусної інформації в процесі роботи', 'застосовуються для обміну даними в “реальному часі”, коли на кожному часовому інтервалі потрібно передавати строго певну кількість даних, але доставка інформації не гарантована (передавання даних проводиться без повторення при збоях, допускається втрата пакетів).'],
			'correct': 'використовуються в тому випадку, коли потрібно передавати поодинокі пакети даних невеликого розміру.',
			'answer': ''
		},
		{
			'id': 65,
			'title': 'Для чого використовуються ізохронні передачі (Isochronous Transfers)?',
			'answers': ['застосовуються для обміну даними в “реальному часі”, коли на кожному часовому інтервалі потрібно передавати строго певну кількість даних, але доставка інформації не гарантована (передавання даних проводиться без повторення при збоях, допускається втрата пакетів).', 'використовуються в тому випадку, коли потрібно передавати поодинокі пакети даних невеликого розміру. використовуються в тому випадку, коли потрібно передавати поодинокі пакети даних невеликого розміру.', 'застосовуються при необхідності забезпечення гарантованої доставки даних від хоста до функції або від функції до хоста, але час доставки не обмежений.', 'використовуються хостом для конфігурування пристрою під час підключення, для керування пристроєм і отримання статусної інформації в процесі роботи'],
			'correct': 'застосовуються для обміну даними в “реальному часі”, коли на кожному часовому інтервалі потрібно передавати строго певну кількість даних, але доставка інформації не гарантована (передавання даних проводиться без повторення при збоях, допускається втрата пакетів).',
			'answer': ''
		},
		{
			'id': 66,
			'title': 'Якщо внаслідок транзакції  передається пакет АСК, то це означає, що…',
			'answers': ['інформація прийнята одержувачем без помилок, операція успішно закінчена', 'функція зайнята (не готова до прийому або передачі даних);', 'відбувся збій при виконанні операції, функція не може прийняти або передати дані', 'такого пакету підтвердження не існує'],
			'correct': 'інформація прийнята одержувачем без помилок, операція успішно закінчена',
			'answer': ''
		},
		{
			'id': 67,
			'title': 'Якщо внаслідок транзакції  передається пакет NAK, то це означає, що…',
			'answers': ['функція зайнята (не готова до прийому або передачі даних)', 'інформація прийнята одержувачем без помилок, операція успішно закінчена', 'такого пакету підтвердження не існує', 'відбувся збій при виконанні операції, функція не може прийняти або передати дані'],
			'correct': 'функція зайнята (не готова до прийому або передачі даних)',
			'answer': ''
		},
		{
			'id': 68,
			'title': 'Якщо внаслідок транзакції  передається пакет STALL, то це означає, що…',
			'answers': ['відбувся збій при виконанні операції, функція не може прийняти або передати дані', 'такого пакету підтвердження не існує', 'інформація прийнята одержувачем без помилок, операція успішно закінчена', 'функція зайнята (не готова до прийому або передачі даних)'],
			'correct': 'відбувся збій при виконанні операції, функція не може прийняти або передати дані',
			'answer': ''
		}
	];
	
	function shuffle(a) {
		for (let i = a.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}
	for (var i=0; i<10; i++){
		shuffle(tests);
	}
	for (var i=0; i<tests.length; i++) {
		for (var j=0; j<tests[i].answers.length; j++) {
			shuffle(tests[i].answers);
		}
	}
	$scope.tests = [];
	
	var getParameter = function(key) {
		var qs = document.location.search;
		
		qs = qs.split('+').join(' ');

		var params = {},
			tokens,
			re = /[?&]?([^=]+)=([^&]*)/g;

		while (tokens = re.exec(qs)) {
			params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
		}
		
		return params[key];
	}
	
	var r = getParameter('r');	
	if (r !== undefined && (r < 0 || r > 100)) {
		r = -1;
	}
	$scope.r = parseInt(r);
	
	var n = getParameter('n');
	if (n === undefined || n <= 0 || n > tests.length) {
		n = tests.length;
	}
	for (var i=0; i<n; i++) {
		$scope.tests.push(tests[i]);
	}
	
	$scope.result = {
		'mark': 0,
		'total': 0,
		'done': 0,
		'finished': false,
		'error': []
	};
	
	$scope.isMultiAnswer = function(testIndex) {
		return Array.isArray($scope.tests[testIndex].answer);
	}
	
	$scope.multiAnswer = function(testObject, answerIndex) {
		var test = $scope.tests[$scope.tests.indexOf(testObject)];
		var answer = test.answers[answerIndex];
		
		if (!Array.isArray(test.answer)) {
			alert('Помилка системи...');
			return;
		}
		
		if (test.answer.indexOf(answer) > -1) {
			$scope.tests[$scope.tests.indexOf(testObject)].answer.splice(test.answer.indexOf(answer), 1);
		} else {
			$scope.tests[$scope.tests.indexOf(testObject)].answer.push(answer);
		}
	}
	
	$scope.finish = function() {
		var mark = 0;
		var total = $scope.tests.length;
		var done = 0;
		var error = [];
		
		for (var i=0; i<total; i++) {
			var test = $scope.tests[i];
			
			if (Array.isArray(test.answer)) {
				if (test.answer.length == test.correct.length) {
					var t = 0;
					
					for (var j=0; j<test.answer.length; j++) {
						for (var k=0; k<test.correct.length; k++) {
							if (test.answer[j] == test.correct[k]) {
								t++;
							}
						}
					}
					
					if (t == test.answer.length) {
						mark++;
					} else {
						error.push({'test': test, 'index': i+1});
					}
				} else {
					error.push({'test': test, 'index': i+1});
				}
				if (test.answer.length > 0) {
					done++;
				}
			} else {
				if (test.answer == test.correct) {
					mark++;
				} else {
					error.push({'test': test, 'index': i+1});
				}
				if (test.answer.length > 0) {
					done++;
				}
			}
		}
		
		if (done != $scope.tests.length) {
			alert('Дайте відповіді на усі питання!');
			return;
		}
		
		var percent = (mark/total)*100;
		var color = '#FFFFFF';
		if (percent >= 90) {
			color = '#8BC34A';
		} else if (percent >= 75) {
			color = '#FFEB3B';
		} else if (percent >= 60) {
			color = '#90CAF9';
		} else {
			color = '#F44336';
		}
		document.getElementById('body').style.backgroundColor = color;
		
		$scope.result = {
			'mark': mark,
			'total': total,
			'done': done,
			'finished': true,
			'error': error
		};
		
		clearInterval(timeinterval);
	}
	
	$scope.reset = function() {
		location.reload();
	}
	
	var m = 25;
	if (n != tests.length) {
		m = n * 1.5;
	}
	var endTime = new Date(Date.parse(new Date()) + m * 60 * 1000);
	var tick = function() {
		var t = Date.parse(endTime) - Date.parse(new Date());
		var minutes = Math.floor((t / 1000 / 60) % 60);
		var seconds = Math.floor((t / 1000) % 60);

		if (t <= 0) {
		  clearInterval(timeinterval);
		  document.getElementById('end').style.display = 'flex';
		}
		
		document.getElementById('time').innerHTML = ('0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2);
	}
	tick();
	var timeinterval = setInterval(tick, 1000);
});