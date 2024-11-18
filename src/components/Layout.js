import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
const Layout = () => {
    return (
        <>
            <Header />
            <main className="App">
                <Outlet />
            </main>
            <Footer />
            <footer className="footer"> {/* Footer section */}
        <p>&copy; {new Date().getFullYear()} Salim Saay. All Rights Reserved.</p> {/* Dynamic copyright year */}
      </footer>

        </>
    )
}

export default Layout