
# Avrora Service — Shell (Host)

Host-приложение микрофронтенд архитектуры.

Shell отвечает за:
- загрузку Remote-приложения (Catalog) через Module Federation
- глобальные провайдеры (например NotificationProvider)
- роутинг
- инфраструктуру приложения

---

## ⚙️ Технологии

- Vite
- React 19
- TypeScript
- Module Federation (@originjs/vite-plugin-federation)
- MSW (Mock Service Worker)
- MUI (для инфраструктурного UI)

---
## 🏗 Архитектура

Проект построен по принципам **Feature-Sliced Design (FSD)**.
---
## 🚀 Установка

```bash
npm i
```

---

## ▶️ Запуск

```bash
npm run dev
```

Приложение будет доступно по адресу:

```
http://localhost:3000
```

⚠️ Важно: перед запуском Shell необходимо запустить проект
**avrora-service-catalog** на порту `3001`.
---

## 🔗 Связанный репозиторий

Remote (Catalog):

[https://github.com/BelenovNurdaulet/avrora-service-catalog](https://github.com/BelenovNurdaulet/avrora-service-catalog)
