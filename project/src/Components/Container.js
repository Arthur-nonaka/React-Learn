const Container = ({children, title}) => {
    return(
        <div className="container">
            <h3>
                {title}
            </h3>
            {children}
        </div>
    )
}

export default Container;