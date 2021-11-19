import tw from "tailwind-styled-components"
import Map from "../components/Map"
import RideSelector from "../components/RideSelector"
import { useRouter } from "next/router"

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
    return (
        <Wrapper>
            <Map pickupCoords={pickup} dropoffCoords={dropoff} />

            <RideContainer>
                {/* Ride Seelector */}
                <RideSelector />
                {/* Confirm Button */}

                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    flex h-screen flex-col overflow-y-hidden
`

const RideContainer = tw.div`
    flex-1 px-2 flex flex-col h-1/2
`
const ConfirmButtonContainer = tw.div`

`
const ConfirmButton = tw.button`
    w-full py-4 px-6 my-4 text-blue-100 
    transition-colors duration-150 bg-blue-700 
    rounded-lg focus:shadow-outline hover:bg-blue-800
`

export default Confirm
