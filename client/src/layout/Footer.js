import React from 'react'

const Footer = () => {
    const thisYear = new Date().getFullYear();
    return (
        <div className="footer"><p className="copyright">Copyright &copy; {thisYear}</p></div>
    )
}

export default Footer
