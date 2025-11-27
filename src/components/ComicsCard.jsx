export default function ComicsCard({image,title})
{ 
    return(
            <div className="col2">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            </div>
    )
}

