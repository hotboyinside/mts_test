import './Heroes.scss'
import Header from '../../components/Header/Header'

function HeroesPage() {
  return (
    <>
        <Header />
        <main className='main'>
            <section className='heroes'>
                <div className='heroes__container container'>
                    <h1 className='heroes__title title'>Герои комиксов</h1>
                </div>
            </section>
        </main>
    </>
  )
}

export default HeroesPage
