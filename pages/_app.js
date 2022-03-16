import '../styles/globals.css';
import '../styles/login.css';
import '../styles/userbar.css';
import '../styles/logged.css';
import '../styles/content.css';
import '../styles/title.css';
import '../styles/dashboard.css';
import '../styles/new-task.css';
import AuthProvider from "../contexts/auth";

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp
