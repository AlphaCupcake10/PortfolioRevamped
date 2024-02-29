import Navbar from '../components/Navbar'
import Button from '../components/common/Button'
import { TransitionLink } from '../contexts/PageLoaderContext'

function Page404() {
  return (
    <>
        <Navbar />
        <section className="container h-screen mx-auto flex flex-col justify-center items-center">
            <h1 className="text-9xl font-bold">404</h1>
            <p className="text-2xl">Page Not Found</p>
            <div>
                <TransitionLink to="/"><Button className='w-48 mt-4' color={'primary'}>HOME</Button></TransitionLink>
            </div>
        </section>
    </>
  )
}

export default Page404