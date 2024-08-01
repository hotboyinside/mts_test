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
                </div>
            </section>
        </main>
    </>
  )
}

export default HomePage
