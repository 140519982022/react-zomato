import indiaFlag from '../images/in.webp';

function PopularLocation() {
    return (
        <>
            <h1 className='text-center pt-5'>
                Popular locations in <img src={indiaFlag} alt="" />  India
            </h1>

            <p className='fw-light lh-lg h5 pt-4'>
            From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
            </p>


        </>
    )

}

export default PopularLocation