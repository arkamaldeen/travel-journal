import data from "../data";
import Card from "./Card"

function Body() {

    console.log(data.length)


    return (
        <div className="container">
            <div className="body">
                <div className="card-container">
                    {
                        data.map((item) => {
                            return (
                                <Card
                                    key={item.id}
                                    isLast={item.id === data.length}
                                    {...item}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Body;