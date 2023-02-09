const Shimmer = () => {
    return <div className="cardslist">
        {Array(20)
        .fill("")
        .map((e, index) => (
                    <div key={index} className="card" style={{backgroundColor: '#dedede'}}></div>
        ))}
    </div>
}
export default Shimmer;