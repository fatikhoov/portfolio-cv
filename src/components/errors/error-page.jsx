import { useRouteError } from 'react-router-dom'
import Layout from '../layout/Layout'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  const errorMessages = {
    400: 'Неверный запрос. Проверьте введенные данные и повторите попытку.',
    401: 'Неавторизованный доступ. Пожалуйста, войдите в систему.',
    403: 'Доступ запрещен. У вас нет прав для просмотра этой страницы.',
    404: 'Страница не найдена. Пожалуйста, проверьте правильность введенного адреса.',
    500: 'Внутренняя ошибка сервера. Пожалуйста, повторите попытку позже.',
  }

  let errorMessage = 'Произошла непредвиденная ошибка.'
  if (error && error.status && errorMessages[error.status]) {
    errorMessage = errorMessages[error.status]
  }

  return (
    <>
      <Layout>
        <div id="error-page">
          <p>
            <i>{errorMessage}</i>
          </p>
        </div>
      </Layout>
    </>
  )
}
