import "./css/global.css";
import './css/index.desktop.css'
import './css/index.responsive.css'

export default function MyApp({
  Component: Component,
  pageProps: pageProps
}) {
  return <Component {...pageProps} />;
}
