import Head from 'next/head'
import Header from './Header'

const Layout = ({title,keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meat name='keyword' content={keywords}/>
                <meat name='description' content={description}/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            <main className='container mx-auto my-7'>{children}</main>

        </div>
    );
};

Layout.defaultProps = {
    title:'Welcome to DevSpace',
    keywords: 'development, coding, programing',
    description: 'The best info and news in development'
}

export default Layout;
