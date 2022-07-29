import 'antd/dist/antd.css';
import 'leaflet/dist/leaflet.css';
import '../styles/globals.scss';
import '../styles/antd-custom.css';
import type { AppProps } from 'next/app';
// import { ConfigProvider } from "antd";
// import ptBr from "antd/es/locale/pt_BR";
import { Provider } from "react-redux";

import store from '@/store/storeConfig';

import { Header } from '@/components/Header';
import { KnowMorePackages } from '@/components/KnowMorePackages';
import { BrazilCities } from '@/components/BrazilCities';
import { Footer } from '@/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ConfigProvider locale={ptBr}>
    <Provider store={store}>
      <Header/>
      <Component {...pageProps} />
      <KnowMorePackages/>
      <BrazilCities/>
      <Footer/>
    </Provider>
    // </ConfigProvider>
  )
}

export default MyApp
