import './HomePage.scss'
import Header from '../../components/Header/Header'

function HomePage() {
  return (
    <>
        <Header />
        <main className='main'>
            <section className='home'>
                <div className='home__container container'>
                    <h1 className='home__title title'>Картотека супергероев</h1>
                    <p className='home__text'>
                        Приложение "Картотека супергероев" создано для поклонников Marvel, а также для всех, кто интересуется комиксами и супергероями. Сервис позволяет удобно и быстро находить информацию о любимых персонажах и комиксах, расширяя знания пользователей о вселенной Marvel. Возможность перехода по различным страницам и поиска делает этот инструмент полезным для исследователей, коллекционеров и простых любителей комиксов.
                    </p>
                </div>
            </section>
        </main>
    </>
  )
}

export default HomePage
