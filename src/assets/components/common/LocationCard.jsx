import { IoIosArrowForward } from "react-icons/io";
import { LocationJsonData } from './LocationJsonData';

let LocationArr = LocationJsonData.map((locName, locIndex) => {
    return (
        <>

            <CardBody locationName={locName.location}></CardBody>




        </>
    )

}

)

function LocationCard() {
    return (
        <>

            <div className="py-5">
                <div className='container-fluid '>
                    <div className='container'>
                        <div className='row '>
                            {
                                LocationArr
                            }
                        </div>

                    </div>
                </div>
            </div>



        </>
    )


}

function CardBody(props) {

    return (
        <>
            <div className='col-md-4 mb-5'>

                <div className="card shadow p-1 bg-body-tertiary rounded">
                    <div className="card-body d-flex justify-content-between ">
                        {props.locationName}
                        <div><IoIosArrowForward /></div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default LocationCard