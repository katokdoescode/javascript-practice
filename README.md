# Практика по JavaScript

В этом репозитории собраны задачи по JavaScript, которые максимально приближены к задачам, с которыми сталкиваются фронтенд-разработчики в реальном мире.

У этих задач нет единственно верного решения, решений может быть масса, и это отличный способ,
потренироваться и найти слабые места в своих навыках, научиться чему-то новому, или наработать опыт.

## Как этим пользоваться

Репозиторий состоит из множества файлов, но для работы потребуется только папка `practices/`, в ней как раз собраны все задачи, они идут по порядку, но их можно проходить в любой последовательности.

**Перед началом работы:**
1. Нужно установить зависимости, для этого нужно ввести в консоль/терминал команду `npm i` (или `npm install`);
2. А так же установить все необходимое для запуска тестов, для этого нужно ввести в консоль/терминал команду `npx playwright install`;

Чтобы начать практику, нужно запустить локальный сервер, это позволит открыть страницу над которой ты работаешь, в браузере, и она будет обновляться всякий раз когда произойдут изменения в коде, в общем это просто удобно.

Для запуска сервера, открой консоль/терминал, убедись что ты находишься в папке `javascript-practice`, и выполни команду `npm run start` (или `npm start`), если все хорошо, появится сообщение:

```bash
  VITE v5.3.2  ready in 73 ms

  ➜  Local:   http://localhost:3399/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

Теперь можно открыть браузер и ввести в адресную строку адрес - `http://localhost:3399/practices/{{ название практики }}`, например: `http://localhost:3399/practices/practice-1/`, должна открыться страница. Так же можно просто открыть `http://localhost:3399/`, там будет страница со списком ссылок на каждую из практик.

В папке с каждой из практик есть файл README.md, в нем содержится задание, а так же дополнительные инструкции.

## Проверка задания

Для каждой практики написаны тесты, которые проверят правильность выполнения задания. Они не проверяют сам код, они проверяют результат, итоговое поведение элементов на странице, в соответствии с заданием.

Чтобы запустить тест для определенного задания, нужно выполнить команду в консоли - `npm run test {{ название задачи }}`, вот пример для задания `practice-1`:

```bash
npm run test practice-1

// или

npm test practice-1
```

Далее будут запущены тесты для текущего задания, они проверят всё необходимое и выведут в консоль ошибки, которые нужно исправить, и если все критерии соответствуют задаче, тест будет пройден, и это будет значить что задание выполнено успешно!

Чтобы лучше понять по каким критериям проводятся тесты, можно открыть файл тестов, и изучить структуру теста. Например для `practice-1` задания, тест находится в файле `./tests/practice-1.spec.js`.

Тестировщик так-же делает скриншоты для каждого теста, они хранятся в папке `./test-results` в корне проекта. Они подписаны, так что можно посмотреть что видит тестировщик, когда проверяет задание.
