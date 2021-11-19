import tw from "tailwind-styled-components"

const RideSelector = () => {
    return (
        <Wrapper>
            <Title>Choose a ride, or swipe to see more.</Title>

            <CarList>
                <Car>
                    <CarImage src='/assets/UberX.jpeg' />
                    <CarDetails>
                        <Service>UberX</Service>
                        <Time>5 min away</Time>
                    </CarDetails>
                    <Price>$26.82</Price>
                </Car>
            </CarList>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    flex-1 
`

const Title = tw.div`
    text-center text-gray-500 text-xs border-b py-2
`

/* ===================================
    CAR
=================================== */
const CarList = tw.div`
    flex flex-col
`
const Car = tw.div`
    flex flex-row py-4 items-center cursor-pointer
`
const CarImage = tw.img`
    h-14 mr-4
`
const CarDetails = tw.div`
    flex-1
`
const Service = tw.div`
    font-bold
`
const Time = tw.div`
    text-sm text-blue-500
`
const Price = tw.div`
    text-sm
`

export default RideSelector
