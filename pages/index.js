// pages/index.js
import Head from 'next/head'
import Entretien from './Entretien'
import Footer from '../Componente/Footer'
import Header from '../Componente/Header'
import AppointmentForm from './AppointmentForm'
import SecondHandGallery from './SecondHandGallery'
// import AuthContext from './Admin/Login/AuthContext' // Import AuthContextProvider
import Signin from './Admin/Login/Signin' 

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Garage V-Parrot</title>
      </Head>
      <Header />
      <Entretien />
      <SecondHandGallery />
      <AppointmentForm />
      {/* <AuthContext>
        <Signin />
      </AuthContext> */}
      {children}
      <Footer />
    </>
  )
}






