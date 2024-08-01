import './ComicsPage.scss'

import Header from '../../components/Header/Header'

function ComicsPage() {
  return (
    <>
        <Header />
        <main className='main'>
            <section className='comics'>
                <div className='comics__container container'>
                    <h1 className='comics__title title'>Комиксы MARVEL</h1>
                </div>
            </section>
        </main>
    </>
  )
}

export default ComicsPage
