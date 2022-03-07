const Layout = ({children}: {children: React.ReactNode}) => (
    <div>
        <div>
            header
        </div>
        <div>
            {children}
        </div>
    </div>
)

export default Layout;