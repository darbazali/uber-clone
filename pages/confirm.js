import tw from "tailwind-styled-components"
import Map from "../components/Map"

import { useRouter } from "next/router"

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
    return (
        <Wrapper>
            <Map pickupCoords={pickup} dropoffCoords={dropoff} />

            <RideContainer>
                {/* Ride Seelector */}
                {/* Confirm Button */}
            </RideContainer>
        </Wrapper>
    )
}

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex-1
`

export default Confirm
