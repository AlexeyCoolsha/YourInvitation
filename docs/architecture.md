# Target Frontend Architecture

src/
├── app/
│   ├── App.tsx                  # Корневой компонент приложения    
│   ├── main.tsx                 # Точка входа React
│   ├── providers/
│   │   └── QueryProvider.tsx    # Настройка TanStack Query
│   ├── router/
│   │   └── index.tsx            # Маршруты страниц
│   └── styles/
│       ├── globals.css          # Глобальные стили
│       └── variables.css        # Цвета, шрифты, размеры
│
├── pages/
│   ├── home/
│   │   ├── ui/HomePage.tsx      # Главная страница
│   │   └── index.ts             # Публичный экспорт страницы
│   ├── templates/
│   │   ├── ui/TemplatesPage.tsx # Каталог приглашений
│   │   └── index.ts
│   ├── template-details/
│   │   └── ui/TemplateDetailsPage.tsx # Страница шаблона
│   ├── about/
│   │   └── ui/AboutPage.tsx     # О проекте
│   ├── contacts/
│   │   └── ui/ContactsPage.tsx  # Контакты
│   ├── order/
│   │   └── ui/OrderPage.tsx     # Оформление заявки
│   ├── login/
│   │   └── ui/LoginPage.tsx     # Вход
│   ├── profile/
│   │   └── ui/ProfilePage.tsx   # Личный кабинет
│   └── admin/
│       └── ui/AdminPage.tsx     # Панель администратора
│
├── widgets/
│   ├── header/
│   │   └── ui/Header.tsx        # Шапка сайта
│   ├── footer/
│   │   └── ui/Footer.tsx        # Подвал
│   └── site-layout/
│       └── ui/SiteLayout.tsx    # Общий каркас сайта
│
├── features/
│   ├── order-form/
│   │   ├── ui/OrderForm.tsx     # Форма отправки заявки
│   │   ├── model/schema.ts      # Схема валидации формы
│   │   └── api/createOrder.ts   # Отправка заявки на сервер
│   ├── authentication/
│   │   ├── ui/LoginForm.tsx     # Форма авторизации
│   │   └── api/login.ts         # Запрос авторизации
│   ├── template-filter/
│   │   └── ui/TemplateFilter.tsx # Фильтры каталога
│   └── order-management/
│       └── ui/OrderStatusSelect.tsx # Изменение статуса заказа
│
├── entities/
│   ├── template/
│   │   ├── ui/TemplateCard.tsx  # Карточка приглашения
│   │   ├── model/types.ts       # Типы шаблона
│   │   └── api/getTemplates.ts  # Получение шаблонов
│   ├── category/
│   │   └── model/types.ts       # Типы категории
│   ├── order/
│   │   └── model/types.ts       # Типы заказа
│   └── user/
│       └── model/types.ts       # Типы пользователя
│
└── shared/
    ├── api/
    │   ├── client.ts            # Общий HTTP-клиент
    │   └── types.ts             # Общие типы API
    ├── ui/
    │   ├── Button/
    │   │   ├── Button.tsx       # Универсальная кнопка
    │   │   ├── Button.module.css
    │   │   └── index.ts
    │   ├── Input/
    │   ├── Modal/
    │   └── Loader/
    ├── assets/                  # Изображения, SVG, шрифты
    ├── config/
    │   └── env.ts               # Настройки frontend
    └── lib/
        └── formatDate.ts        # Общие функции

# Target Backend Architecture

src/
├── app.ts                       # Создание Express-приложения
├── server.ts                    # Запуск HTTP-сервера
│
├── config/
│   └── env.ts                   # Проверка переменных окружения
│
├── routes/
│   └── index.ts                 # Подключение API-маршрутов
│
├── modules/
│   ├── auth/
│   │   ├── auth.routes.ts       # Маршруты входа и выхода
│   │   ├── auth.controller.ts   # Обработка HTTP-запросов
│   │   ├── auth.service.ts      # Логика авторизации
│   │   └── auth.schemas.ts      # Проверка входных данных
│   │
│   ├── users/
│   │   ├── users.routes.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.repository.ts
│   │
│   ├── templates/
│   │   ├── templates.routes.ts
│   │   ├── templates.controller.ts
│   │   ├── templates.service.ts
│   │   └── templates.repository.ts
│   │
│   ├── categories/
│   │   ├── categories.routes.ts
│   │   ├── categories.controller.ts
│   │   └── categories.service.ts
│   │
│   ├── orders/
│   │   ├── orders.routes.ts
│   │   ├── orders.controller.ts
│   │   ├── orders.service.ts
│   │   ├── orders.repository.ts
│   │   └── orders.schemas.ts
│   │
│   ├── uploads/
│   │   └── uploads.service.ts   # Загрузка изображений и файлов
│   │
│   └── audit/
│       └── audit.service.ts     # Журналирование действий
│
├── middleware/
│   ├── authenticate.ts          # Проверка авторизации
│   ├── authorize.ts             # Проверка прав доступа
│   ├── errorHandler.ts          # Обработка ошибок
│   └── notFound.ts              # Обработка неизвестных маршрутов
│
└── lib/
    └── prisma.ts                # Экземпляр Prisma Client