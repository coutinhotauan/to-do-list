

export default function Title({children, name}){

    return(
        <div className="title-container" >
            {children}
            <span>{name}</span>
        </div>
    );

}