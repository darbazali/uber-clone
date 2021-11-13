import { useEffect } from "react"
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"

mapboxgl.accessToken =
    "pk.eyJ1IjoidGhlYXNzZXQiLCJhIjoiY2tyb3V1ZTZmMWpsMDJubDdha2lsbXYxeSJ9.A_zwqkPVPGP75uNMSHlzNQ"

const Index = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/streets-v11",
            center: [-99.29, 39.39],
            zoom: 3,
        })
    }, [])

    return (
        <Wrapper>
            <Map id='map'></Map>
            <ActionItems>Start</ActionItems>
        </Wrapper>
    )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`
const ActionItems = tw.div`
  bg-blue-500 flex-1
`
const Map = tw.div`
   flex-1
`

export default Index
