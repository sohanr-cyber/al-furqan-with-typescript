import '../styles/globals.css'
import type { AppProps } from 'next/app'
import store from '../redux/store'
import { Provider } from 'react-redux'
import NextNProgress from "nextjs-progressbar";
import { SnackbarProvider } from "notistack";
// import ProgressBar from "react-scroll-progress-bar";


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <NextNProgress height={3} color="black" />
    <SnackbarProvider>
      <Provider store={store}>
        {/* <ProgressBar bgcolor="#00b7ff" /> */}
        <Component {...pageProps} />
      </Provider></SnackbarProvider>

  </>
}

export default MyApp
